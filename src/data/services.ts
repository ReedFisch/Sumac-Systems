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
    image?: string;
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
      description: "It's not a generic Wix template or a bloated WordPress theme. It's a custom, hand-coded website built on modern tech that actually loads instantly, ranks well on Google, and is specifically designed to turn your visitors into paying customers.",
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
        icon: "zap",
        image: "/images/sumac/image12-blurred.webp"
      },
      {
        title: "Built to Convert",
        tagline: "Every layout decision is engineered to guide visitors toward calling or booking.",
        icon: "target",
        image: "/images/sumac/image9.webp"
      },
      {
        title: "Fully Custom",
        tagline: "No templates. Hand-coded designs that look and feel premium on every device.",
        icon: "code",
        image: "/images/sumac/image3.webp"
      },
      {
        title: "Managed For You",
        tagline: "Hosting, updates, and security handled completely, so you can focus on your business.",
        icon: "shield",
        image: "/images/sumac/image12-blurred.webp"
      }
    ],
    struggles: {
      title: "Why Many Local Businesses Struggle Online",
      subtitle: "Usually, it comes down to a few missing pieces in their online setup.",
      items: [
        {
          title: "Outdated Website",
          description: "Having a site that looks bad on phones or just ignores local search completely."
        },
        {
          title: "Slow Load Times",
          description: "People click away before the page even finishes loading, which directly costs you leads."
        },
        {
          title: "No Clear Conversion Path",
          description: "Not making it glaringly obvious how a visitor should call or book an appointment."
        },
        {
          title: "Poor Online Presence",
          description: "Having messy, inconsistent messaging scattered across the internet."
        },
        {
          title: "Limited Local Content",
          description: "Missing pages that actually talk about the specific towns and services you offer."
        },
        {
          title: "Competitors Investing",
          description: "Other local businesses are actively upgrading their sites and pulling ahead."
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
      subtitle: "When people in your area search for what you do, you need to be the obvious choice. We build high-performance sites that make you look like the most trusted option in town, which naturally drives more calls.",
      ctaLabel: "Get My Free Website Audit",
      ctaHref: "/thank-you",
      image: "/images/titan-roofing.webp"
    },
    faqs: [
      {
        question: "How long does it actually take to build?",
        answer: "Usually a few weeks from our first call to launch. We move fast, but we're not going to rush the build just to hit a date. Every site we ship has to be something we're genuinely proud of."
      },
      {
        question: "What if I already have a website?",
        answer: "We'll take an honest look at it. Sometimes there are pieces worth keeping. Usually, rebuilding from scratch is the better move, especially if we're wiring in new automations and search features from the ground up."
      },
      {
        question: "Do I have to deal with hosting, updates, and all that?",
        answer: "Nope, that's entirely on us. We handle the hosting, security patches, and speed optimization. You run your business, and we'll keep the site running smoothly."
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
        answer: "The site comes down at the end of your billing cycle. That being said, we have a strict safeguard: if we ever shut down as a company, you get full ownership of the code and domain. You are never left stranded."
      }
    ],
    bottomCta: {
      title: "Ready for a new website?",
      description: "Let's build something amazing together.",
      ctaLabel: "Get Started",
      ctaHref: "/thank-you"
    }
  },
  {
    slug: "ai-seo",
    title: "SEO & AIO",
    hero: {
      headline: "Get found on Google",
      headlineAccent: "& AI",
      description: "Traditional SEO gets you on Google. AIO gets you recommended by tools like ChatGPT and Perplexity. We do both, so no matter how people are searching, your business shows up first."
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
        icon: "trending-up",
        image: "/images/sumac/image9.webp"
      },
      {
        title: "AI Recommendations",
        tagline: "Get your business recommended by ChatGPT, Perplexity, and Google AI Overviews.",
        icon: "cpu",
        image: "/images/sumac/image3.webp"
      },
      {
        title: "Organic Traffic",
        tagline: "Drive a steady stream of high-intent visitors who are actively looking for your services.",
        icon: "bar-chart",
        image: "/images/sumac/image12-blurred.webp"
      },
      {
        title: "Long-Term Authority",
        tagline: "Build lasting online authority that compounds over time, unlike paid ads.",
        icon: "shield",
        image: "/images/sumac/image9.webp"
      }
    ],
    struggles: {
      title: "Why Many Local Businesses Struggle To Show Up On Google",
      subtitle: "It usually comes down to a few missing pieces in how they're set up online.",
      items: [
        {
          title: "Outdated Content Strategy",
          description: "Relying on outdated SEO tricks that Google now ignores completely."
        },
        {
          title: "Weak Technical Foundation",
          description: "Having a slow, messy site that actually prevents search engines from reading your pages."
        },
        {
          title: "No Authority Building",
          description: "Not doing the ongoing work to build real local authority and backlinks."
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
      subtitle: "When someone nearby needs your services, you should be the first name they see. Our approach builds real local authority that improves your visibility and actually generates phone calls from Google.",
      ctaLabel: "Get My Free Google Audit",
      ctaHref: "/thank-you",
      image: "/images/sumac/image12-blurred.webp"
    },
    faqs: [
      {
        question: "How long until I see results?",
        answer: "Honest answer, it takes time. You might see some movement in a few weeks, but meaningful rankings usually take three to six months. Anyone promising page one in 30 days is just lying to you."
      },
      {
        question: "What even is AIO and why does it matter?",
        answer: "It stands for AI Optimization. When someone asks ChatGPT for a recommendation, it pulls from structured data on the web. If your site isn't built for these models to read, you're invisible to them. We fix that."
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
      ctaHref: "/thank-you"
    }
  },
  {
    slug: "google-business-profile",
    title: "Google Business Profile",
    hero: {
      headline: "Dominate the local",
      headlineAccent: "map pack",
      description: "Your Google Business Profile is usually the first thing customers see, even before your website. We optimize every single detail so you show up in the map pack, look highly trustworthy, and actually get the call."
    },
    definition: {
      title: "What Is Google Business Profile Optimization?",
      description: "It means making sure your Google Maps listing is perfectly dialed in with the right categories, photos, and reviews, so when someone searches for what you do, you show up in those top three map results.",
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
        tagline: "Show up in the top three Google Maps results where most local searchers actually click.",
        icon: "map-pin",
        image: "/images/sumac/image3.webp"
      },
      {
        title: "5-Star Reputation",
        tagline: "Systematic review collection that builds a wall of social proof competitors can't match.",
        icon: "star",
        image: "/images/sumac/image12-blurred.webp"
      },
      {
        title: "Direct Calls",
        tagline: "Customers can call you directly from the search results without even visiting your website.",
        icon: "phone",
        image: "/images/sumac/image9.webp"
      },
      {
        title: "Local Authority",
        tagline: "Consistent citations and posts that signal to Google your business is active and relevant.",
        icon: "badge",
        image: "/images/sumac/image3.webp"
      }
    ],
    struggles: {
      title: "Why Many Local Businesses Struggle To Show Up On Google",
      subtitle: "It almost always comes down to a few basic missing pieces.",
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
          description: "Not having a system to consistently get new reviews compared to competitors."
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
      subtitle: "If you want local customers to call you, you need to dominate the map pack. We optimize your profile to build trust and get you in front of the people actively searching for your services.",
      ctaLabel: "Get My Free Google Audit",
      ctaHref: "/thank-you",
      image: "/images/sumac/image12-blurred.webp"
    },
    faqs: [
      {
        question: "How long does it take to climb the map pack?",
        answer: "Optimizing your profile can move the needle fast, sometimes in just a few weeks. Consistently staying in the top three depends on your competition, but most clients see real movement within a month or two."
      },
      {
        question: "Why do reviews matter so much?",
        answer: "Reviews are one of the biggest signals Google uses for the map pack. Getting a steady stream of high-quality reviews is a combination that is really hard for your competitors to beat."
      },
      {
        question: "I already have a Google Business Profile - can you still help?",
        answer: "Almost always, yes. Most of the profiles we look at are missing key categories, have blank service descriptions, or lack good photos. There is usually a ton of room for improvement."
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
      ctaHref: "/thank-you"
    }
  },
  {
    slug: "automations",
    title: "Business Automations",
    hero: {
      headline: "Stop losing leads to",
      headlineAccent: "slow follow-up",
      description: "When a lead reaches out and doesn't get an answer, they move on in minutes. Our systems respond instantly with a personalized text, log the lead, and queue up the follow-up, all without you lifting a finger."
    },
    definition: {
      title: "What Are Business Automations?",
      description: "We connect your website, phone, and messaging tools into one smooth system. When a customer reaches out, the system instantly replies and organizes their information, ensuring you never lose a lead just because you were busy.",
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
        tagline: "Leads get a text within seconds of reaching out, even if it's two in the morning on a Saturday.",
        icon: "zap",
        image: "/images/sumac/image12-blurred.webp"
      },
      {
        title: "Zero Leads Lost",
        tagline: "Every inquiry is captured, logged, and followed up with automatically.",
        icon: "target",
        image: "/images/sumac/image9.webp"
      },
      {
        title: "More Reviews",
        tagline: "Happy customers automatically get a review request at the perfect moment.",
        icon: "star",
        image: "/images/sumac/image3.webp"
      },
      {
        title: "Hours Saved Weekly",
        tagline: "Eliminate repetitive admin work so you can focus on the jobs that make money.",
        icon: "clock",
        image: "/images/sumac/image12-blurred.webp"
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
      subtitle: "Stop wasting time on repetitive manual tasks. We build systems that ensure every single lead gets an instant reply and every happy customer gets asked for a review automatically.",
      ctaLabel: "Book a Strategy Call",
      ctaHref: "/thank-you",
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
        answer: "We just need a clear picture of how you currently operate. How do leads come in, what happens next, and what is currently slipping through the cracks? We take it from there and build the system around how you actually work."
      }
    ],
    bottomCta: {
      title: "Ready to scale efficiently?",
      description: "Automate your business today.",
      ctaLabel: "Book a Strategy Call",
      ctaHref: "/thank-you"
    }
  }
];
