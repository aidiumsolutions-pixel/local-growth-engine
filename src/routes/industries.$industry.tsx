import { createFileRoute, notFound } from "@tanstack/react-router";
import { industryBySlug } from "@/data/industries";
import { LongFormContent, pageFaqFor, pageFaqJsonLd } from "@/components/site/LongFormContent";

export const Route = createFileRoute("/industries/$industry")({
  loader: ({ params }) => {
    const ind = industryBySlug(params.industry);
    if (!ind) throw notFound();
    return ind;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const faq = pageFaqFor(loaderData.name, "Automation & Booking");
    return {
      meta: [
        { title: loaderData.metaTitle },
        { name: "description", content: loaderData.metaDescription },
        { property: "og:title", content: loaderData.metaTitle },
        { property: "og:description", content: loaderData.metaDescription },
        { property: "og:type", content: "website" },
        { property: "og:url", content: `/industries/${loaderData.slug}` },
      ],
      links: [{ rel: "canonical", href: `/industries/${loaderData.slug}` }],
      scripts: [{ type: "application/ld+json", children: JSON.stringify(pageFaqJsonLd(faq)) }],
    };
  },
  component: IndustryPage,
  notFoundComponent: () => (
    <main style={{ paddingTop: 140, paddingBottom: 80 }}>
      <div className="section-inner" style={{ textAlign: "center" }}>
        <h1 className="section-title">Industry page not found</h1>
        <p className="section-sub" style={{ margin: "16px auto 0" }}>
          <a href="/industries" style={{ color: "var(--accent)" }}>See all industries</a>
        </p>
      </div>
    </main>
  ),
});

function IndustryPage() {
  const ind = Route.useLoaderData();
  const faq = pageFaqFor(ind.name, "Automation & Booking");
  return (
    <main>
      <LongFormContent
        kind="industry"
        primaryNoun={ind.name}
        service="Automation & Booking Systems"
        h1={ind.h1}
        intro={ind.intro}
        painPoints={ind.painPoints}
        faq={faq}
      />
    </main>
  );
}