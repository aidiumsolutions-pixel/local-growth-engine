import { supabaseAdmin } from "@/integrations/supabase/client.server";

const TOPICS = [
  "How service businesses are cutting lead response time with AI in 2026",
  "The real cost of a missed call for HVAC and plumbing companies right now",
  "Why no-show rates are climbing and what reminder automation does about it",
  "What rising paid-ad costs mean for local service businesses this quarter",
  "Dental and med spa new-patient acquisition: what's actually working now",
  "Speed-to-lead benchmarks across home services and how to beat them",
  "AI receptionists vs. answering services: current market reality",
  "Google reviews as a growth channel for local service brands",
  "CRM adoption trends among small service businesses",
  "Seasonal demand swings in roofing and landscaping: automating the peaks",
  "Why booking friction kills conversion for high-ticket local services",
  "Local SEO plus automation: the compounding effect on booked jobs",
];

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=80",
];

function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 70);
}

type GeneratedPost = {
  title: string;
  excerpt: string;
  body: string;
  category: string;
  tags: string[];
  read_minutes: number;
};

export async function generateAndStorePost(topicOverride?: string) {
  const apiKey = process.env["LOVABLE_API_KEY"];
  if (!apiKey) throw new Error("LOVABLE_API_KEY is not configured");

  const { data: recent } = await supabaseAdmin
    .from("blog_posts")
    .select("title")
    .order("published_at", { ascending: false })
    .limit(12);

  const usedTitles = (recent ?? []).map((r) => r.title);
  const pool = TOPICS.filter((t) => !usedTitles.some((u) => u.toLowerCase().includes(t.slice(0, 25).toLowerCase())));
  const topic = topicOverride ?? (pool.length ? pool[Math.floor(Math.random() * pool.length)] : TOPICS[Math.floor(Math.random() * TOPICS.length)]);

  const system = [
    "You are the senior content strategist for Aidium Solutions, a US-focused AI automation agency that builds websites, CRM follow-up, lead generation and appointment booking systems for service businesses (HVAC, roofing, plumbing, dental, med spa, fitness, real estate, law, cleaning, landscaping).",
    "You write practical, specific, editorially credible articles for owners of local service businesses.",
    "Rules: no invented statistics, no fake client names, no fake studies. Where numbers are directional, phrase them as ranges or as what operators typically report. Never fabricate testimonials or guarantees.",
    "Write in clear American English, second person, concrete and operational. Avoid hype and AI cliches.",
  ].join(" ");

  const user = `Write a 1,100-1,500 word SEO article for the Aidium Solutions blog on this angle: "${topic}".

Structure it in markdown:
- Start with 2 short intro paragraphs (no H1 in the body).
- 4-6 "## " sections with descriptive, keyword-aware headings.
- Use "- " bullet lists where useful, and short paragraphs.
- End with a "## What to do next" section that recommends a concrete operational next step (and mentions booking a strategy call with Aidium Solutions once, naturally).

Return ONLY valid JSON matching:
{"title": string (<=65 chars, keyword-led, no company name), "excerpt": string (<=155 chars), "category": one of "Market Trends" | "Lead Generation" | "Automation" | "Local SEO" | "Operations", "tags": string[3-5], "read_minutes": number, "body": string (markdown)}`;

  const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "google/gemini-3.5-flash",
      messages: [
        { role: "system", content: system },
        { role: "user", content: user },
      ],
      response_format: { type: "json_object" },
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`AI gateway error ${res.status}: ${text.slice(0, 300)}`);
  }

  const payload = (await res.json()) as { choices?: Array<{ message?: { content?: string } }> };
  const raw = payload.choices?.[0]?.message?.content ?? "";
  const cleaned = raw.replace(/^```(?:json)?/i, "").replace(/```$/, "").trim();

  let post: GeneratedPost;
  try {
    post = JSON.parse(cleaned) as GeneratedPost;
  } catch {
    throw new Error("AI returned unparsable JSON");
  }

  if (!post.title || !post.body) throw new Error("AI response missing title or body");

  let slug = slugify(post.title);
  const { data: existing } = await supabaseAdmin.from("blog_posts").select("id").eq("slug", slug).maybeSingle();
  if (existing) slug = `${slug}-${Date.now().toString(36).slice(-4)}`;

  const hero = HERO_IMAGES[Math.floor(Math.random() * HERO_IMAGES.length)];

  const { data, error } = await supabaseAdmin
    .from("blog_posts")
    .insert({
      slug,
      title: post.title.slice(0, 120),
      excerpt: (post.excerpt || "").slice(0, 200),
      body: post.body,
      category: post.category || "Market Trends",
      tags: Array.isArray(post.tags) ? post.tags.slice(0, 5) : [],
      read_minutes: Number.isFinite(post.read_minutes) ? Math.min(20, Math.max(3, Math.round(post.read_minutes))) : 6,
      hero_image: hero,
      published: true,
    })
    .select("slug, title")
    .single();

  if (error) throw new Error(error.message);
  return data;
}