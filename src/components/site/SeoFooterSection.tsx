import { Link } from "@tanstack/react-router";
import { LOCATIONS } from "@/data/locations";
import { INDUSTRIES } from "@/data/industries";

export function SeoFooterSection() {
  return (
    <section className="seo-section">
      <div className="section-inner">
        <h2>Business Automation Services Across the United States</h2>
        <p>
          Aidium Solutions provides AI automation, CRM systems, lead generation automation,
          appointment booking systems, and customer follow-up solutions for service businesses
          throughout Dallas, Houston, Austin, San Antonio, Fort Worth, New York City, Brooklyn,
          Queens, Chicago, Los Angeles, Phoenix, San Diego, Miami, Orlando, Atlanta, Denver,
          Seattle, Boston, Philadelphia, Las Vegas, and other major cities. Our done-for-you
          growth systems are built for service-based companies that want predictable bookings
          without hiring extra staff.
        </p>

        <h3>Cities We Serve</h3>
        <div className="seo-links">
          {LOCATIONS.map((l) => (
            <Link key={l.slug} to="/$slug" params={{ slug: l.slug }}>
              {l.service} in {l.city}, {l.region}
            </Link>
          ))}
        </div>

        <h3>Industries We Serve</h3>
        <div className="seo-links">
          {INDUSTRIES.map((i) => (
            <Link key={i.slug} to="/industries/$industry" params={{ industry: i.slug }}>
              {i.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}