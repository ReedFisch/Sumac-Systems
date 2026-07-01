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
        title: "Lightning Fast",
        tagline: "Optimized for sub-second load times.",
        icon: "zap"
      },
      {
        title: "Responsive",
        tagline: "Looks perfect on any device.",
        icon: "layout"
      }
    ],
    bottomCta: {
      title: "Ready for a new website?",
      description: "Let's build something amazing together.",
      ctaLabel: "Get Started",
      ctaHref: "/audit"
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
        title: "Data-Driven",
        tagline: "Decisions backed by AI models.",
        icon: "database"
      },
      {
        title: "Sustainable",
        tagline: "Long-term organic growth.",
        icon: "trending-up"
      }
    ],
    bottomCta: {
      title: "Want more organic traffic?",
      description: "Start ranking higher today.",
      ctaLabel: "Get a Free Audit",
      ctaHref: "/audit"
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
        title: "Visible",
        tagline: "Appear when customers search nearby.",
        icon: "map-pin"
      },
      {
        title: "Trustworthy",
        tagline: "Build a stellar local reputation.",
        icon: "star"
      }
    ],
    bottomCta: {
      title: "Need more local customers?",
      description: "Let's optimize your profile.",
      ctaLabel: "Start Now",
      ctaHref: "/audit"
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
        title: "Efficient",
        tagline: "Reclaim hours of manual work.",
        icon: "clock"
      },
      {
        title: "Reliable",
        tagline: "Zero human error in repetitive tasks.",
        icon: "check-circle"
      }
    ],
    bottomCta: {
      title: "Ready to scale efficiently?",
      description: "Automate your business today.",
      ctaLabel: "Book a Strategy Call",
      ctaHref: "/audit"
    }
  }
];
