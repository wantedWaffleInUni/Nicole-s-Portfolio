import { Project, ExperienceItem, EducationItem, SkillCategory, Achievement, Testimonial, BlogPost, SocialMetric, SocialPost } from './types';

export const PERSONAL_INFO = {
  name: "Nicole Khor Jia Qi",
  title: "Marketing Strategist & Financial Analyst",
  tagline: "Bridging the gap between creative storytelling and data-driven financial strategy.",
  email: "nicolekhor0815@gmail.com",
  phone: "+60 12-489 5477",
  linkedin: "https://linkedin.com/in/nicole-khor", 
  location: "Malaysia",
};

export const EDUCATION: EducationItem = {
  institution: "Monash University Malaysia",
  degree: "Bachelor of Business and Commerce",
  period: "Feb 2023 – Nov 2025",
  details: [
    "Majors: Applied Economics & Banking and Financial Management",
    "CGPA: 3.750/4.0 | WAM: 83.161",
    "Coursework: Corporate Finance, Derivatives, Commercial Banking, Managerial Economics, Investment Portfolio Management."
  ]
};

export const SKILLS: SkillCategory[] = [
  {
    category: "Marketing & Branding",
    items: ["Content Strategy", "Social Media Growth", "Campaign Management", "Publicity", "Event Marketing"]
  },
  {
    category: "Business & Finance",
    items: ["Financial Analysis", "Market Entry Strategy", "Budget Planning", "Investment Strategy", "Stock Pitching"]
  },
  {
    category: "Tools & Software",
    items: ["Microsoft Excel", "PowerPoint", "Canva", "Video Editing", "Google Analytics", "Shopee Seller Centre"]
  },
  {
    category: "Languages",
    items: ["English (Fluent)", "Mandarin (Fluent)", "Malay (Moderate)"]
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "muig",
    role: "Head of Publicity",
    company: "Monash University Investment Group (MUIG)",
    period: "Feb 2024 – Dec 2025",
    description: [
      "Led a multicultural team of 11 to produce high-impact marketing content.",
      "Grew Instagram followers to 2,000+ and achieved 10,000+ views on a single video.",
      "Promoted financial literacy through online/offline campaigns.",
      "Supported 6–8 events per semester covering design, merchandise, and video production."
    ]
  },
  {
    id: "freelance",
    role: "Freelance Marketing Consultant",
    company: "Pharmacy Startup",
    period: "Nov 2025 – Present",
    description: [
      "Building e-commerce channels and optimizing Shopee visibility.",
      "Designing marketing materials to establish brand identity for a new market entrant."
    ]
  },
  {
    id: "gip",
    role: "Global Intercampus Program Scholar",
    company: "Monash Australia",
    period: "July 2024 – Jan 2025",
    description: [
      "Studied abroad in Australia, developing cross-cultural communication and adaptability skills."
    ]
  },
  {
    id: "junior-analyst",
    role: "Junior Analyst Program",
    company: "MUIG",
    period: "July 2023 – Nov 2023",
    description: [
      "Conducted fundamental company analysis and developed investment strategies.",
      "Delivered stock pitches in simulations, strengthening analytical presentation skills."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "startup-expansion",
    title: "E-Commerce Market Entry",
    category: "Marketing Strategy",
    role: "Marketing Consultant",
    duration: "Ongoing",
    image: "", 
    overview: "Spearheading the digital transformation of a local pharmacy startup to capture online market share via Shopee.",
    objectives: [
      "Establish an online sales channel from scratch.",
      "Create a cohesive visual brand identity.",
      "Optimize product listings for SEO and conversion."
    ],
    deliverables: [
      "Shopee Store Setup",
      "Product Photography & Graphics",
      "Promotional Campaign Plan"
    ],
    outcomes: [
      "Successfully launched pilot store.",
      "Established initial customer base within first month."
    ],
    skills: ["E-commerce", "Shopee", "Canva", "Copywriting"]
  },
  {
    id: "esg-competition",
    title: "EY ESG National Innovation",
    category: "Business Strategy",
    role: "Strategist & Video Editor",
    duration: "Apr 2025 – June 2025",
    image: "",
    overview: "Competed in the Fourth EY ESG National College Innovation Competition by proposing strategic ESG improvements.",
    objectives: [
      "Analyze a company's current ESG initiatives.",
      "Propose actionable strategic improvements.",
      "Produce a compelling video pitch."
    ],
    deliverables: [
      "Strategic Proposal Document",
      "Competition Video Submission"
    ],
    outcomes: [
      "Developed a comprehensive ESG framework.",
      "Produced high-quality video content for the submission."
    ],
    skills: ["ESG Analysis", "Video Editing", "Strategic Planning"]
  },
  {
    id: "muig-rebrand",
    title: "Investment Group Rebrand",
    category: "Public Relations",
    role: "Head of Publicity",
    duration: "2024 - 2025",
    image: "",
    overview: "Revitalized the public image of the Monash University Investment Group to attract a broader student demographic.",
    objectives: [
      "Increase social media engagement.",
      "Demystify finance for non-finance students.",
      "Boost event attendance."
    ],
    deliverables: [
      "Instagram Content Strategy",
      "Event Collateral",
      "Recruitment Campaign"
    ],
    outcomes: [
      "10k+ Views on viral reel.",
      "Grew follower base to 2,000+.",
      "Increased event turnout by 30%."
    ],
    skills: ["Social Media", "Team Leadership", "Content Creation"]
  },
  {
    id: "capstone",
    title: "Integrative Business Practices",
    category: "Capstone Project",
    role: "Team Lead",
    duration: "July 2025 – Nov 2025",
    image: "",
    overview: "Collaborated with local and overseas suppliers to develop a market entry strategy for a new product line.",
    objectives: [
      "Source materials efficiently.",
      "Conduct extensive market research.",
      "Develop a viable budget plan."
    ],
    deliverables: [
      "Market Entry Strategy Report",
      "Supplier Partnership Agreements",
      "Financial Forecast"
    ],
    outcomes: [
      "Delivered a viable business model.",
      "Received High Distinction for the unit."
    ],
    skills: ["Supply Chain", "Market Research", "Budgeting"]
  }
];

export const SOCIAL_METRICS: SocialMetric[] = [
  { label: "Instagram Followers", value: "2,000+" },
  { label: "Viral Reel Views", value: "10k+" },
  { label: "Event Turnout Increase", value: "30%" },
];

export const SOCIAL_POSTS: SocialPost[] = [
  {
    id: "p1",
    platform: "Instagram",
    type: "Reel",
    caption: "Financial Literacy Campaign - Viral Hit"
  },
  {
    id: "p2",
    platform: "Instagram",
    type: "Carousel",
    caption: "Event Highlights: MUIG Networking Night"
  },
  {
    id: "p3",
    platform: "LinkedIn",
    type: "Post",
    caption: "Reflecting on my tenure as Head of Publicity"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Monash High Achiever Award (HAA)",
    description: "Awarded scholarship for maintaining a Weighted Average Mark (WAM) above 75%.",
    date: "Feb 2023 – Nov 2025"
  },
  {
    title: "Penang State Outstanding Graduate Award",
    description: "Recognized by the Penang State Government for exceptional academic performance in UEC.",
    date: "2022"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quote: "Nicole has an exceptional ability to translate complex financial data into compelling narratives. Her work on our rebrand was nothing short of transformative.",
    author: "Sarah L.",
    role: "President",
    company: "MUIG"
  },
  {
    id: "2",
    quote: "Professional, diligent, and incredibly creative. Nicole brought a level of strategic thinking to our marketing that we hadn't seen before.",
    author: "James Tan",
    role: "Founder",
    company: "Pharmacy Startup"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "The Intersection of Finance & Storytelling",
    excerpt: "Why modern financial reports need more than just numbers—they need a narrative that stakeholders can believe in.",
    date: "Oct 12, 2025",
    category: "Strategy",
    image: "",
    link: "#"
  },
  {
    id: "2",
    title: "Navigating E-Commerce Market Entry",
    excerpt: "Lessons learned from helping a brick-and-mortar pharmacy launch their first Shopee store in a competitive landscape.",
    date: "Sep 28, 2025",
    category: "Case Study",
    image: "",
    link: "#"
  },
  {
    id: "3",
    title: "Building a Brand as a Student",
    excerpt: "How I leveraged university leadership roles to build a professional portfolio before graduation.",
    date: "Aug 15, 2025",
    category: "Career",
    image: "",
    link: "#"
  }
];