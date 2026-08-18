import { createServerFn } from "@tanstack/react-start";

export type BlogPostSummary = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  hero_image: string | null;
  tags: string[];
  read_minutes: number;
  published_at: string;
};

export type BlogPost = BlogPostSummary & { body: string; author: string };

export const listBlogPosts = createServerFn({ method: "GET" }).handler(async () => {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const { data, error } = await supabaseAdmin
    .from("blog_posts")
    .select("slug, title, excerpt, category, hero_image, tags, read_minutes, published_at")
    .eq("published", true)
    .order("published_at", { ascending: false })
    .limit(60);
  if (error) throw new Error(error.message);
  return (data ?? []) as BlogPostSummary[];
});

export const getBlogPost = createServerFn({ method: "GET" })
  .inputValidator((data: { slug: string }) => data)
  .handler(async ({ data: input }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data, error } = await supabaseAdmin
      .from("blog_posts")
      .select("slug, title, excerpt, body, author, category, hero_image, tags, read_minutes, published_at")
      .eq("slug", input.slug)
      .eq("published", true)
      .maybeSingle();
    if (error) throw new Error(error.message);
    return (data as BlogPost | null) ?? null;
  });