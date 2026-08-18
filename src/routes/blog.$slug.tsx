import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getBlogPost } from "@/lib/blog.functions";
import { Markdown } from "@/components/site/Markdown";
import { BookCallButton, WhatsAppButton } from "@/components/site/CtaButton";

const BASE = "https://localboost-automation.lovable.app";

export const Route = createFileRoute("/blog/$slug")({
  loader: async ({ params }) => {
    const post = await getBlogPost({ data: { slug: params.slug } });
    if (!post) throw notFound();
    return { post };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Article unavailable — Aidium Solutions" }, { name: "robots", content: "noindex" }] };
    }
    const { post } = loaderData;
    const url = `${BASE}/blog/${params.slug}`;
    const meta = [
      { title: `${post.title} | Aidium Solutions` },
      { name: "description", content: post.excerpt },
      { property: "og:title", content: post.title },
      { property: "og:description", content: post.excerpt },
      { property: "og:type", content: "article" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
    ];
    if (post.hero_image?.startsWith("https://")) {
      meta.push({ property: "og:image", content: post.hero_image });
      meta.push({ name: "twitter:image", content: post.hero_image });
    }
    return {
      meta,
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.published_at,
            image: post.hero_image ?? undefined,
            author: { "@type": "Organization", name: post.author },
            publisher: { "@type": "Organization", name: "Aidium Solutions" },
            mainEntityOfPage: url,
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: BASE },
              { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE}/blog` },
              { "@type": "ListItem", position: 3, name: post.title, item: url },
            ],
          }),
        },
      ],
    };
  },
  notFoundComponent: PostNotFound,
  component: PostPage,
});

function PostNotFound() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-inner">
          <h1>Article not found</h1>
          <p className="section-sub">
            That article doesn't exist. <Link to="/blog">Browse all articles</Link>.
          </p>
        </div>
      </section>
    </main>
  );
}

function PostPage() {
  const { post } = Route.useLoaderData();
  const date = new Date(post.published_at).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <main>
      <article className="article">
        <div className="article-inner">
          <Link to="/blog" className="article-back">← All articles</Link>
          <div className="post-meta">
            <span className="post-tag">{post.category}</span>
            <span>{date}</span>
            <span>{post.read_minutes} min read</span>
          </div>
          <h1>{post.title}</h1>
          <p className="article-lede">{post.excerpt}</p>
          {post.hero_image && (
            <div className="article-photo">
              <img src={post.hero_image} alt={post.title} loading="eager" />
            </div>
          )}
          <Markdown content={post.body} />
          {post.tags?.length > 0 && (
            <div className="article-tags">
              {post.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          )}
        </div>
      </article>

      <div className="cta-section">
        <div className="cta-inner">
          <h2>Ready to put this into practice?</h2>
          <p>We build the website, follow-up and booking system for you — usually live in 7 days.</p>
          <div className="cta-actions">
            <BookCallButton label="Book Your Free Call" />
            <WhatsAppButton />
          </div>
        </div>
      </div>
    </main>
  );
}