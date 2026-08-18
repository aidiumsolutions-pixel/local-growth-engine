import { createFileRoute, Link } from "@tanstack/react-router";
import { listBlogPosts } from "@/lib/blog.functions";
import { BookCallButton, WhatsAppButton } from "@/components/site/CtaButton";

const TITLE = "Service Business Growth Blog | AI Automation & Lead Gen Insights";
const DESC = "Market trends, benchmarks and playbooks for HVAC, roofing, dental, med spa and other service businesses — written weekly by the Aidium Solutions research desk.";
const URL = "https://localboost-automation.lovable.app/blog";

export const Route = createFileRoute("/blog/")({
  loader: async () => ({ posts: await listBlogPosts() }),
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Aidium Solutions Blog",
          url: URL,
          publisher: { "@type": "Organization", name: "Aidium Solutions" },
        }),
      },
    ],
  }),
  component: BlogIndex,
});

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function BlogIndex() {
  const { posts } = Route.useLoaderData();
  const [featured, ...rest] = posts;

  return (
    <main>
      <section className="page-hero">
        <div className="section-inner">
          <div className="section-label">Insights</div>
          <h1>What's actually happening in service business growth</h1>
          <p className="section-sub">
            New articles published automatically every week — real operating benchmarks, demand
            shifts and automation playbooks for local service companies across the US.
          </p>
        </div>
      </section>

      <section>
        <div className="section-inner">
          {posts.length === 0 ? (
            <p className="section-sub">The first articles are being written right now — check back shortly.</p>
          ) : (
            <>
              {featured && (
                <Link to="/blog/$slug" params={{ slug: featured.slug }} className="post-featured">
                  {featured.hero_image && <img src={featured.hero_image} alt={featured.title} loading="eager" />}
                  <div className="post-featured-body">
                    <div className="post-meta">
                      <span className="post-tag">{featured.category}</span>
                      <span>{formatDate(featured.published_at)}</span>
                      <span>{featured.read_minutes} min read</span>
                    </div>
                    <h2>{featured.title}</h2>
                    <p>{featured.excerpt}</p>
                    <span className="post-readmore">Read article →</span>
                  </div>
                </Link>
              )}
              <div className="post-grid">
                {rest.map((p) => (
                  <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="post-card">
                    {p.hero_image && (
                      <div className="post-card-photo">
                        <img src={p.hero_image} alt={p.title} loading="lazy" />
                      </div>
                    )}
                    <div className="post-card-body">
                      <div className="post-meta">
                        <span className="post-tag">{p.category}</span>
                        <span>{p.read_minutes} min read</span>
                      </div>
                      <h3>{p.title}</h3>
                      <p>{p.excerpt}</p>
                      <span className="post-date">{formatDate(p.published_at)}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <div className="cta-section">
        <div className="cta-inner">
          <h2>Want this working in your business?</h2>
          <p>Book a free 20-minute strategy call and we'll map the fastest path to more booked jobs.</p>
          <div className="cta-actions">
            <BookCallButton label="Book Your Free Call" />
            <WhatsAppButton />
          </div>
        </div>
      </div>
    </main>
  );
}