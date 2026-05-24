export interface ServicePackage {
  name: string;
  price: string;
  features: string[];
  delivery: string;
  revisions: string;
  isPopular?: boolean;
}

export interface ServiceStep {
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  process: ServiceStep[];
  packages: ServicePackage[];
  faqs: ServiceFAQ[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
}

export const servicesData: ServiceDetail[] = [
  {
    slug: 'web-dev',
    title: 'Full Stack Website Development',
    tagline: 'High-performance web applications built to convert.',
    description: 'We engineer production-grade websites, custom dashboards, e-commerce stores, and software solutions using modern frameworks like React and Next.js. Every build is optimized for accessibility, responsiveness, page speed, and organic SEO to ensure your business scales with credibility.',
    features: [
      'Custom React/Next.js architecture with zero bloated templates',
      'Mobile-first responsive layout optimization across all viewport screens',
      'Sub-second page loading performance scores on Google Core Web Vitals',
      'Secure payment processing systems and API database connections',
      'Custom headless CMS setups for seamless non-technical publishing'
    ],
    process: [
      { title: 'Discovery & Blueprint', description: 'We research your market, evaluate competitors, and establish a clear technical plan.' },
      { title: 'Interactive Prototype', description: 'Draft high-fidelity wireframes detailing structural pages and animations.' },
      { title: 'Elite Engineering', description: 'Our senior developers write clean, modular React & TypeScript code.' },
      { title: 'Testing & Launch', description: 'Perform speed audits, security verifications, and go live on secure servers.' }
    ],
    packages: [
      {
        name: 'Basic',
        price: '$300',
        features: ['5 Pages Website', 'Responsive Design', 'Basic UI/UX layout', 'Contact Form', 'Basic SEO Setup'],
        delivery: '7 Days',
        revisions: '2 Revisions'
      },
      {
        name: 'Standard',
        price: '$700',
        features: ['10 Pages Website', 'Custom Design', 'CMS Integration', 'Speed Optimization', 'On-Page SEO', 'Social Media Integration'],
        delivery: '12 Days',
        revisions: '4 Revisions',
        isPopular: true
      },
      {
        name: 'Premium',
        price: '$1500',
        features: ['15+ Pages Website', 'Fully Custom Design', 'Advanced Features', 'Ecommerce Setup', 'Security Setup', 'Full SEO Optimization', 'Admin Dashboard'],
        delivery: '20 Days',
        revisions: 'Unlimited Revisions'
      }
    ],
    faqs: [
      { question: 'What technologies do you build with?', answer: 'We build primarily with React, Next.js, TypeScript, TailwindCSS, and Node.js for custom applications, or Shopify/Wordpress for content management.' },
      { question: 'Will my site be mobile responsive?', answer: 'Absolutely. We test on multiple device screens (smartphones, tablets, and desktop resolutions) to guarantee a flawless responsive experience.' }
    ],
    testimonial: {
      quote: 'SocialEdge delivered our dashboard on time. Their engineering standards and speed optimization increased our checkout conversions by 32%.',
      author: 'Marcus Sterling',
      role: 'VP of Product',
      company: 'Nova SaaS'
    }
  },
  {
    slug: 'branding',
    title: 'Company Profile Design',
    tagline: 'Professional brand presentation assets for elite companies.',
    description: 'We draft bespoke corporate company profiles, investor pitch decks, branding guidelines, and corporate presentations that convey prestige. A well-designed company profile is key to securing commercial contracts, bids, and venture capital funding.',
    features: [
      'Custom vector layout designs with corporate visual guidelines',
      'High-impact infographics representing structural stats and workflows',
      'Professional copywriting consulting to ensure messaging authority',
      'Multi-format delivery (print-ready PDF, editable source files)',
      'Brand identity synchronization (colors, typography, voice guidelines)'
    ],
    process: [
      { title: 'Copy & Outline review', description: 'Evaluate your raw corporate info, mission statement, and core services list.' },
      { title: 'Layout Mockups', description: 'Establish visual styling directions, customized font sets, and color palettes.' },
      { title: 'Graphic Construction', description: 'Draft custom vector assets, data timelines, and section structures.' },
      { title: 'Final Polish', description: 'Review details, verify file formats, and deliver print-ready documents.' }
    ],
    packages: [
      {
        name: 'Basic',
        price: '$80',
        features: ['5 Pages Profile', 'Professional Layout', 'Company Info', 'Company Services', 'PDF Format'],
        delivery: '5 Days',
        revisions: '2 Revisions'
      },
      {
        name: 'Standard',
        price: '$150',
        features: ['10 Pages Profile', 'Custom Design', 'Infographics', 'Branding Colors', 'PDF + Editable File'],
        delivery: '8 Days',
        revisions: '4 Revisions',
        isPopular: true
      },
      {
        name: 'Premium',
        price: '$300',
        features: ['15+ Pages Profile', 'Premium Layout', 'Custom Graphics', 'Brand Identity Design', 'Print Ready File'],
        delivery: '12 Days',
        revisions: 'Unlimited Revisions'
      }
    ],
    faqs: [
      { question: 'Do you write the copy for the profile?', answer: 'We require raw company info from you, and then our team helps refine, structure, and edit the copy for maximum corporate appeal.' },
      { question: 'What file formats do I receive?', answer: 'You will receive a high-resolution, print-ready PDF, as well as the fully editable source files (Adobe Illustrator/InDesign or Canva link).' }
    ],
    testimonial: {
      quote: 'Our new company profile designed by SocialEdge helped us secure a $1.2M commercial construction contract. Outstanding prestige look.',
      author: 'Marcus Sterling',
      role: 'Creative Director',
      company: 'SKS Construction'
    }
  },
  {
    slug: 'app-dev',
    title: 'App Development',
    tagline: 'Elegant iOS and Android mobile apps designed to scale.',
    description: 'We develop custom mobile applications for Android and iOS devices, ensuring smooth native-level performance, clean visual layouts, secure API integrations, and robust database backends. Scale your operations with mobile accessibility.',
    features: [
      'Cross-platform framework architectures (React Native / Flutter)',
      'Sleek modern application UI/UX flows with micro-animations',
      'Real-time data synchronization, offline local storage, and database setups',
      'Push notification automation setups, user accounts, and billing systems',
      'Full App Store and Google Play publishing support'
    ],
    process: [
      { title: 'Architecture Planning', description: 'Detail user stories, API routes, database schemas, and interface mockups.' },
      { title: 'Fidelity UI/UX', description: 'Design complete app screen grids, and connect interactive visual pathways.' },
      { title: 'React Native Coding', description: 'Write scalable mobile app scripts and connect secure backend endpoints.' },
      { title: 'QA & App Store Release', description: 'Perform beta testing on devices, fix logs, and submit to app stores.' }
    ],
    packages: [
      {
        name: 'Basic',
        price: '$2000',
        features: ['Simple Mobile App', 'Android Only', 'Basic UI Design', 'API Integration'],
        delivery: '15 Days',
        revisions: '3 Revisions'
      },
      {
        name: 'Standard',
        price: '$4500',
        features: ['Android + iOS App', 'Custom UI/UX', 'Admin Panel', 'Push Notifications', 'Payment Integration'],
        delivery: '30 Days',
        revisions: '5 Revisions',
        isPopular: true
      },
      {
        name: 'Premium',
        price: '$8000',
        features: ['Advanced Mobile App', 'Android + iOS', 'Custom Dashboard', 'CRM Integration', 'Full Testing', 'Maintenance Support'],
        delivery: '45 Days',
        revisions: 'Unlimited Revisions'
      }
    ],
    faqs: [
      { question: 'Will you deploy the app to stores?', answer: 'Yes. We manage the entire submission process for both the Apple App Store and Google Play Console on your developer accounts.' },
      { question: 'Can you update the app after launch?', answer: 'Yes, we offer ongoing maintenance and optimization packages to support new operating system updates and features.' }
    ],
    testimonial: {
      quote: 'The mobile app SocialEdge engineered has scaled our on-demand services delivery. Zero crashes and premium interface styling.',
      author: 'Vivienne Vance',
      role: 'VP of Product',
      company: 'Apex Soft'
    }
  },
  {
    slug: 'crm',
    title: 'CRM Software',
    tagline: 'Custom business management software and analytics dashboards.',
    description: 'We construct customized CRM (Customer Relationship Management) solutions, sales pipelines, lead trackers, and business automation software built around your exact workflow rules. Eliminate overhead with customized software tools.',
    features: [
      'Custom sales dashboards and real-time analytical report grids',
      'Automated follow-up emails, contract generators, and client pipelines',
      'Role-based permission controls and multi-member team portals',
      'Third-party database connection, automated data mapping, and API pipelines',
      'Centralized client communication logs and activity tracking'
    ],
    process: [
      { title: 'Workflow Auditing', description: 'Analyze your manual operations, sales cycles, and communication bottlenecks.' },
      { title: 'CRM Design', description: 'Establish database tables, user interface dashboards, and analytics charts.' },
      { title: 'Backend Automation', description: 'Code the CRM engines, database queries, and automatic script triggers.' },
      { title: 'User Onboarding', description: 'Launch the system, import legacy records, and train your team.' }
    ],
    packages: [
      {
        name: 'Basic',
        price: '$500',
        features: ['Contact Management', 'Lead Tracking', 'Basic Dashboard', 'User Login System'],
        delivery: '10 Days',
        revisions: '3 Revisions'
      },
      {
        name: 'Standard',
        price: '$1200',
        features: ['Sales Pipeline', 'Customer Database', 'Email Integration', 'Reports & Analytics'],
        delivery: '18 Days',
        revisions: '5 Revisions',
        isPopular: true
      },
      {
        name: 'Premium',
        price: '$2500',
        features: ['Custom CRM System', 'Automation Tools', 'Team Management', 'Advanced Analytics'],
        delivery: '30 Days',
        revisions: 'Unlimited Revisions'
      }
    ],
    faqs: [
      { question: 'Can you import our existing customer records?', answer: 'Yes. We build custom data migration pipelines to import data from Excel, CSV, or legacy databases securely.' },
      { question: 'Is my company data secure?', answer: 'Data security is our primary focus. We encrypt database tables, use SSL connections, and set up role-based access rules.' }
    ],
    testimonial: {
      quote: 'Our custom CRM system constructed by SocialEdge automated 70% of our sales tracking work. The efficiency gains are massive.',
      author: 'Marcus Sterling',
      role: 'CMO',
      company: 'Zenith Retail'
    }
  },
  {
    slug: 'ui-ux',
    title: 'UI/UX Designing',
    tagline: 'High-fidelity visual design and interactive user flows.',
    description: 'We design modern, user-centric interfaces for websites, SaaS dashboards, and mobile applications. Our design system incorporates detailed wireframes, visual style guides, micro-interactions, and interactive clickable prototypes.',
    features: [
      'High-fidelity interactive prototype links (Figma files)',
      'Custom style guides (colors, buttons, typography tokens, inputs)',
      'User journey mapping, wireframes, and UX research layouts',
      'Modern glassmorphism and clean premium design aesthetics',
      'Seamless developer handoff with structured design assets'
    ],
    process: [
      { title: 'UX Research', description: 'Evaluate user profiles, draft user flows, and sketch wireframe guides.' },
      { title: 'Visual Styling', description: 'Establish typography sets, visual design systems, and color schemes.' },
      { title: 'High-Fidelity UI', description: 'Design full application pages, cards, dashboards, and responsive views.' },
      { title: 'Clickable Prototypes', description: 'Wire interactive button links in Figma to preview live app click flows.' }
    ],
    packages: [
      {
        name: 'Basic',
        price: '$150',
        features: ['3 Screens Design', 'Wireframe Layout', 'Basic UI styling'],
        delivery: '4 Days',
        revisions: '2 Revisions'
      },
      {
        name: 'Standard',
        price: '$350',
        features: ['8 Screens Design', 'Interactive Prototype', 'Mobile + Web UI layouts'],
        delivery: '7 Days',
        revisions: '4 Revisions',
        isPopular: true
      },
      {
        name: 'Premium',
        price: '$700',
        features: ['15+ Screens', 'Full App UI/UX systems', 'Advanced Prototype animations'],
        delivery: '12 Days',
        revisions: 'Unlimited Revisions'
      }
    ],
    faqs: [
      { question: 'What design tools do you use?', answer: 'We design primarily in Figma, ensuring you have cloud access to comment, inspect, and export assets directly.' },
      { question: 'Do you write the code for the designs?', answer: 'This service focuses strictly on visual styling and prototyping. However, our engineering team can convert these designs into React/Next.js code.' }
    ],
    testimonial: {
      quote: 'SocialEdge transformed our cluttered SaaS interface into an elegant, easy-to-use luxury dashboard. Our user engagement scores rose by 40%.',
      author: 'Sarah Jenkins',
      role: 'VP of Design',
      company: 'Zenith SaaS'
    }
  },
  {
    slug: 'video-editing',
    title: 'Video Editing',
    tagline: 'Cinematic corporate video editing and motion graphics.',
    description: 'We edit professional promotional videos, corporate presentations, social media ads, and branding clips. Combining advanced color grading, custom sound design, text animations, and smooth motion graphics to tell your brand story.',
    features: [
      'Advanced video cutting, sync, and cinematic transitions',
      'Professional color grading and visual styling adjustments',
      'Custom motion graphics, titles, and text animation overlays',
      'High-end sound design, audio leveling, and voice-over sync',
      'optimized delivery sizes for YouTube, Instagram, LinkedIn, or TV ads'
    ],
    process: [
      { title: 'Footage & Script Review', description: 'Review raw recordings, identify story beats, and review sound files.' },
      { title: 'Rough Cut Assembly', description: 'Construct timeline structures, sync audios, and draft baseline visual clips.' },
      { title: 'Visual & Audio Polish', description: 'Add transitions, integrate motion titles, color-grade, and level sounds.' },
      { title: 'Export & Render', description: 'Render high-resolution outputs (1080p/4K) optimized for social or web.' }
    ],
    packages: [
      {
        name: 'Basic',
        price: '$40/vid',
        features: ['Video Cutting', 'Basic Transitions', 'Background Music', '1080p Export'],
        delivery: '3 Days',
        revisions: '2 Revisions'
      },
      {
        name: 'Standard',
        price: '$100',
        features: ['Professional Editing', 'Motion Graphics', 'Text Animation', 'Sound Effects'],
        delivery: '5 Days',
        revisions: '4 Revisions',
        isPopular: true
      },
      {
        name: 'Premium',
        price: '$250',
        features: ['Advanced Editing', 'Cinematic Effects', 'Custom Animation', 'Voice Sync', 'Color Correction'],
        delivery: '8 Days',
        revisions: 'Unlimited Revisions'
      }
    ],
    faqs: [
      { question: 'What file resolution do you export in?', answer: 'We export in 1080p Full HD by default, or 4K Ultra HD if requested, formatted specifically for your targeted platform.' },
      { question: 'Can you add subtitles to the videos?', answer: 'Yes, we can write custom stylized subtitle tracks or burned-in caption overlays to boost social media retention.' }
    ],
    testimonial: {
      quote: 'The promotional video edited by SocialEdge boosted our social campaign click-through rates by 65%. Meticulous motion graphics and audio sync.',
      author: 'Marcus Sterling',
      role: 'CMO',
      company: 'AlphaMedia'
    }
  }
];
