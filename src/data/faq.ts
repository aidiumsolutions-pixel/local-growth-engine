export type FaqItem = { q: string; a: string };

export const HOME_FAQ: FaqItem[] = [
  { q: "What does an AI automation agency do?",
    a: "An AI automation agency helps businesses automate lead capture, customer follow-up, appointment booking, CRM management, and sales processes — so leads don't go cold and calendars stay full." },
  { q: "How can automation increase bookings?",
    a: "Automation instantly responds to leads, schedules appointments, and follows up automatically, increasing conversion rates and reducing missed opportunities." },
  { q: "How long does it take to set up?",
    a: "Our typical client is fully live in 7 days or less, including website, lead capture, CRM, booking calendar, and automated SMS and email follow-up sequences." },
  { q: "Which industries do you work with?",
    a: "We work with service businesses: HVAC, roofing, plumbing, dental, medical, med spas, salons, fitness, real estate, law firms, contractors, cleaning, landscaping, and more." },
  { q: "What cities do you serve?",
    a: "We serve clients across the United States including Dallas, Houston, Austin, San Antonio, Fort Worth, New York City, Brooklyn, Queens, Chicago, Los Angeles, Phoenix, San Diego, Miami, Orlando, Atlanta, Denver, Seattle, Boston, Philadelphia, and Las Vegas." },
  { q: "Do I need to manage the system myself?",
    a: "No. Aidium Solutions is a done-for-you service. We build the system, plug in your branding and offers, and maintain it so you can focus on running your business." },
];

export function faqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
}