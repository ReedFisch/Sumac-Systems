export const portalSections = [
  {
    title: "Dashboard",
    description: "Monthly proof that the site and systems are creating activity.",
  },
  {
    title: "Reports",
    description: "Looker Studio performance report with traffic, leads, and automation charts.",
  },
  {
    title: "Booking",
    description: "Calendly links for strategy calls, estimates, or client service appointments.",
  },
  {
    title: "Billing",
    description: "Stripe invoice, subscription, and payment portal links when Stripe is live.",
  },
  {
    title: "Support",
    description: "A simple place to request edits, report issues, or ask for help.",
  },
  {
    title: "Resources",
    description: "Launch checklist, brand assets, copy notes, and useful client links.",
  },
];

export const clientMetrics = [
  { label: "Visitors", value: "1,284", change: "+18%", source: "GA4" },
  { label: "Leads", value: "42", change: "+9", source: "Sheets" },
  { label: "Conversion", value: "3.3%", change: "+0.6%", source: "Looker" },
  { label: "Meetings", value: "11", change: "+4", source: "Calendly" },
  { label: "Missed Calls Saved", value: "6", change: "+6", source: "Twilio" },
  { label: "Text Replies", value: "18", change: "+12", source: "Twilio" },
  { label: "New Reviews", value: "9", change: "+3", source: "GBP" },
  { label: "Time Saved", value: "7.5h", change: "+2.5h", source: "n8n" },
];

export const activityItems = [
  {
    title: "Lead captured",
    detail: "Website form submission routed to Leads and OwnerAlerts.",
    time: "8 min ago",
  },
  {
    title: "Booking click",
    detail: "Visitor opened the estimate calendar from the roofing landing page.",
    time: "42 min ago",
  },
  {
    title: "Review request",
    detail: "Completed job imported and queued for a consent-checked review request.",
    time: "Today",
  },
  {
    title: "Report synced",
    detail: "Daily metrics refreshed from GA4 and the client workbook.",
    time: "Today",
  },
];

export const launchChecklist = [
  {
    title: "Assembly shell",
    status: "Ready to build",
    detail: "Create the six client pages and paste the labels from this preview.",
  },
  {
    title: "Looker report",
    status: "Next",
    detail: "Build the report shell, then add the secure embed or fallback report link.",
  },
  {
    title: "Google Sheets CRM",
    status: "Ready",
    detail: "Use the Sumac workbook tabs as the source for dashboard metrics.",
  },
  {
    title: "Stripe billing",
    status: "Bank gated",
    detail: "Add invoice and customer portal links after Stripe is approved.",
  },
  {
    title: "Twilio SMS",
    status: "Dry run",
    detail: "Keep message logging ready while A2P registration is pending.",
  },
];

export const dataMap = [
  { surface: "Executive KPI cards", source: "DashboardMetrics", system: "Google Sheets" },
  { surface: "Traffic report", source: "AnalyticsDaily", system: "GA4 + Looker" },
  { surface: "Recent leads", source: "Leads", system: "n8n + Sheets" },
  { surface: "Bookings", source: "Meetings", system: "Calendly" },
  { surface: "Automation status", source: "AutomationStats", system: "n8n" },
  { surface: "Billing links", source: "Billing", system: "Stripe" },
];
