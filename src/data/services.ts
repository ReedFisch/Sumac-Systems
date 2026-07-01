export interface ServiceDetail {
  slug: string;
  title: string;
  hero: {
    headline: string;
    headlineAccent: string;
    description: string;
  };
  definition: {
    title: string;
    description: string;
    examples: string[];
  };
  approach: {
    title: string;
    items: string[];
  };
  benefits: {
    title: string;
    tagline: string;
    icon: string;
  }[];
  struggles: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  process: {
    title: string;
    steps: {
      title: string;
      description: string;
    }[];
  };
  industries: {
    title: string;
    subtitle: string;
    items: string[];
  };
  features: {
    title: string;
    items: {
      title: string;
      href?: string;
    }[];
  };
  middleCta: {
    title: string;
    subtitle: string;
    ctaLabel: string;
    ctaHref: string;
    image?: string;
  };
  faqs: {
    question: string;
    answer: string;
  }[];
  bottomCta: {
    title: string;
    description: string;
    ctaLabel: string;
    ctaHref: string;
  };
}

export const services: ServiceDetail[] = [
  {
    slug: "web-design",
    title: "Next-Gen Web Design",
    hero: {
      headline: "Websites engineered for",
      headlineAccent: "growth",
      description: "Custom-coded, lightning-fast websites with built-in lead capture. No templates, no page builders. Just clean code that loads instantly and turns visitors into booked jobs."
    },
    definition: {
      title: "What Is Next-Gen Web Design?",
      description: "It's not a Wix template or a WordPress theme. It's a hand-coded, custom-designed website built on a modern tech stack that loads instantly, ranks higher on Google, and is specifically structured to convert visitors into paying customers.",
      examples: [
        '"Why does my website look outdated?"',
        '"My site is slow on mobile"',
        '"I need a website that generates leads"',
        '"Competitors have better websites than me"'
      ]
    },
    approach: {
      title: "Our Web Design Approach",
      items: [
        "Strategic planning and UX design",
        "High-performance modern tech stack",
        "Conversion rate optimization built-in"
      ]
    },
    benefits: [
      {
        title: "Blazing Fast",
        tagline: "Lightning-fast load times that keep visitors on your site instead of bouncing to competitors.",
        icon: "zap"
      },
      {
        title: "Built to Convert",
        tagline: "Every layout decision is engineered to guide visitors toward calling or booking.",
        icon: "target"
      },
      {
        title: "Fully Custom",
        tagline: "No templates. Hand-coded designs that look and feel premium on every device.",
        icon: "code"
      },
      {
        title: "Managed For You",
        tagline: "Hosting, updates, and security handled completely - you focus on your business.",
        icon: "shield"
      }
    ],
    struggles: {
      title: "Why Many Local Businesses Struggle Online",
      subtitle: "It usually comes down to a few missing pieces in their digital foundation.",
      items: [
        {
          title: "Outdated Website",
          description: "A site that isn't mobile-friendly or optimized for local search terms."
        },
        {
          title: "Slow Load Times",
          description: "Users leave before the site even loads, costing you valuable leads."
        },
        {
          title: "No Clear Conversion Path",
          description: "Failing to guide visitors toward making a phone call or booking an appointment."
        },
        {
          title: "Poor Online Presence",
          description: "Inconsistent branding and messaging across the web."
        },
        {
          title: "Limited Local Content",
          description: "No dedicated pages targeting specific service areas."
        },
        {
          title: "Competitors Investing",
          description: "Other local businesses are actively upgrading their digital storefronts."
        }
      ]
    },
    process: {
      title: "How We Build High-Converting Sites",
      steps: [
        {
          title: "UX Strategy & Wireframing",
          description: "Mapping out the user journey to maximize conversions."
        },
        {
          title: "High-Fidelity Design",
          description: "Creating a premium aesthetic that builds immediate trust."
        },
        {
          title: "Modern Development",
          description: "Coding with Next.js for lightning-fast performance."
        },
        {
          title: "Launch & Iterate",
          description: "Going live and continually monitoring for improvements."
        }
      ]
    },
    industries: {
      title: "Built For Local Service Businesses",
      subtitle: "Our performance websites are designed for businesses that depend on customers finding them online.",
      items: [
        "Roofing",
        "Pressure Washing",
        "HVAC",
        "Plumbing",
        "Landscaping",
        "Junk Removal",
        "Cleaning Companies",
        "Contractors"
      ]
    },
    features: {
      title: "What's Included In Our Web Build",
      items: [
        { title: "Custom UI/UX Design" },
        { title: "Mobile-First Optimization" },
        { title: "Advanced Technical SEO" },
        { title: "Lead Generation Forms" },
        { title: "Copywriting Frameworks" },
        { title: "Lightning Fast Hosting" }
      ]
    },
    middleCta: {
      title: "Web Design That Helps Customers Find Your Business",
      subtitle: "When local customers search for your services, you want your business to be one of the first they find. Our high-performance sites help improve your visibility, build trust, and generate more opportunities.",
      ctaLabel: "Get My Free Website Audit",
      ctaHref: "/#contact",
      image: "/images/titan-roofing.webp"
    },
    faqs: [
      {
        question: "How long does it actually take to build?",
        answer: "Usually a few weeks from our first call to launch. We move fast, but we're not going to rush the build just to hit a date. Every site we ship has to be something we're genuinely proud of."
      },
      {
        question: "What if I already have a website?",
        answer: "We'll take a look at it honestly. Sometimes there are pieces worth keeping. More often, rebuilding from scratch is the right call - especially if we're wiring in automations and AI visibility from the ground up."
      },
      {
        question: "Do I have to deal with hosting, updates, and all that?",
        answer: "Nope. That's on us. Hosting, security patches, speed optimization - we handle it all. You run your business, we keep the site running."
      },
      {
        question: "How does the pricing work?",
        answer: "There's a one-time fee to build the site, and then a flat monthly rate after that. The monthly fee covers all hosting, security updates, and ongoing management so you don't have to touch a thing. We'll go through the exact numbers on our strategy call."
      },
      {
        question: "Will it look good on my phone?",
        answer: "Yes. We build mobile-first because that's how most of your customers are finding you. It will look and feel sharp on every device."
      },
      {
        question: "What happens if I want to cancel?",
        answer: "The site comes down at the end of your billing cycle. That said, we have a Business Continuity Safeguard - if we ever shut down as a company, you get full ownership of the code and domain. You're never left stranded."
      }
    ],
    bottomCta: {
      title: "Ready for a new website?",
      description: "Let's build something amazing together.",
      ctaLabel: "Get Started",
      ctaHref: "/#contact"
    }
  },
  {
    slug: "ai-seo",
    title: "SEO & AIO",
    hero: {
      headline: "Get found on Google",
      headlineAccent: "& AI",
      description: "Traditional SEO gets you on Google. AIO gets you recommended by ChatGPT, Perplexity, and Google AI Overviews. We do both - so no matter how people search, your business shows up first."
    },
    definition: {
      title: "What Is SEO & AIO?",
      description: "SEO (Search Engine Optimization) gets your website ranking on Google. AIO (AI Optimization) structures your content so AI tools like ChatGPT and Perplexity recommend your business when people ask for services. Together, they cover every way modern customers find local businesses.",
      examples: [
        '"Best roofer in Rochester" - Google',
        '"Find me a reliable HVAC company" - ChatGPT',
        '"Who does emergency plumbing near me?" - Perplexity',
        '"Compare local landscapers" - Google AI Overview'
      ]
    },
    approach: {
      title: "Our SEO & AIO Methodology",
      items: [
        "AI-driven keyword gap analysis",
        "Semantic content optimization",
        "Technical performance auditing"
      ]
    },
    benefits: [
      {
        title: "Google Rankings",
        tagline: "Climb to the top of organic search results for your most valuable local keywords.",
        icon: "trending-up"
      },
      {
        title: "AI Recommendations",
        tagline: "Get your business recommended by ChatGPT, Perplexity, and Google AI Overviews.",
        icon: "cpu"
      },
      {
        title: "Organic Traffic",
        tagline: "Drive a steady stream of high-intent visitors who are actively looking for your services.",
        icon: "bar-chart"
      },
      {
        title: "Long-Term Authority",
        tagline: "Build lasting online authority that compounds over time, unlike paid ads.",
        icon: "shield"
      }
    ],
    struggles: {
      title: "Why Many Local Businesses Struggle To Show Up On Google",
      subtitle: "It usually comes down to a few missing pieces in their online foundation.",
      items: [
        {
          title: "Outdated Content Strategy",
          description: "Relying on old SEO tactics that Google's AI now ignores or penalizes."
        },
        {
          title: "Weak Technical Foundation",
          description: "A slow, poorly structured site that prevents search engines from indexing pages."
        },
        {
          title: "No Authority Building",
          description: "Failing to consistently build high-quality local backlinks and citations."
        },
        {
          title: "Limited Local Content",
          description: "No pages specifically targeting the cities and services you provide."
        },
        {
          title: "Poor Online Presence",
          description: "Inconsistent business information across local directories."
        },
        {
          title: "Competitors Investing",
          description: "Other businesses in your area are actively working on their visibility."
        }
      ]
    },
    process: {
      title: "How We Improve Local Visibility",
      steps: [
        {
          title: "Technical Audit",
          description: "Identifying blockers preventing search engines from indexing your site."
        },
        {
          title: "Keyword & Entity Strategy",
          description: "Using AI to find the high-intent keywords your customers actually use."
        },
        {
          title: "On-Page Optimization",
          description: "Structuring your content with proper schema markup and semantic HTML."
        },
        {
          title: "Authority Building",
          description: "Creating local citations and earning high-quality backlinks over time."
        }
      ]
    },
    industries: {
      title: "Built For Local Service Businesses",
      subtitle: "Our AI SEO strategies are designed for businesses that depend on customers finding them locally.",
      items: [
        "Roofing",
        "Pressure Washing",
        "HVAC",
        "Plumbing",
        "Landscaping",
        "Junk Removal",
        "Cleaning Companies",
        "Contractors"
      ]
    },
    features: {
      title: "What's Included In Our SEO System",
      items: [
        { title: "AI Keyword Gap Analysis" },
        { title: "Schema Markup Implementation" },
        { title: "Monthly Content Strategy" },
        { title: "Local Citation Building" },
        { title: "Technical Performance Tuning" },
        { title: "Monthly Ranking Reports" }
      ]
    },
    middleCta: {
      title: "Local SEO That Helps Customers Find Your Business",
      subtitle: "When local customers search for your services, you want your business to be one of the first they find. Our Local Authority System helps improve your visibility, build trust, and generate more opportunities from Google.",
      ctaLabel: "Get My Free Google Audit",
      ctaHref: "/#contact",
      image: "/images/sumac/image12-blurred.webp"
    },
    faqs: [
      {
        question: "How long until I see results?",
        answer: "Honest answer - SEO takes time. You might see movement in a few weeks, but meaningful, lasting rankings usually take 3 to 6 months. Anyone promising page one in 30 days is lying to you."
      },
      {
        question: "What even is AIO and why does it matter?",
        answer: "AIO stands for AI Optimization. When someone asks ChatGPT or Perplexity to recommend a local business, those AI tools pull from structured content on the web. If your site isn't built to be read by those models, you're invisible to that entire channel. We fix that."
      },
      {
        question: "Do I need a new website for this to work?",
        answer: "Not necessarily, but your website is the foundation. If it's slow, poorly structured, or missing the right content, no SEO strategy will stick. We'll tell you upfront if a rebuild makes sense."
      },
      {
        question: "Can this actually help my type of business?",
        answer: "If people search for what you do online - and they do - then yes. Local service businesses especially have a massive opportunity here because most of your competitors haven't figured this out yet."
      },
      {
        question: "How does pricing work?",
        answer: "It's a one-time setup fee to build out the technical infrastructure, followed by a flat monthly rate for ongoing strategy and optimization. No retainer shock. We'll walk through the specifics on a call."
      },
      {
        question: "What makes you different from every other SEO agency?",
        answer: "Most agencies send you a monthly PDF and call it a day. We build the actual technical infrastructure - schema markup, entity optimization, AI-readable content structure - and we tie it directly to your lead flow. Results you can measure."
      }
    ],
    bottomCta: {
      title: "Want more organic traffic?",
      description: "Start ranking higher today.",
      ctaLabel: "Get a Free Audit",
      ctaHref: "/#contact"
    }
  },
  {
    slug: "google-business-profile",
    title: "Google Business Profile",
    hero: {
      headline: "Dominate the local",
      headlineAccent: "map pack",
      description: "Your Google Business Profile is often the first thing customers see - before your website. We optimize every detail so you show up in the map pack, look trustworthy, and get the call."
    },
    definition: {
      title: "What Is Google Business Profile Optimization?",
      description: "It's making sure your Google Maps listing is fully optimized with the right categories, services, photos, posts, and reviews - so when someone searches 'near me,' your business appears in the top 3 map results with a profile that converts.",
      examples: [
        '"Roofer near me" - triggers map pack',
        '"HVAC repair open now" - shows hours',
        '"Best local contractor" - shows reviews',
        '"Emergency plumbing" - shows phone number'
      ]
    },
    approach: {
      title: "GBP Optimization Strategy",
      items: [
        "Profile optimization and verification",
        "Review management strategies",
        "Local citation building"
      ]
    },
    benefits: [
      {
        title: "Map Pack Placement",
        tagline: "Appear in the top 3 Google Maps results where 42% of local searchers click.",
        icon: "map-pin"
      },
      {
        title: "5-Star Reputation",
        tagline: "Systematic review collection that builds a wall of social proof competitors can't match.",
        icon: "star"
      },
      {
        title: "Direct Calls",
        tagline: "Click-to-call directly from search results - no website visit needed.",
        icon: "phone"
      },
      {
        title: "Local Authority",
        tagline: "Consistent citations and posts that signal to Google your business is active and relevant.",
        icon: "badge"
      }
    ],
    struggles: {
      title: "Why Many Local Businesses Struggle To Show Up On Google",
      subtitle: "It usually comes down to a few missing pieces in their online foundation.",
      items: [
        {
          title: "Outdated Website",
          description: "A site that isn't mobile-friendly or optimized for local search terms."
        },
        {
          title: "Weak Google Business Profile",
          description: "Incomplete profiles missing categories, services, and photos."
        },
        {
          title: "Not Enough Reviews",
          description: "Failing to consistently collect reviews compared to competitors."
        },
        {
          title: "Limited Local Content",
          description: "No pages specifically targeting the cities and services you provide."
        },
        {
          title: "Poor Online Presence",
          description: "Inconsistent business information across the web."
        },
        {
          title: "Competitors Investing",
          description: "Other businesses in your area are actively working on their visibility."
        }
      ]
    },
    process: {
      title: "How We Optimize Your Profile",
      steps: [
        {
          title: "Profile Audit",
          description: "Analyzing your current standing against top competitors in your area."
        },
        {
          title: "Category & Service Mapping",
          description: "Ensuring you are listed for the exact terms customers use."
        },
        {
          title: "Asset Enhancement",
          description: "Adding high-quality photos, Q&A, and detailed service descriptions."
        },
        {
          title: "Ongoing Signals",
          description: "Posting regular updates and generating consistent review velocity."
        }
      ]
    },
    industries: {
      title: "Built For Local Service Businesses",
      subtitle: "Our profile optimization system is specifically designed for local trades.",
      items: [
        "Roofing",
        "Pressure Washing",
        "HVAC",
        "Plumbing",
        "Landscaping",
        "Junk Removal",
        "Cleaning Companies",
        "Contractors"
      ]
    },
    features: {
      title: "What's Included",
      items: [
        { title: "Complete Profile Audit" },
        { title: "Service & Category Expansion" },
        { title: "Review Growth System" },
        { title: "Monthly Google Posts" },
        { title: "Citation Syncing" },
        { title: "Visibility Tracking" }
      ]
    },
    middleCta: {
      title: "Local SEO That Helps Customers Find Your Business",
      subtitle: "When local customers search for your services, you want your business to be one of the first they find. Our Local Authority System helps improve your visibility, build trust, and generate more opportunities from Google.",
      ctaLabel: "Get My Free Google Audit",
      ctaHref: "/#contact",
      image: "/images/sumac/image12-blurred.webp"
    },
    faqs: [
      {
        question: "How long does it take to climb the map pack?",
        answer: "Profile optimization can move the needle fast - sometimes within a few weeks. Climbing into the top 3 consistently depends on how competitive your area is, but most clients see real movement within 30 to 90 days."
      },
      {
        question: "Why do reviews matter so much?",
        answer: "Reviews are one of the biggest signals Google uses to decide who shows up in the map pack. More reviews, higher rating, and steady velocity of new ones - that combo is hard for competitors to beat."
      },
      {
        question: "I already have a Google Business Profile - can you still help?",
        answer: "Almost always, yes. Most profiles we audit are missing categories, have thin service descriptions, inconsistent hours, or no photos. There's usually a lot of room to improve without starting from scratch."
      },
      {
        question: "Do I have to post on it or manage it myself?",
        answer: "No. We handle the profile updates, write the Google Posts, respond to reviews, and keep everything current. You just focus on the actual jobs."
      },
      {
        question: "Does my Google profile affect my regular Google search rankings too?",
        answer: "Yes. A well-optimized GBP sends strong local authority signals to Google that lift both your map pack position and your organic rankings. It's connected."
      },
      {
        question: "What if my business operates in multiple cities?",
        answer: "We can build out a strategy that covers your full service area - creating local landing pages and citation signals for each location so you show up wherever your customers are searching."
      }
    ],
    bottomCta: {
      title: "Need more local customers?",
      description: "Let's optimize your profile.",
      ctaLabel: "Start Now",
      ctaHref: "/#contact"
    }
  },
  {
    slug: "automations",
    title: "Business Automations",
    hero: {
      headline: "Stop losing leads to",
      headlineAccent: "slow follow-up",
      description: "When a lead fills out your form or calls and gets no answer, they move on in minutes. Our automation systems respond instantly with a personalized text, log the lead in your CRM, and queue up follow-ups - all without you lifting a finger."
    },
    definition: {
      title: "What Are Business Automations?",
      description: "Automations connect your website, phone system, CRM, and messaging tools into one seamless machine. When a customer interacts with your business, the system instantly responds, organizes their info, and follows up - so you never lose a lead to slow response time again.",
      examples: [
        'Missed call → instant text reply sent',
        'Form submitted → lead saved to CRM automatically',
        'Job completed → review request sent via SMS',
        'New booking → calendar + confirmation text synced'
      ]
    },
    approach: {
      title: "Our Automation Process",
      items: [
        "Workflow analysis and mapping",
        "Custom integration development",
        "Monitoring and optimization"
      ]
    },
    benefits: [
      {
        title: "Instant Response",
        tagline: "Leads get a text within seconds of reaching out - even at 2 AM on a Saturday.",
        icon: "zap"
      },
      {
        title: "Zero Leads Lost",
        tagline: "Every inquiry is captured, logged, and followed up with automatically.",
        icon: "target"
      },
      {
        title: "More Reviews",
        tagline: "Happy customers automatically get a review request at the perfect moment.",
        icon: "star"
      },
      {
        title: "Hours Saved Weekly",
        tagline: "Eliminate repetitive admin work so you can focus on the jobs that make money.",
        icon: "clock"
      }
    ],
    struggles: {
      title: "Why Many Local Businesses Struggle to Scale",
      subtitle: "It usually comes down to manual processes slowing everything down.",
      items: [
        {
          title: "Missed Follow-Ups",
          description: "Leads slip through the cracks because no one has time to follow up instantly."
        },
        {
          title: "Data Entry Errors",
          description: "Manually copying information between systems leads to costly mistakes."
        },
        {
          title: "Poor Review Collection",
          description: "Failing to consistently ask satisfied customers for reviews."
        },
        {
          title: "Slow Response Times",
          description: "Competitors get the job because they reply to inquiries faster."
        },
        {
          title: "Burnout",
          description: "Owners spending too much time on repetitive admin work."
        },
        {
          title: "Disconnected Systems",
          description: "Using 5 different apps that don't share information."
        }
      ]
    },
    process: {
      title: "How We Automate Your Workflows",
      steps: [
        {
          title: "Process Mapping",
          description: "Identifying bottlenecks in your current lead and operation flows."
        },
        {
          title: "Tool Integration",
          description: "Connecting your CRM, scheduling, and communication tools."
        },
        {
          title: "Workflow Building",
          description: "Creating the logic that triggers actions automatically."
        },
        {
          title: "Testing & Handover",
          description: "Ensuring flawless execution and training your team."
        }
      ]
    },
    industries: {
      title: "Built For Local Service Businesses",
      subtitle: "Automations are perfect for service businesses trying to scale without hiring huge admin teams.",
      items: [
        "Roofing",
        "Pressure Washing",
        "HVAC",
        "Plumbing",
        "Landscaping",
        "Junk Removal",
        "Cleaning Companies",
        "Contractors"
      ]
    },
    features: {
      title: "What We Build",
      items: [
        { title: "Missed Call Text Back" },
        { title: "Automated Review Generation" },
        { title: "Lead Nurture Sequences" },
        { title: "CRM Data Synchronization" },
        { title: "Appointment Reminders" },
        { title: "Zapier & Make Integrations" }
      ]
    },
    middleCta: {
      title: "Automations That Help You Close More Deals",
      subtitle: "Stop doing repetitive manual tasks. Our automation systems ensure every lead is followed up with instantly and every happy customer is asked for a review.",
      ctaLabel: "Book a Strategy Call",
      ctaHref: "/#contact",
      image: "/images/sumac/image12-blurred.webp"
    },
    faqs: [
      {
        question: "How fast does the missed call text actually go out?",
        answer: "Within seconds. The moment someone calls and you don't pick up, the system fires a personalized text to keep them engaged. You'd be shocked how many jobs are won just by being the first one to respond."
      },
      {
        question: "What tools do you integrate with?",
        answer: "Pretty much anything with an API. We work with HubSpot, GoHighLevel, Zapier, Make, Twilio, Stripe, Google Calendar, and more. If you already use something, we'll connect it."
      },
      {
        question: "Is this going to be complicated to learn?",
        answer: "No. We build the whole thing and walk you through exactly how it works. Most clients are running it confidently within a day. The point is to make your life easier, not add another thing to manage."
      },
      {
        question: "Am I going to lose the personal touch with customers?",
        answer: "The automations handle the mechanical stuff - the instant reply, the follow-up, the review ask. You still handle the real conversations. Think of it as having a reliable system working in the background while you focus on the actual relationship."
      },
      {
        question: "How does pricing work?",
        answer: "There's a one-time build fee to engineer the workflows, and then a flat monthly rate to keep the systems running and managed. No project sticker shock. We'll go through the specifics on a strategy call once we understand your current workflow."
      },
      {
        question: "What do I need to provide to get started?",
        answer: "Just a clear picture of how your business currently operates - how leads come in, what happens next, what's slipping through the cracks. We take it from there and build the system around your actual workflow."
      }
    ],
    bottomCta: {
      title: "Ready to scale efficiently?",
      description: "Automate your business today.",
      ctaLabel: "Book a Strategy Call",
      ctaHref: "/#contact"
    }
  }
];
