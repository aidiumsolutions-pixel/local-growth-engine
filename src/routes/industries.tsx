import { createFileRoute, Link, Outlet, useMatches } from "@tanstack/react-router";
import { INDUSTRIES } from "@/data/industries";

const TITLE = "Automation & Booking Systems by Industry | Aidium Solutions";
const DESC = "Industry-specific AI automation, CRM, and appointment booking systems built for HVAC, roofing, dental, medical, real estate, legal, fitness, and 40+ other service industries.";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesLayout,
});

function IndustriesLayout() {
  const matches = useMatches();
  const onChild = matches.some((m) => m.routeId === "/industries/$industry");
  if (onChild) return <Outlet />;
  return (
    <main>
      <div className="page-hero">
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="page-hero-inner">
          <div className="hero-eyebrow">Industries</div>
          <h1>Industries <em>We Serve</em></h1>
          <p>Automation systems built for the way your industry actually works — capturing leads, following up, and filling your calendar.</p>
        </div>
      </div>
      <section>
        <div className="section-inner">
          <div className="seo-links">
            {INDUSTRIES.map((i) => (
              <Link key={i.slug} to="/industries/$industry" params={{ industry: i.slug }}>
                {i.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}