export type Industry = {
  slug: string;        // "hvac"
  name: string;        // "HVAC Companies"
  short: string;       // "HVAC"
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  painPoints: string[];
};

const base = (slug: string, name: string, short: string, painA: string, painB: string, painC: string): Industry => ({
  slug,
  name,
  short,
  metaTitle: `${short} Lead Generation & Booking Automation | Aidium Solutions`,
  metaDescription: `Automated lead capture, CRM follow-up, and appointment booking systems built for ${short.toLowerCase()} businesses. Stop losing leads — start filling your calendar.`,
  h1: `Automation Systems Built for ${name}`,
  intro: `Aidium Solutions builds done-for-you growth systems for ${name.toLowerCase()} — capturing every lead, following up automatically, and booking appointments 24/7.`,
  painPoints: [painA, painB, painC],
});

export const INDUSTRIES: Industry[] = [
  base("hvac", "HVAC Companies", "HVAC", "Missed service calls from after-hours leads", "Manual quote follow-up that eats hours", "No way to track which marketing actually books jobs"),
  base("roofing", "Roofing Contractors", "Roofing", "Storm-season leads going cold before you call back", "Estimates that never turn into signed contracts", "Spreadsheets full of half-tracked job leads"),
  base("plumbing", "Plumbing Companies", "Plumbing", "Emergency leads booking with the first plumber who answers", "Forgotten follow-up on quoted repairs", "Cancelled jobs because no reminder system exists"),
  base("dental", "Dental Clinics", "Dental", "New-patient calls going to voicemail", "High no-show rates with no reminder sequence", "Manual recall scheduling that never gets done"),
  base("landscaping", "Landscaping Businesses", "Landscaping", "Seasonal demand spikes you can't keep up with", "Lost spring estimates by mid-summer", "Maintenance contract leads forgotten in a notebook"),
  base("cleaning", "Cleaning Services", "Cleaning", "Quote requests slipping past your reply window", "Recurring-clean clients never re-booked", "No automated reminders for service days"),
  base("contractors", "Home Service Contractors", "Contractors", "Job leads competing with three other contractors", "Estimates with no follow-up plan", "Manual scheduling chaos between crews"),
  base("law-firms", "Law Firms", "Legal", "Intake calls missed outside business hours", "Consultation forms that never get a response", "Manual client onboarding eating billable hours"),
  base("medical", "Medical Practices", "Medical", "New patients calling competitors after one missed ring", "No-show appointments killing daily revenue", "Recall and follow-up routines done by hand"),
  base("med-spa", "Medical Spas", "Med Spa", "Booking inquiries waiting hours for a reply", "Treatment package upsells never followed up", "Walk-in and DM leads with no central tracking"),
  base("salons", "Salons & Barbershops", "Salon", "Last-minute cancellations with no waitlist system", "Walk-in clients who never re-book", "Manual SMS reminders that take all morning"),
  base("fitness", "Fitness & Personal Training", "Fitness", "Free-trial leads who ghost after the first session", "Class scheduling done in spreadsheets and DMs", "Membership renewals that need manual chasing"),
  base("chiropractor", "Chiropractors", "Chiropractic", "New-patient calls dropping to voicemail", "Care-plan follow-ups slipping through the cracks", "No automated re-engagement for inactive patients"),
  base("real-estate", "Real Estate Agents", "Real Estate", "Buyer leads going cold within 30 minutes", "Open-house follow-up that never happens", "Sphere-of-influence nurture done manually or not at all"),
  base("mortgage", "Mortgage Brokers", "Mortgage", "Pre-approval leads booking with the first broker who calls", "Long sales cycles with no nurture sequence", "Client referrals that fall off your radar"),
  base("insurance", "Insurance Agents", "Insurance", "Quote requests stuck in your inbox for days", "Renewal reminders missed and lost to competitors", "Manual client check-ins that never scale"),
  base("financial-advisors", "Financial Advisors", "Financial", "Discovery call requests with no automatic scheduling", "Long client pipelines tracked in spreadsheets", "Referral follow-ups dropped after one email"),
  base("auto-repair", "Auto Repair Shops", "Auto Repair", "Service estimates that never close", "Customers who never come back for maintenance", "Bay scheduling done on a paper clipboard"),
  base("auto-detailing", "Auto Detailing", "Detailing", "DM and form leads scattered across platforms", "Recurring-detail clients never re-booked", "No reminder system for monthly packages"),
  base("pest-control", "Pest Control Companies", "Pest Control", "After-hours emergency calls lost to competitors", "Recurring-service customers who silently cancel", "Manual route and reminder scheduling"),
  base("electricians", "Electricians", "Electrician", "Quotes that disappear after one phone call", "No central system for job pipeline tracking", "Lost recurring commercial maintenance contracts"),
  base("pool-service", "Pool Service Companies", "Pool Service", "Seasonal openings booked elsewhere", "Lost weekly-maintenance clients each spring", "Repair quotes that never get a follow-up"),
  base("painters", "Painting Contractors", "Painting", "In-home estimates that don't convert to jobs", "Lost referrals from past customers", "Job leads tracked in three different apps"),
  base("flooring", "Flooring Contractors", "Flooring", "Showroom leads with no automated nurture", "Estimates that go cold after one visit", "No system to win back past clients"),
  base("solar", "Solar Installers", "Solar", "Long sales cycles with leaky follow-up", "Site-visit no-shows killing your weekly numbers", "Referral programs that never get used"),
  base("garage-doors", "Garage Door Companies", "Garage Door", "After-hours emergency calls lost", "Repair quotes that never close", "No reminder system for annual tune-ups"),
  base("locksmiths", "Locksmiths", "Locksmith", "Emergency calls picked up by the next locksmith on Google", "No central CRM for repeat commercial accounts", "Manual quote tracking on paper"),
  base("movers", "Moving Companies", "Movers", "Quote forms competing with five other movers", "Booked moves cancelling without a deposit system", "No follow-up for past customers needing storage or repeat moves"),
  base("junk-removal", "Junk Removal", "Junk Removal", "Same-day leads choosing whoever answers first", "Spreadsheets full of one-time customers never re-engaged", "No automated reminders for recurring commercial accounts"),
  base("tree-service", "Tree Service Companies", "Tree Service", "Storm-season leads with no fast-response system", "Quotes that never become signed jobs", "Lost recurring residential maintenance contracts"),
  base("handyman", "Handyman Services", "Handyman", "Quote requests buried in your inbox", "Customers who never call you for the next job", "Scheduling chaos between residential and small commercial work"),
  base("appliance-repair", "Appliance Repair", "Appliance Repair", "Same-day service calls going to whoever picks up first", "No follow-up for parts-ordered repairs", "Customers who forget you exist for the next repair"),
  base("window-cleaning", "Window Cleaning", "Window Cleaning", "Quote requests sitting unanswered for days", "Recurring-clean clients silently dropping off", "No reminder system for seasonal services"),
  base("pressure-washing", "Pressure Washing", "Pressure Washing", "Spring demand you can't quote fast enough", "Lost recurring HOA and commercial accounts", "Customers who never re-book the next season"),
  base("concrete", "Concrete Contractors", "Concrete", "Estimate calls that never become signed contracts", "Quote follow-up done by hand if at all", "No pipeline visibility across projects"),
  base("fencing", "Fence Contractors", "Fencing", "Lost leads competing with three other fence companies", "Estimates that go cold after the site visit", "No re-engagement of past customers"),
  base("remodeling", "Remodeling Contractors", "Remodeling", "Long sales cycles with no automated nurture", "Lost design-consult leads after the first meeting", "No system to track referrals from past clients"),
  base("interior-design", "Interior Designers", "Interior Design", "Consultation requests with no auto-scheduling", "Long sales cycles tracked in scattered notes", "Past clients who forget you for the next project"),
  base("photographers", "Photographers", "Photography", "Inquiry forms with no automated reply", "Booked sessions cancelling with no deposit flow", "Past clients who never book again for next year"),
  base("videographers", "Videographers", "Videography", "Project inquiries with no consistent intake", "Long sales cycles tracked in DMs and email", "No re-engagement of past wedding or brand clients"),
  base("event-planners", "Event Planners", "Event Planning", "Discovery-call requests with no auto-scheduling", "Vendor coordination tracked in spreadsheets", "Past clients never re-engaged for next year's event"),
  base("catering", "Catering Companies", "Catering", "Quote requests sitting in inbox for days", "Lost corporate accounts after one event", "No automated reminders for tasting appointments"),
  base("daycare", "Daycare & Preschool", "Daycare", "Tour inquiries missed during business hours", "Waitlist leads lost with no follow-up", "Re-enrollment chaos done by hand"),
  base("tutoring", "Tutoring Centers", "Tutoring", "Inquiry forms with no auto-scheduling", "Trial-session leads who never enroll", "Re-enrollment for next semester done manually"),
  base("driving-schools", "Driving Schools", "Driving School", "Inquiry calls during the day going to voicemail", "Long sales cycles with no nurture", "Scheduling conflicts between instructors"),
  base("vet-clinics", "Veterinary Clinics", "Vet", "New-pet appointment requests slipping past", "High no-shows with no reminder system", "Manual recall for annual checkups"),
  base("dog-grooming", "Dog Groomers", "Dog Grooming", "Booking requests stuck in DMs and voicemail", "Recurring-groom clients who never re-book", "No automated reminders for appointments"),
  base("dog-walking", "Dog Walking & Pet Sitting", "Pet Sitting", "Inquiry forms with no automated reply", "Recurring-client retention done by memory", "No reminder system for booked walks"),
  base("massage-therapy", "Massage Therapy", "Massage", "Booking inquiries waiting hours for a reply", "Recurring sessions that never get re-booked", "High no-show rate with no reminders"),
  base("counseling", "Counseling & Therapy", "Therapy", "Intake forms that sit untouched for days", "High no-show rates with no reminder sequence", "Manual scheduling done between every session"),
  base("consulting", "Business Consultants", "Consulting", "Discovery call requests with no auto-scheduling", "Long sales cycles tracked in spreadsheets", "Past clients never re-engaged for new projects"),
];

export const industryBySlug = (slug: string) => INDUSTRIES.find((i) => i.slug === slug);