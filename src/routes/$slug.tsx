import { createFileRoute, notFound } from "@tanstack/react-router";
import { locationBySlug, LOCATIONS } from "@/data/locations";
import { LongFormContent, pageFaqFor, pageFaqJsonLd } from "@/components/site/LongFormContent";

export const Route = createFileRoute("/$slug")({
  loader: ({ params }) => {
    const loc = locationBySlug(params.slug);
    if (!loc) throw notFound();
    return loc;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const faq = pageFaqFor(loaderData.city, loaderData.service);
    return {
      meta: [
        { title: loaderData.metaTitle },
        { name: "description", content: loaderData.metaDescription },
        { property: "og:title", content: loaderData.metaTitle },
        { property: "og:description", content: loaderData.metaDescription },
        { property: "og:type", content: "website" },
        { property: "og:url", content: `/${loaderData.slug}` },
      ],
      links: [{ rel: "canonical", href: `/${loaderData.slug}` }],
      scripts: [{ type: "application/ld+json", children: JSON.stringify(pageFaqJsonLd(faq)) }],
    };
  },
  component: CityPage,
  notFoundComponent: () => (
    <main style={{ paddingTop: 140, paddingBottom: 80 }}>
      <div className="section-inner" style={{ textAlign: "center" }}>
        <h1 className="section-title">Page not found</h1>
        <p className="section-sub" style={{ margin: "16px auto 0" }}>
          That city page doesn't exist. <a href="/" style={{ color: "var(--accent)" }}>Go home</a>.
        </p>
      </div>
    </main>
  ),
});

function CityPage() {
  const loc = Route.useLoaderData();
  const faq = pageFaqFor(loc.city, loc.service);
  return (
    <main>
      <LongFormContent
        kind="city"
        primaryNoun={`${loc.city}, ${loc.region}`}
        service={loc.service}
        h1={loc.h1}
        intro={loc.intro}
        painPoints={[
          `Leads in ${loc.city} going cold within minutes when no one replies fast enough`,
          `Money wasted on ads pointing to a site that doesn't convert ${loc.city} visitors`,
          `Manual follow-up and scheduling eating hours every week that should go into real work`,
        ]}
        faq={faq}
      />
    </main>
  );
}

// Export to keep tree-shaking from removing LOCATIONS import side-effect.
export const _all = LOCATIONS;