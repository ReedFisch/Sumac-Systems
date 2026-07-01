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
      description: "Custom-coded, lightning-fast websites with built-in lead capture. No templates, no page builders. Just clean code that loads in under a second and turns visitors into booked jobs."
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
        tagline: "Sub-second load times that keep visitors on your site instead of bouncing to competitors.",
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
        question: "How long does a new website take to build?",
        answer: "Because we build custom layouts instead of relying on generic templates, a standard build takes a few weeks from our kickoff call to launch. We move quickly because we know every day you are stuck with an outdated site is a missed opportunity, but we never rush the technical foundation."
      },
      {
        question: "How does pricing work?",
        answer: "We operate on a flat monthly subscription rather than charging a massive upfront fee. Your monthly rate covers the custom design, development, high-speed hosting, and the ongoing management of your automated systems. We walk through the exact numbers on our strategy call once we understand your specific needs."
      },
      {
        question: "What if I already have a website?",
        answer: "We will look at what you currently have and figure out what is working and what needs rebuilding. In most cases, it makes sense to rebuild from the ground up so we can properly integrate modern AI search visibility and lead automations. We handle the transition so you do not lose any existing traffic."
      },
      {
        question: "Do I have to manage the technical updates?",
        answer: "No. You are hiring us so you can focus on running your business. We handle the web hosting, security updates, site speed optimization, and ongoing technical maintenance."
      },
      {
        question: "Will my website be mobile-friendly?",
        answer: "Absolutely. All of our websites are built mobile-first, ensuring they look and perform flawlessly on any device."
      },
      {
        question: "What happens if I cancel?",
        answer: "Our service is an ongoing package that includes hosting, active SEO, and software management. If you cancel, the website and its connected automations will be taken offline at the end of your billing cycle. However, we have a strict Business Continuity Safeguard - if Sumac ever permanently closes, we transfer full ownership of the code and domain directly to you at no cost."
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
    title: "SEO & AIEO",
    hero: {
      headline: "Get found on Google",
      headlineAccent: "& AI",
      description: "Traditional SEO gets you on Google. AIEO gets you recommended by ChatGPT, Perplexity, and Google AI Overviews. We do both - so no matter how people search, your business shows up first."
    },
    definition: {
      title: "What Is SEO & AIEO?",
      description: "SEO (Search Engine Optimization) gets your website ranking on Google. AIEO (AI Engine Optimization) structures your content so AI tools like ChatGPT and Perplexity recommend your business when people ask for services. Together, they cover every way modern customers find local businesses.",
      examples: [
        '"Best roofer in Rochester" - Google',
        '"Find me a reliable HVAC company" - ChatGPT',
        '"Who does emergency plumbing near me?" - Perplexity',
        '"Compare local landscapers" - Google AI Overview'
      ]
    },
    approach: {
      title: "Our SEO & AIEO Methodology",
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
        question: "How long does local SEO take?",
        answer: "SEO is a long-term strategy. While you might see initial improvements in weeks, substantial and lasting growth typically takes 3 to 6 months of consistent effort."
      },
      {
        question: "What exactly is AI Search Optimization?",
        answer: "Traditional SEO focuses on getting you to the top of a standard Google search page. That is still important, but people are increasingly using tools like ChatGPT, Perplexity, and Google AI Overviews to find businesses. We structure your website code and content specifically so those AI models can easily read, understand, and recommend your services to potential clients."
      },
      {
        question: "Do I need a website for SEO?",
        answer: "Yes, a well-optimized website is the foundation of any successful SEO campaign. It is where you convert the traffic you earn."
      },
      {
        question: "Can local SEO help my type of business?",
        answer: "If you serve local customers within a specific geographic area, local SEO is essential to ensure you capture high-intent search traffic."
      },
      {
        question: "How does pricing work?",
        answer: "We operate on a flat monthly subscription rather than charging a massive upfront fee. Your monthly rate covers the custom design, development, high-speed hosting, and the ongoing management of your automated systems."
      },
      {
        question: "What makes you different from other agencies?",
        answer: "Most agencies just design a digital brochure, hand over the keys, and disappear. We build systems designed to capture leads and save you time. Every decision we make is backed by a focus on human behavior, technical performance, and making sure your business looks highly credible."
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
        question: "How long does local SEO take?",
        answer: "While profile optimization can yield quick initial wins, climbing the local rankings usually takes 30 to 90 days depending on competition."
      },
      {
        question: "Do reviews help local SEO?",
        answer: "Absolutely. Consistent, positive reviews are one of the strongest ranking factors for Google Business Profiles."
      },
      {
        question: "How does the audit work?",
        answer: "We analyze your current Google Business Profile, compare it against local competitors, and identify exactly what steps are needed to dominate your area."
      },
      {
        question: "What if I already have a Google Business Profile?",
        answer: "Great - we will audit what you currently have, fix inconsistencies, expand your categories and services, and build out a strategy to consistently outrank competitors in the local map pack."
      },
      {
        question: "Do I have to manage anything myself?",
        answer: "No. You are hiring us so you can focus on running your business. We handle the profile updates, review responses, Google Posts, and ongoing optimization."
      },
      {
        question: "Can local SEO help my type of business?",
        answer: "If you serve local customers within a specific geographic area, local SEO is essential to ensure you capture high-intent search traffic."
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
        question: "How do the automated text follow-ups work?",
        answer: "When someone interacts with your business online, you have a very short window to reply before they move on to a competitor. We connect your website forms and phone lines to an automated system. If a lead submits a form or calls and you miss it, the system instantly sends them a customized text message to keep them engaged until you can personally reply."
      },
      {
        question: "What kind of tools do you integrate?",
        answer: "We integrate with CRMs, Zapier, Make, Twilio, and almost any modern software with an API."
      },
      {
        question: "Is it difficult to learn the new systems?",
        answer: "We build intuitive workflows and provide full training so your team can adapt effortlessly."
      },
      {
        question: "Will this replace my employees?",
        answer: "No, automations empower your employees to focus on high-value, creative work instead of robotic data entry."
      },
      {
        question: "How does pricing work?",
        answer: "We operate on a flat monthly subscription rather than charging a massive upfront fee. Your monthly rate covers the custom design, development, high-speed hosting, and the ongoing management of your automated systems."
      },
      {
        question: "Do I need to provide anything to get started?",
        answer: "Yes, you know your business better than anyone. We ask that you provide core details about your workflows, the tools you currently use, and the pain points you want solved. We handle the technical architecture from there."
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
