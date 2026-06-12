import { BookCallButton, WhatsAppButton } from "./CtaButton";
import { faqJsonLd, type FaqItem } from "@/data/faq";

type Props = {
  kind: "city" | "industry";
  primaryNoun: string;    // "Dallas" or "HVAC companies"
  service: string;        // "AI Automation" / "Lead Generation"
  h1: string;
  intro: string;
  painPoints: string[];
  faq: FaqItem[];
};

export function LongFormContent({ kind, primaryNoun, service, h1, intro, painPoints, faq }: Props) {
  return (
    <>
      <div className="page-hero">
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="page-hero-inner">
          <div className="hero-eyebrow">{service}</div>
          <h1>{h1}</h1>
          <p>{intro}</p>
          <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
            <BookCallButton label="Book a Free Strategy Call" />
            <WhatsAppButton />
          </div>
        </div>
      </div>

      <section>
        <div className="section-inner">
          <div className="prose-block">
            <h2>Why {primaryNoun} {kind === "city" ? "service businesses" : ""} choose Aidium Solutions</h2>
            <p>
              If you run {kind === "city" ? `a service business in ${primaryNoun}` : `${primaryNoun.toLowerCase()}`}, you already know the hardest part of growth
              isn't getting traffic — it's converting that traffic into actual booked appointments. Most {kind === "city" ? primaryNoun + " owners" : "owners in your industry"} we
              talk to are doing fantastic work, but losing real revenue every week to slow follow-up, missed calls,
              and a website that simply doesn't turn visitors into customers.
            </p>
            <p>
              Aidium Solutions builds a single, connected growth system that fixes that. We design and ship a
              high-converting website, set up automated lead capture, install a CRM with SMS and email follow-up
              sequences, and connect it all to a self-serve booking calendar. The result: every lead is captured,
              every prospect is followed up with within minutes, and every appointment lands on your calendar
              automatically — without you lifting a finger.
            </p>

            <h2>The three biggest problems we solve for {primaryNoun}</h2>
            <ul>
              {painPoints.map((p) => <li key={p}>{p}</li>)}
            </ul>
            <p>
              These aren't problems you fix by hiring another assistant or buying another tool. They're solved by
              connecting your website, CRM, follow-up sequences, and calendar into one system that runs 24/7. That's
              exactly what we build for our clients in {primaryNoun}.
            </p>

            <h2>What's included in a {primaryNoun} growth system</h2>
            <h3>1. High-converting website</h3>
            <p>
              We design and develop your site from scratch around one goal: turn visitors into booked appointments.
              Fast-loading, mobile-first, written to convert — not just to look pretty. Every page is built with
              local SEO in mind so {kind === "city" ? primaryNoun + " customers" : "customers in your area"} can find you on Google.
            </p>

            <h3>2. AI-powered lead capture</h3>
            <p>
              Every form, every chat, every contact attempt feeds into a single dashboard. No more leads getting lost
              in inboxes, sticky notes, or Instagram DMs. The moment someone shows interest, you know about it — and
              so does our automation.
            </p>

            <h3>3. Automated SMS and email follow-up</h3>
            <p>
              Studies consistently show that responding to a lead within five minutes makes them up to 100× more
              likely to convert. Our follow-up sequences hit that window automatically, then continue nurturing the
              lead for weeks if needed — until they either book or unsubscribe.
            </p>

            <h3>4. Self-serve appointment booking</h3>
            <p>
              Clients pick a time that works for them, get instant confirmation, and receive reminders before the
              appointment. Your no-show rate drops, your calendar fills up, and you stop doing scheduling back-and-forth
              over text and email.
            </p>

            <h3>5. CRM and pipeline tracking</h3>
            <p>
              See every lead, every conversation, and every appointment in one place. Know exactly where your bookings
              are coming from so you can double down on what works and stop wasting money on what doesn't.
            </p>

            <h3>6. Done-for-you setup in 7 days</h3>
            <p>
              You don't have to learn new software, configure integrations, or hire a tech consultant. We build, plug
              in your branding and offers, test everything, and hand you a system that's already working from day one.
            </p>

            <h2>Industries we serve in {primaryNoun}</h2>
            <p>
              Our growth systems are built for service-based businesses where every booked appointment matters. That
              includes HVAC companies, roofing contractors, plumbing companies, dental clinics, medical practices,
              med spas, salons and barbershops, fitness studios and personal trainers, real estate agents, mortgage
              brokers, insurance agents, law firms, financial advisors, auto repair shops, pest control companies,
              electricians, painters, flooring contractors, solar installers, garage door companies, locksmiths,
              moving companies, junk removal services, tree services, handyman services, pressure washing, concrete
              contractors, fencing contractors, remodeling contractors, interior designers, photographers, event
              planners, catering companies, daycares, tutoring centers, vet clinics, dog groomers, massage therapists,
              counselors, and business consultants.
            </p>
            <p>
              If you take appointments or quote jobs, this system was built for you.
            </p>

            <h2>How {primaryNoun} growth systems pay for themselves</h2>
            <p>
              Most of our clients see their system pay for itself within the first month. The math is simple:
              automation captures leads you'd otherwise miss, follows up with prospects you'd otherwise forget,
              and books appointments that would otherwise go to whichever competitor responds first.
            </p>
            <p>
              When you stop losing even three or four bookings a month to slow response time, the system has paid for
              itself — and it keeps working 24 hours a day, seven days a week, with no salary, no sick days, and no
              "I forgot to follow up."
            </p>

            <h2>Ready to get started in {primaryNoun}?</h2>
            <p>
              Book a free strategy call and we'll walk you through exactly how a growth system would work for your
              specific business. No pressure, no commitment, no hard sell. Just a real conversation about whether
              this is the right fit for what you're trying to build.
            </p>

            <div style={{ display: "flex", gap: 12, margin: "32px 0", flexWrap: "wrap" }}>
              <BookCallButton label="Book Your Free Call" />
              <WhatsAppButton />
            </div>

            <h2>Frequently asked questions</h2>
            <div className="faq-list" style={{ marginTop: 20 }}>
              {faq.map((f) => (
                <div key={f.q} className="faq-item">
                  <h3>{f.q}</h3>
                  <p>{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function pageFaqFor(primary: string, service: string): FaqItem[] {
  return [
    { q: `How much does ${service.toLowerCase()} cost in ${primary}?`,
      a: `Pricing depends on the scope of your build — website, automation depth, and integrations. Most ${primary} clients sit in our Growth package. Book a free call and we'll quote your exact build.` },
    { q: `How long does setup take for a ${primary} business?`,
      a: `Most ${primary} clients are fully live in 7 days or less, including website, CRM, automation, and booking calendar.` },
    { q: `Do I have to learn how to use the system?`,
      a: `No. Aidium Solutions is fully done-for-you. We build, configure, and maintain everything. You just get the booked appointments.` },
    { q: `Will this work for my specific business?`,
      a: `If you're a service-based business that takes appointments or quotes jobs, the system is built for you. We've deployed it across HVAC, roofing, dental, med spa, real estate, legal, fitness, and more.` },
    { q: `What if I already have a website?`,
      a: `We can either rebuild your site for higher conversion or layer our automation and booking system onto your existing site. The strategy call will cover what's right for you.` },
    { q: `Is there a long-term contract?`,
      a: `No long-term contracts. We earn your business every month by delivering results.` },
  ];
}

export function pageFaqJsonLd(faq: FaqItem[]) {
  return faqJsonLd(faq);
}