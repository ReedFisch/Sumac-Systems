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
      description: "We build sites that don't just look pretty, but are engineered for speed, conversions, and scale."
    },
    definition: {
      title: "What Is Next-Gen Web Design?",
      description: "It's building a digital storefront that actively sells for you. It means fast load times, clear navigation, and a structure designed to turn visitors into leads.",
      examples: [
        '"Landscaping services near me"',
        '"Best roofer in Rochester"',
        '"Plumber for emergency leak"',
        '"Affordable HVAC installation"'
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
        title: "More Visibility",
        tagline: "Show up when customers search for your services.",
        icon: "map-pin"
      },
      {
        title: "More Trust",
        tagline: "Appear alongside great reviews and a professional look.",
        icon: "star"
      },
      {
        title: "More Calls",
        tagline: "Make it incredibly easy for customers to contact you directly.",
        icon: "phone"
      },
      {
        title: "More Opportunities",
        tagline: "Generate more leads from high-intent local searches.",
        icon: "target"
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
        answer: "Timelines vary depending on the scope of the project, but typical engagements range from 4-8 weeks."
      },
      {
        question: "Do I own my website?",
        answer: "Yes, once the final payment is made, you own the website entirely."
      },
      {
        question: "Will my website be mobile-friendly?",
        answer: "Absolutely. All of our websites are built mobile-first, ensuring they look and perform flawlessly on any device."
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
    title: "AI-Powered SEO",
    hero: {
      headline: "Dominate search with",
      headlineAccent: "AI",
      description: "Leverage advanced AI to uncover hidden opportunities and outrank your competitors."
    },
    definition: {
      title: "What Is AI-Powered SEO?",
      description: "It's using modern algorithms to optimize your online presence so your business appears when customers search for services in your area.",
      examples: [
        '"Emergency plumber near me"',
        '"Best HVAC contractor in Rochester"',
        '"Local junk removal company"',
        '"Affordable landscaping"'
      ]
    },
    approach: {
      title: "Our SEO Methodology",
      items: [
        "AI-driven keyword gap analysis",
        "Semantic content optimization",
        "Technical performance auditing"
      ]
    },
    benefits: [
      {
        title: "More Visibility",
        tagline: "Show up when customers search for your services.",
        icon: "map-pin"
      },
      {
        title: "More Trust",
        tagline: "Appear alongside great reviews and a professional look.",
        icon: "star"
      },
      {
        title: "More Calls",
        tagline: "Make it incredibly easy for customers to contact you directly.",
        icon: "phone"
      },
      {
        title: "More Opportunities",
        tagline: "Generate more leads from high-intent local searches.",
        icon: "target"
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
        question: "Do I need a website for SEO?",
        answer: "Yes, a well-optimized website is the foundation of any successful SEO campaign. It is where you convert the traffic you earn."
      },
      {
        question: "Can local SEO help my type of business?",
        answer: "If you serve local customers within a specific geographic area, local SEO is essential to ensure you capture high-intent search traffic."
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
      headline: "Own your local",
      headlineAccent: "market",
      description: "Optimize your Google presence to capture local intent and drive foot traffic."
    },
    definition: {
      title: "What Is Profile Optimization?",
      description: "It's taking control of your Google listing so when people search for your business, they see a complete, trustworthy profile that compels them to call.",
      examples: [
        '"Roofer near me"',
        '"HVAC repair open now"',
        '"Best local contractor"',
        '"Emergency plumbing services"'
      ]
    },
    approach: {
      title: "Local SEO Strategy",
      items: [
        "Profile optimization and verification",
        "Review management strategies",
        "Local citation building"
      ]
    },
    benefits: [
      {
        title: "More Visibility",
        tagline: "Show up when customers search for your services locally.",
        icon: "map-pin"
      },
      {
        title: "More Trust",
        tagline: "Appear alongside great reviews and professional business information.",
        icon: "star"
      },
      {
        title: "More Calls",
        tagline: "Make it incredibly easy for customers to contact you directly.",
        icon: "phone"
      },
      {
        title: "More Opportunities",
        tagline: "Generate more leads from high-intent local searches.",
        icon: "target"
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
      headline: "Work smarter, not",
      headlineAccent: "harder",
      description: "Streamline your operations with custom workflows that save time and reduce errors."
    },
    definition: {
      title: "What Are Business Automations?",
      description: "It's connecting your different software tools so they talk to each other, automatically moving data and triggering actions without human intervention.",
      examples: [
        '"Auto-reply to missed calls"',
        '"Automated review requests"',
        '"Instant lead notifications"',
        '"Seamless CRM syncing"'
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
        title: "More Visibility",
        tagline: "Show up when customers search for your services.",
        icon: "map-pin"
      },
      {
        title: "More Trust",
        tagline: "Appear alongside great reviews and a professional look.",
        icon: "star"
      },
      {
        title: "More Calls",
        tagline: "Make it incredibly easy for customers to contact you directly.",
        icon: "phone"
      },
      {
        title: "More Opportunities",
        tagline: "Generate more leads from high-intent local searches.",
        icon: "target"
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
