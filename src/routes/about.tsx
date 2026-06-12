import { createFileRoute } from "@tanstack/react-router";
import { BookCallButton, WhatsAppButton } from "@/components/site/CtaButton";

const TITLE = "About Aidium Solutions | AI Automation & Growth Systems Agency";
const DESC = "We're a growth systems agency obsessed with one outcome: more booked appointments for service businesses across the United States.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <main>
      <div className="page-hero">
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="page-hero-inner">
          <div className="hero-eyebrow">Our Story</div>
          <h1>We build systems that<br /><em>actually grow</em> businesses</h1>
          <p>We're not a web design agency. We're a growth systems agency — obsessed with one outcome: more booked appointments for our clients.</p>
        </div>
      </div>

      <section>
        <div className="section-inner">
          <div className="story-grid">
            <div className="story-sticky">
              <div className="section-label">The Origin</div>
              <h2>Why We Built Aidium</h2>
              <div className="story-divider" />
              <p>Every piece of this agency was built to solve a real problem we kept seeing businesses struggle with — repeatedly, expensively, and unnecessarily.</p>
            </div>
            <div className="story-body">
              <p className="story-para">
                AIDIUM SOLUTIONS was born from a simple observation: countless small and medium-sized businesses were losing opportunities every single day. Not because they lacked great services — but because they were using <strong>outdated, disconnected tools</strong> that couldn't keep up with modern customer expectations.
              </p>
              <p className="story-para">
                We saw business owners juggling multiple platforms — one for their website, another for email, a third for scheduling, and spreadsheets to hold it all together. Leads were slipping through the cracks. Follow-ups were forgotten. Potential customers went cold and booked with competitors who simply responded faster.
              </p>
              <div className="story-highlight">
                "We didn't want to build another complicated platform. We wanted to build the one system a service business actually needs — simple, connected, and relentlessly focused on getting them more bookings."
              </div>
              <p className="story-para">
                That's when we set out to build something different. Not another all-in-one CRM that requires a consultant to operate. A focused, intelligent system that does one thing exceptionally well: <strong>capture leads, follow up automatically, and book appointments</strong> — while being simple enough for anyone to use.
              </p>
              <p className="story-para">
                Today, Aidium Solutions helps businesses across multiple industries turn their websites into powerful, 24/7 booking machines. Our clients don't just get a website. They get a complete growth engine.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--ink-soft)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="section-inner">
          <div style={{ marginBottom: 56 }}>
            <div className="section-label">What Drives Us</div>
            <h2 className="section-title">Mission &amp; Vision</h2>
          </div>
          <div className="mv-grid">
            <div className="mv-card mission">
              <div className="mv-icon" style={{ background: "rgba(91,127,255,0.12)", border: "1px solid rgba(91,127,255,0.2)" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5B7FFF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
              </div>
              <h3>Our Mission</h3>
              <p>To empower small and medium-sized businesses with enterprise-level automation and lead management — tools that are simple to use, affordable, and deliver measurable results.</p>
            </div>
            <div className="mv-card vision">
              <div className="mv-icon" style={{ background: "rgba(168,85,247,0.12)", border: "1px solid rgba(168,85,247,0.2)" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
              </div>
              <h3>Our Vision</h3>
              <p>To become the go-to growth partner for service businesses worldwide — known for creating systems that don't just look good, but actually drive revenue.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--ink-soft)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="section-inner">
          <div style={{ marginBottom: 56 }}>
            <div className="section-label">What We Stand For</div>
            <h2 className="section-title">Our core values</h2>
            <p className="section-sub">The principles that guide every decision, every project, every client relationship.</p>
          </div>
          <div className="values-grid">
            {[
              ["01", "Simplicity First", "Powerful doesn't mean complicated. Our solutions are designed to be intuitive."],
              ["02", "Client Success", "Your growth is our success metric. We're not satisfied until you're seeing real results."],
              ["03", "Transparency", "No hidden fees, no confusing contracts. You'll always know exactly what you're getting."],
              ["04", "Innovation", "We constantly evolve our systems with the latest technology to keep you ahead."],
              ["05", "Partnership", "We're not just a vendor — we're your growth partner, genuinely invested in your success."],
              ["06", "Results Driven", "Everything we build is focused on helping you book more appointments. Nothing else matters."],
            ].map(([n, h, p]) => (
              <div key={n} className="value-card">
                <div className="value-num">{n}</div>
                <h3>{h}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="cta-section">
        <div className="cta-inner">
          <h2>Ready to transform your business?</h2>
          <p>Let's talk about how we can help you turn website visitors into booked appointments.</p>
          <div className="cta-actions">
            <BookCallButton label="Book a Free Call" />
            <WhatsAppButton />
          </div>
        </div>
      </div>
    </main>
  );
}