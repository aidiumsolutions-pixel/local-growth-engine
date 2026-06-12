import { createFileRoute, Link } from "@tanstack/react-router";
import { LOCATIONS } from "@/data/locations";

const TITLE = "AI Automation & Lead Generation by City | Aidium Solutions";
const DESC = "Local pages for Aidium Solutions' AI automation, CRM, and appointment booking services in every city we serve across the United States.";

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/locations" },
    ],
    links: [{ rel: "canonical", href: "/locations" }],
  }),
  component: LocationsIndex,
});

function LocationsIndex() {
  return (
    <main>
      <div className="page-hero">
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="page-hero-inner">
          <div className="hero-eyebrow">Locations</div>
          <h1>Cities <em>We Serve</em></h1>
          <p>AI automation, lead generation, CRM, and appointment booking systems for service businesses in every major city across the United States.</p>
        </div>
      </div>
      <section>
        <div className="section-inner">
          <div className="seo-links">
            {LOCATIONS.map((l) => (
              <Link key={l.slug} to="/$slug" params={{ slug: l.slug }}>
                {l.service} in {l.city}, {l.region}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}