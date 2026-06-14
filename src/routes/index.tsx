import { createFileRoute } from "@tanstack/react-router";
import { BookCallButton, WhatsAppButton } from "@/components/site/CtaButton";
import { SeoFooterSection } from "@/components/site/SeoFooterSection";
import { HOME_FAQ, faqJsonLd } from "@/data/faq";

// Real, non-AI Unsplash photography
const PHOTOS = {
  hero: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
  step1: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=900&q=80",
  step2: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=900&q=80",
  step3: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
  cta: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
};

const AVATARS = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
];

const TITLE = "AI Automation Agency USA | Lead Generation & Appointment Booking — Aidium Solutions";
const DESC = "Aidium Solutions builds AI automation, CRM, lead generation, and appointment booking systems for service businesses across Dallas, Houston, Austin, NYC, LA, Chicago, and more.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "AI automation agency, lead generation automation, appointment booking system, CRM automation, service business automation, Dallas, Houston, Austin, New York, Chicago, Los Angeles" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(HOME_FAQ)) },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Hero />
      <ProofBar />
      <Problems />
      <Steps />
      <Services />
      <Fit />
      <Industries />
      <Pricing />
      <Testimonials />
      <Faq />
      <SeoFooterSection />
      <FinalCta />
    </main>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-grid" />
      <div className="hero-inner">
        <div>
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot" />
            Done-For-You Growth Systems
          </div>
          <h1>More Bookings. <em>Less Busywork.</em></h1>
          <p className="hero-sub">
            We build websites, follow-ups and booking systems for service businesses —
            so every lead gets answered and every calendar slot gets filled.
          </p>
          <div className="hero-actions">
            <BookCallButton />
            <WhatsAppButton />
          </div>
          <div className="hero-stats">
            <div>
              <div className="hero-stat-num">3×</div>
              <div className="hero-stat-label">Average booking increase</div>
            </div>
            <div>
              <div className="hero-stat-num">7 days</div>
              <div className="hero-stat-label">Average setup time</div>
            </div>
            <div>
              <div className="hero-stat-num">24/7</div>
              <div className="hero-stat-label">Automated follow-ups</div>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-photo">
            <img src={PHOTOS.hero} alt="Aidium Solutions team working with a client on their growth system" loading="eager" />
            <div className="hero-photo-badge">
              <div>
                <div className="hero-photo-badge-num">+312%</div>
                <div className="hero-photo-badge-text">Avg. more bookings in 60 days</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Check = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
);

function ProofBar() {
  return (
    <div className="proof-bar">
      <div className="proof-inner">
        {["No long-term contracts", "Live in 7 days or less", "Dedicated support team", "100% transparent pricing"].map((t, i, arr) => (
          <span key={t} style={{ display: "contents" }}>
            <div className="proof-item"><Check /> {t}</div>
            {i < arr.length - 1 && <div className="proof-divider" />}
          </span>
        ))}
      </div>
    </div>
  );
}

