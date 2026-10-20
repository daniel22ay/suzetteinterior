import { Project, ServiceItem, Testimonial } from '../types';

export const BRAND_INFO = {
  name: 'VISION Interior Design',
  tagline: 'Thoughtful Spaces. Designed with Purpose.',
  subheading:
    'VISION Interior Design brings creative thinking, practical planning and attention to detail to commercial interiors, retail environments and thoughtfully designed spaces.',
  designer: 'Suzette Lauziere',
  experienceSince: 1987,
  email: 'suzette@visioninteriordesign.ca',
  phone: '(613) 294-0077',
  phoneClean: '16132940077',
  address: '11 Carmichael Crt, Kanata, ON K2K 1K1',
  serviceRegion: 'Ottawa, Kanata, Eastern Ontario & Commercial Clients across Ontario',
  externalUrl: 'https://www.visioninteriordesign.ca/'
};

export const AUTHENTIC_PROJECTS: Project[] = [
  {
    id: 'boutique-retail-millwork',
    title: 'Boutique Retail & Custom Millwork Showcase',
    category: 'Retail & Specialty Store Design',
    image: '/assets/aistudio/image_045d5082.png',
    summary:
      'Turnkey commercial retail space featuring bespoke dark-stained cash counter casework, tiered footwear display shelving, illuminated overhead soffit, and targeted architectural pendant lighting.',
    scope: [
      'Custom Millwork & Cash Wrap Architecture',
      'Merchandising Flow & Footwear Display Shelving',
      'Suspended Ceiling Bulkhead & Pendant Lighting',
      'Durable Commercial Flooring & Color Palette'
    ],
    location: 'Ottawa / Eastern Ontario',
    highlight: 'Custom Architectural Millwork'
  },
  {
    id: 'circular-display-architecture',
    title: 'Circular Display & Leather Goods Architecture',
    category: 'Custom Millwork & Fixture Design',
    image: '/assets/aistudio/image_38ef4952.png',
    summary:
      'Statement circular geometric display unit crafted in rich stained hardwood, integrating compartmentalized niches for luxury handbags, leather accessories, and ambient accent illumination.',
    scope: [
      'Geometric Millwork Engineering',
      'High-Impact Accent Wall Integration',
      'Specialty Retail Fixture Prototyping',
      'Finish Selection & Warm Woodwork Detailing'
    ],
    location: 'Ontario Retail Space',
    highlight: 'Bespoke Display Geometry'
  },
  {
    id: 'kardish-health-retail',
    title: 'Kardish Health Food Retail Commercial Environment',
    category: 'Commercial & Health Retail',
    image: '/assets/aistudio/image_6b6935df.png',
    summary:
      'Full commercial interior planning for an established Ottawa health food retailer, anchored by a custom organic suspended leaf canopy with recessed architectural downlighting and integrated overhead security.',
    scope: [
      'Custom Architectural Ceiling Canopy Design',
      'High-Capacity Zoned Gondola & Aisle Planning',
      'Point-of-Sale Integration & Queue Ergonomics',
      'Specialized Grocery Lighting & Wayfinding'
    ],
    location: 'Ottawa, ON (Kardish Chain)',
    highlight: 'Suspended Canopy Architecture'
  },
  {
    id: 'professional-office-fitup',
    title: 'Corporate & Professional Office Fit-Ups',
    category: 'Commercial Office Fit-Ups',
    image: '/assets/aistudio/image_045d5082.png', // authentic interior detail
    summary:
      'Comprehensive space planning, boardroom fit-ups, executive suites, and ergonomic staff workstations designed for institutional property management firms and corporate tenants.',
    scope: [
      'Commercial Leasehold Improvement Planning',
      'Acoustic Planning & Privacy Demising Walls',
      'Executive Boardroom & Reception Environments',
      'Full Contractor Tender & On-Site Oversight'
    ],
    location: 'Kanata / Ottawa Commercial Towers',
    highlight: 'Long-standing Commercial Trust'
  },
  {
    id: 'condo-common-retrofits',
    title: 'Condominium Common Area & Lobby Retrofits',
    category: 'Multi-Residential & Condominium Modernization',
    image: '/assets/aistudio/image_38ef4952.png', // authentic millwork detail
    summary:
      'Transforming high-traffic condominium lobbies, elevator vestibules, and shared corridors with durable, timeless finishes, strategic lighting, and contemporary architectural millwork.',
    scope: [
      'Common Area Architectural Retrofits',
      'High-Traffic Commercial Finishes & Textiles',
      'Corridor Lighting & Signage Refinement',
      'Coordination with Condominium Boards & PMs'
    ],
    location: 'KeyComm Condominium Properties, Ottawa',
    highlight: 'Enduring Material Durability'
  }
];

