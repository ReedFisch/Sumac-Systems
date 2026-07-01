export interface ServiceDetail {
  slug: string;
  title: string;
  hero: {
    headline: string;
    headlineAccent: string;
    description: string;
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
        }
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
        }
      ]
    },
    middleCta: {
      title: "Local SEO That Helps Customers Find Your Business",
      subtitle: "When local customers search for your services, you want your business to be one of the first they find. Our Local Authority System helps improve your visibility, build trust, and generate more opportunities from Google.",
      ctaLabel: "Get My Free Google Audit",
      ctaHref: "/#contact",
      image: "/images/sumac/image12-blurred.webp" // Using a generic image as placeholder
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
        }
      ]
    },
    middleCta: {
      title: "Local SEO That Helps Customers Find Your Business",
      subtitle: "When local customers search for your services, you want your business to be one of the first they find. Our Local Authority System helps improve your visibility, build trust, and generate more opportunities from Google.",
      ctaLabel: "Get My Free Google Audit",
      ctaHref: "/#contact",
      image: "/images/sumac/image12-blurred.webp" // Need to replace with map rankings if available
    },
    faqs: [
      {
        question: "How long does local SEO take?",
        answer: "While profile optimization can yield quick initial wins, climbing the local rankings (the Map Pack) usually takes 30 to 90 days depending on competition."
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
        }
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