function Problems() {
  const items = [
    ["Missed Calls & Messages", "Leads reach out and hear nothing back. They book with a competitor instead."],
    ["Leads Going Cold", "Interest fades when there's no follow-up. The lead quietly disappears."],
    ["Wasted Ad Spend", "Traffic without conversion is money out the door — no bookings in."],
    ["Too Much Manual Work", "Spreadsheets, DMs and reminders eat hours you don't have."],
  ];
  return (
    <section>
      <div className="section-inner">
        <div style={{ marginBottom: 56 }}>
          <div className="section-label">The Problem</div>
          <h2 className="section-title">You're losing clients every day</h2>
          <p className="section-sub">Four problems show up in almost every service business. We fix all four — in one system.</p>
        </div>
        <div className="problem-grid">
          {items.map(([h, p]) => (
            <div key={h} className="problem-cell">
              <div className="problem-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
              </div>
              <h3>{h}</h3>
              <p>{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Steps() {
  const steps = [
    ["01", "We Build Your System", "Website, lead capture and booking flow — tailored to your business. Live in 7 days.", PHOTOS.step1],
    ["02", "Automation Takes Over", "Every lead gets followed up by SMS and email. Reminders and nurture run hands-free.", PHOTOS.step2],
    ["03", "Your Calendar Fills Up", "Clients self-schedule. You wake up to confirmed appointments — no chasing.", PHOTOS.step3],
  ];
  return (
    <section style={{ background: "var(--ink-soft)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
      <div className="section-inner">
        <div style={{ marginBottom: 64, textAlign: "center" }}>
          <div className="section-label" style={{ textAlign: "center" }}>The Solution</div>
          <h2 className="section-title" style={{ textAlign: "center" }}>Three steps to more bookings</h2>
        </div>
        <div className="steps-row">
          {steps.map(([n, h, p, img]) => (
            <div key={n} className="step-card">
              <div className="step-photo">
                <img src={img} alt={h as string} loading="lazy" />
              </div>
              <div className="step-num">{n}</div>
              <h3>{h}</h3>
              <p>{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const cards = [
    ["#5B7FFF", "rgba(91,127,255,0.1)", "Website", "Built to convert visitors, not just look pretty."],
    ["#a855f7", "rgba(168,85,247,0.1)", "Lead Forms", "Capture every enquiry effortlessly."],
    ["#fb923c", "rgba(251,146,60,0.1)", "Auto Follow-Ups", "SMS & email sequences that run 24/7."],
    ["#22c55e", "rgba(34,197,94,0.1)", "Booking System", "Let clients self-schedule directly."],
    ["#FBBF24", "rgba(251,191,36,0.1)", "Dashboard", "Track leads and bookings in one place."],
    ["#ec4899", "rgba(236,72,153,0.1)", "All Connected", "Every piece works together seamlessly."],
  ];
  return (
    <section>
      <div className="section-inner">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 80, alignItems: "start" }}>
          <div>
            <div className="section-label">What We Build</div>
            <h2 className="section-title">One connected system, zero extra tools</h2>
            <p className="section-sub">Everything works together. No integrations to manage, no technical headaches.</p>
            <div style={{ marginTop: 32 }}>
              <BookCallButton label="Get Started" withIcon={false} />
            </div>
          </div>
          <div className="services-grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
            {cards.map(([c, bg, h, p]) => (
              <div key={h} className="service-card">
                <div className="service-icon" style={{ background: bg }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2"><circle cx="12" cy="12" r="10" /></svg>
                </div>
                <h3>{h}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Fit() {
  const yes = [
    "You want more booked calls and appointments",
    "You miss leads or forget follow-ups",
    "You want everything managed in one clean system",
    "You're serious about growing your business",
  ];
  const no = [
    "You only want a cheap, template website",
    "You prefer managing everything manually",
    "You're not ready to invest in growth",
    "You don't want automation doing the work",
  ];
  return (
    <section style={{ background: "var(--ink-soft)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
      <div className="section-inner">
        <div style={{ marginBottom: 48, textAlign: "center" }}>
          <div className="section-label" style={{ textAlign: "center" }}>Is This For You?</div>
          <h2 className="section-title" style={{ textAlign: "center" }}>Be honest with yourself</h2>
        </div>
        <div className="fit-grid">
          <div className="fit-card yes">
            <div className="fit-header">
              <div className="fit-header-icon" style={{ background: "rgba(91,127,255,0.15)", color: "#5B7FFF" }}><Check /></div>
              <h3>This is for you if…</h3>
            </div>
            <ul className="fit-list">
              {yes.map((y) => (
                <li key={y}><span style={{ color: "#5B7FFF" }}><Check /></span>{y}</li>
              ))}
            </ul>
          </div>
          <div className="fit-card no">
            <div className="fit-header">
              <div className="fit-header-icon" style={{ background: "rgba(255,255,255,0.05)", color: "#888898" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
              </div>
              <h3 style={{ color: "var(--text-muted)" }}>This is NOT for you if…</h3>
            </div>
            <ul className="fit-list">
              {no.map((n) => (
                <li key={n}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#444455" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                  {n}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Industries() {
  const items = ["Salons & Spas", "Fitness Coaches", "Medical Practices", "Consultants", "Real Estate", "Home Services", "Legal Services", "Creative Services"];
  return (
    <section>
      <div className="section-inner">
        <div style={{ marginBottom: 48, textAlign: "center" }}>
          <div className="section-label" style={{ textAlign: "center" }}>Industries</div>
          <h2 className="section-title" style={{ textAlign: "center" }}>Perfect for service-based businesses</h2>
          <p className="section-sub" style={{ margin: "16px auto 0", textAlign: "center" }}>If you take appointments, this system was built for you.</p>
        </div>
        <div className="industries-grid">
          {items.map((i) => (
            <div key={i} className="industry-card">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /></svg>
              <span>{i}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const cards = [
    { tier: "Starter", desc: "Get the foundation in place", features: ["Basic website", "Lead capture forms", "Basic follow-up sequences"], featured: false },
    { tier: "Growth", desc: "Everything you need to scale", features: ["Full website (up to 5 pages)", "Complete automation system", "Booking system integration", "Monthly support included"], featured: true },
    { tier: "Authority", desc: "Premium solution for ambitious growth", features: ["Advanced custom setup", "Full automation suite", "Priority support", "Performance reporting"], featured: false },
  ];
  return (
    <section style={{ background: "var(--ink-soft)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
      <div className="section-inner">
        <div style={{ marginBottom: 56, textAlign: "center" }}>
          <div className="section-label" style={{ textAlign: "center" }}>Pricing</div>
          <h2 className="section-title" style={{ textAlign: "center" }}>Simple, transparent pricing</h2>
          <p className="section-sub" style={{ textAlign: "center", margin: "16px auto 0" }}>No hidden fees. No surprises. Just honest investment in your growth.</p>
        </div>
        <div className="pricing-grid">
          {cards.map((c) => (
            <div key={c.tier} className={`pricing-card${c.featured ? " featured" : ""}`}>
              {c.featured && <div className="pricing-badge">Most Popular</div>}
              <h3>{c.tier}</h3>
              <p>{c.desc}</p>
              <div className="pricing-cta-label">Contact Us</div>
              <div className="pricing-cta-sub">for pricing</div>
              <ul className="pricing-features">
                {c.features.map((f) => (
                  <li key={f}><Check /> {f}</li>
                ))}
              </ul>
              <BookCallButton
                className={c.featured ? "btn-primary" : "btn-secondary"}
                label="Get Started"
                withIcon={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const REVIEWS = [
  ["Within the first month, we went from 8 bookings a week to over 30. The automation handles everything we used to do manually.", "Sarah M.", "Medical Spa Owner"],
  ["I was skeptical at first — I've tried a lot of agencies. But Aidium actually delivered. Appointments started filling up in week two.", "James T.", "Personal Fitness Coach"],
  ["The follow-up system alone paid for itself. Leads that used to go cold are now booking calls without me doing anything.", "Priya K.", "Business Consultant"],
  ["Professional, fast, and the results speak for themselves. Our no-show rate dropped massively thanks to their reminder sequences.", "David L.", "Dental Practice"],
  ["Setup was done in under a week. I honestly couldn't believe how smooth the whole process was. Very professional team.", "Amina R.", "Real Estate Agent"],
  ["ROI was almost instant. We made our investment back in the first three weeks. I refer every business owner I know to Aidium.", "Kevin S.", "Photography Studio"],
  ["I finally have a website that actually works for my business. The booking system is seamless and clients love how easy it is.", "Tom B.", "Life Coach"],
  ["The dashboard gives me visibility I never had before. I can see exactly where every lead comes from and how they convert.", "Patricia G.", "Marketing Agency"],
];

function Testimonials() {
  const withAvatars = REVIEWS.map((r, i) => [...r, AVATARS[i % AVATARS.length]] as const);
  const doubled = [...withAvatars, ...withAvatars];
  return (
    <section>
      <div className="section-inner" style={{ marginBottom: 48 }}>
        <div className="section-label" style={{ textAlign: "center" }}>Testimonials</div>
        <h2 className="section-title" style={{ textAlign: "center" }}>What our clients say</h2>
      </div>
      <div className="reviews-outer">
        <div className="reviews-track">
          {doubled.map(([t, a, r, avatar], idx) => (
            <div key={idx} className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">"{t}"</p>
              <div className="review-author-row">
                <img className="review-avatar" src={avatar} alt={a} loading="lazy" />
                <div>
                  <div className="review-author">{a}</div>
                  <div className="review-role">{r}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section>
      <div className="section-inner">
        <div style={{ marginBottom: 48, textAlign: "center" }}>
          <div className="section-label" style={{ textAlign: "center" }}>FAQ</div>
          <h2 className="section-title" style={{ textAlign: "center" }}>Frequently asked questions</h2>
        </div>
        <div className="faq-list">
          {HOME_FAQ.map((f) => (
            <div key={f.q} className="faq-item">
              <h3>{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <div className="cta-section cta-section-photo">
      <img src={PHOTOS.cta} alt="" aria-hidden="true" />
      <div className="cta-inner" style={{ position: "relative", zIndex: 1 }}>
        <h2>Ready to grow your business?</h2>
        <p>Book a free 20-minute strategy call. We'll map out exactly how to get you more booked appointments — no pressure, no commitment.</p>
        <div className="cta-actions">
          <BookCallButton label="Book Your Free Call" />
          <WhatsAppButton />
        </div>
      </div>
    </div>
  );
}