export const AUTHENTIC_SERVICES: ServiceItem[] = [
  {
    id: 'design-strategizing',
    number: '01',
    title: 'Design Strategizing',
    tagline: 'Strategic Spatial Planning & Feasibility',
    quote: 'Customized services to meet specific client needs, involving collaborative work throughout the process to guarantee measurable results.',
    description:
      'Successful commercial spaces start with clear strategic alignment. Suzette works closely with business owners, property managers, and retailers to analyze space utilization, traffic flow, customer psychology, and commercial lease realities before drawing a single line.',
    deliverables: [
      'Lease space feasibility & square-footage planning',
      'Customer journey & merchandise flow optimization',
      'Commercial zoning, code compliance & accessibility assessment',
      'Preliminary scope of work and budget parameters'
    ]
  },
  {
    id: 'conceptual-design',
    number: '02',
    title: 'Conceptual Design',
    tagline: 'Lateral Thinking & Custom Architectural Detailing',
    quote: 'Emphasizing lateral thinking to support client success.',
    description:
      'Drawing on lateral thinking developed across hundreds of commercial interiors since 1987, VISION designs distinct environments that reflect your brand identity while solving complex functional challenges.',
    deliverables: [
      'Custom millwork, cashier desks, and bespoke display fixtures',
      'Architectural feature ceilings, canopies & lighting plans',
      'Curated commercial material, flooring, and fabric palettes',
      'Detailed conceptual drawings and dimensioned elevations'
    ]
  },
  {
    id: 'project-management',
    number: '03',
    title: 'Project Management',
    tagline: 'Expert Guidance from Inception to Handover',
    quote: 'Focusing on expert guidance to respect project timelines and budgets, ensuring client priorities are met from inception to completion.',
    description:
      'A beautiful design is only as strong as its execution. Suzette guides your project through construction with meticulous dimensional oversight, working in close collaboration with vetted trades and general contractors.',
    deliverables: [
      'Budget control, timeline adherence & milestone tracking',
      'Trusted contractor & vendor connections across Eastern Ontario',
      'On-site design coordination and construction review',
      'Deficiency resolution and final walkthrough through turnover'
    ]
  }
];

export const AUTHENTIC_TESTIMONIALS: Testimonial[] = [
  {
    id: 'simon-proulx-keycomm',
    quote:
      'I have used the services of Suzette Lauziere since 1996 for several design projects including the design of professional office fit-ups and retrofitting common areas in condominium buildings. Suzette is caring, patient, and has an eye for design, dimensions and materials. She researches options, considers budgetary constraints, provides new ideas, and has excellent contacts for finding the right contractors and vendors.',
    author: 'Simon Proulx',
    role: 'Property Manager',
    company: 'KeyComm Management Inc.',
    since: 'Client Since 1996'
  }
];

export const DESIGNER_BIO = {
  name: 'Suzette Lauziere',
  title: 'Principal Interior Design Consultant',
  experienceSince: 1987,
  location: 'Ottawa & Kanata, Ontario',
  headline: '38+ Years of Practical Elegance in Commercial & Retail Design',
  intro:
    'Suzette Lauziere has been a professional Interior Design Consultant since 1987, specializing in commercial and retail design across Ottawa, Kanata, and Eastern Ontario.',
  paragraphs: [
    'With nearly four decades of hands-on experience, Suzette brings a rare combination of lateral creative thinking, rigorous dimensional accuracy, and deep commercial construction knowledge to every project.',
    'Her portfolio spans high-volume retail stores, specialty boutiques, professional office fit-ups, and common area condominium retrofits. Recognized by long-term clients for her patient, collaborative approach, she takes the time to thoroughly understand how your business operates, how your customers navigate the space, and how to maximize your investment.',
    'Over the decades, Suzette has developed a premier network of trusted commercial contractors, custom millworkers, and specialty vendors, ensuring that what is drawn on paper translates seamlessly into reality on time and on budget.'
  ]
};
