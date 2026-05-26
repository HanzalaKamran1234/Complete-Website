export interface ProjectDetails {
  tagline: string;
  overview: string;
  requirements: string;
  solved: string;
  strategy: string;
  impact: string;
  liveUrl: string;
  serviceSlug: string;
  beforeState: string;
  afterState: string;
}

export interface Project {
  id: number;
  title: string;
  slug: string;
  category: string;
  filter: 'business' | 'ecommerce' | 'corporate' | 'educational' | 'travel' | 'news' | 'portfolio' | 'custom';
  description: string;
  techStack: string[];
  details: ProjectDetails;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'esglinkanalytics.com',
    slug: 'esglinkanalytics',
    category: 'Corporate Analytics',
    filter: 'corporate',
    description: 'Enterprise ESG metrics reporting and carbon analytics dashboard.',
    techStack: ['React', 'TypeScript', 'Node.js', 'D3.js'],
    details: {
      tagline: 'High-fidelity environmental, social, and governance reporting.',
      overview: 'A bespoke analytical platform developed to help asset managers track and audit corporate carbon offset actions, diversity indices, and corporate compliance rates.',
      requirements: 'Real-time data visualization, security audits, fast response times, and customizable PDF reports.',
      solved: 'Developed an advanced, fast calculation pipeline that scales with heavy database reads, visualizes timelines using D3.js, and automates report generation.',
      strategy: 'Clean typography, minimal border grid layouts, and purple highlights to emphasize audit credibility.',
      impact: 'Reduced report audit durations by 40% and improved investor onboarding speed by 25%.',
      liveUrl: 'https://esglinkanalytics.com',
      serviceSlug: 'web-dev',
      beforeState: 'Manual spreadsheets and scattered metrics across 12 legacy silos.',
      afterState: 'Integrated dynamic dashboard with instant compliance audit capability.'
    }
  },
  {
    id: 2,
    title: 'skscon.com',
    slug: 'skscon',
    category: 'Corporate Business',
    filter: 'corporate',
    description: 'High-end engineering & infrastructure builders corporate portal.',
    techStack: ['HTML5', 'Vanilla CSS', 'Javascript', 'Three.js'],
    details: {
      tagline: 'Precision engineering showcase for elite infrastructure projects.',
      overview: 'A digital space for an international construction firm showcasing multi-million dollar structural projects with visual luxury.',
      requirements: 'Rich project gallery, interactive timeline, mobile-first design, and contact acquisition.',
      solved: 'Integrated Three.js elements, clean modern navigation grids, and custom media optimization for fast loading times.',
      strategy: 'Sleek dark theme backgrounds combined with gold borders to reflect structural luxury.',
      impact: 'Generated 45% more high-intent commercial builder inquiries within the first 60 days.',
      liveUrl: 'https://skscon.com',
      serviceSlug: 'branding',
      beforeState: 'Outdated legacy portal that failed to load heavy asset attachments on mobile.',
      afterState: 'Fully responsive, smooth-scrolling portfolio showcasing premium construction cases.'
    }
  },
  {
    id: 3,
    title: 'redsignature.pk',
    slug: 'redsignature',
    category: 'Branding / Business',
    filter: 'business',
    description: 'Bespoke corporate identity and creative marketing assets hub.',
    techStack: ['React', 'CSS Modules', 'Framer Motion'],
    details: {
      tagline: 'A visual signature for luxury corporate brands.',
      overview: 'Interactive portfolio presenting branding solutions, corporate packages, and elite identity development services.',
      requirements: 'Smooth page transitions, luxury card styling, custom animations, and package highlights.',
      solved: 'Crafted unique hover micro-interactions, responsive grid systems, and custom svg assets.',
      strategy: 'Deep purple theme base combined with gold accents to signal high-end creative work.',
      impact: 'Boosted conversion rates on design consultations by 35%.',
      liveUrl: 'https://redsignature.pk',
      serviceSlug: 'ui-ux',
      beforeState: 'Simple landing page that lacked branding identity or interactive portfolio depth.',
      afterState: 'Interactive creative hub showing premium vector styles and dynamic branding guides.'
    }
  },
  {
    id: 4,
    title: 'BHFBazaar.online',
    slug: 'bhfbazaar',
    category: 'Ecommerce Store',
    filter: 'ecommerce',
    description: 'Custom e-commerce store with integrated secure checkouts and analytics.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    details: {
      tagline: 'Bespoke digital shopping experience for retail products.',
      overview: 'Full-featured online bazaar supporting payment checkouts, secure login accounts, and order management dashboards.',
      requirements: 'Rapid search indexing, secure payments, custom admin dashboard, and high speed.',
      solved: 'Engineered a custom shopping cart backend with MongoDB, optimized image rendering, and integrated Stripe APIs.',
      strategy: 'Clean white background combined with purple highlights for products and gold highlights for CTA checkouts.',
      impact: 'Completed over $80k in sales within 3 months, with a 32% drop-off decrease.',
      liveUrl: 'https://BHFBazaar.online',
      serviceSlug: 'web-dev',
      beforeState: 'Third-party hosted website with high transaction fees and slow page load times.',
      afterState: 'Bespoke e-commerce portal with direct checkouts and sub-second rendering.'
    }
  },
  {
    id: 5,
    title: 'alliedmultimediaandprojectors.com',
    slug: 'alliedmultimedia',
    category: 'Electronics Business',
    filter: 'business',
    description: 'Premium presentation systems and multimedia equipment catalog.',
    techStack: ['Next.js', 'TypeScript', 'CSS Modules'],
    details: {
      tagline: 'High-end multimedia solutions for enterprise rooms.',
      overview: 'Catalog showcasing corporate visual displays, boardroom audio-visual setups, and projection models.',
      requirements: 'Equipment filter, quote generator system, and interactive manuals access.',
      solved: 'Built a custom serverless catalog in Next.js, and integrated an online instant price quotation generator.',
      strategy: 'Futuristic dark layouts combined with blue accent lines to reflect visual tech.',
      impact: 'AV equipment quotation requests increased by 50% in 1 month.',
      liveUrl: 'https://alliedmultimediaandprojectors.com',
      serviceSlug: 'web-dev',
      beforeState: 'Legacy PDF downloads containing outdated equipment pricing files.',
      afterState: 'Interactive dynamic product search system with instant quote calculation.'
    }
  },
  {
    id: 6,
    title: 'ittravelz.com',
    slug: 'ittravelz',
    category: 'Travel & Tourism',
    filter: 'travel',
    description: 'Premium corporate travel coordination and booking engine.',
    techStack: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    details: {
      tagline: 'Elite global travel logistics and custom itinerary builders.',
      overview: 'Travel coordination site allowing companies to manage corporate flight bookings, custom hotel stays, and tours.',
      requirements: 'Custom package filter, database indexing, user dashboard, and automated alerts.',
      solved: 'Engineered travel booking grids, connected third-party travel pricing APIs, and optimized query pipelines.',
      strategy: 'Light purple backgrounds combined with bright blue accents representing skies and global travel.',
      impact: 'Automated itinerary booking times reduced by 60%.',
      liveUrl: 'https://ittravelz.com',
      serviceSlug: 'web-dev',
      beforeState: 'Manual email queries and spreadsheets to organize tour routes.',
      afterState: 'Fully automated global tours database with online custom bookings.'
    }
  },
  {
    id: 7,
    title: 'thehandyman.com.pk',
    slug: 'thehandyman',
    category: 'Service Business',
    filter: 'business',
    description: 'Professional facilities maintenance and corporate handyman service.',
    techStack: ['HTML5', 'CSS3', 'Javascript'],
    details: {
      tagline: 'High-end facility management and on-demand maintenance.',
      overview: 'Corporate portal detailing commercial cleaning, structural repair, and facility upkeep packages.',
      requirements: 'Online slot booking, service grid, transparent pricing, and instant callback form.',
      solved: 'Created responsive pricing cards, custom booking systems, and automated email confirmation sequences.',
      strategy: 'Clean white spaces combined with purple badges to represent professional trust.',
      impact: 'On-demand service booking rates increased by 40%.',
      liveUrl: 'https://thehandyman.com.pk',
      serviceSlug: 'branding',
      beforeState: 'Offline calls only, with no online brand footprint or scheduling tool.',
      afterState: 'Comprehensive service booking hub supporting immediate dispatch booking.'
    }
  },
  {
    id: 8,
    title: 'maktabaquddusia.com',
    slug: 'maktabaquddusia',
    category: 'Publishing / Books',
    filter: 'ecommerce',
    description: 'Historical book publisher and ecommerce bookstore.',
    techStack: ['Shopify', 'Liquid', 'Custom CSS'],
    details: {
      tagline: 'Preserving and sharing theological literature worldwide.',
      overview: 'Online bookstore housing over 5,000 historical and theological volumes with categorization systems.',
      requirements: 'Heavy database categorization, fast checkout, global shipping matrix, and custom UI.',
      solved: 'Built a customized Shopify system, integrated advanced translation filters, and optimized checkout flow.',
      strategy: 'Classic business typography combined with a rich purple border identity.',
      impact: 'Global e-commerce book orders grew by 70%.',
      liveUrl: 'https://maktabaquddusia.com',
      serviceSlug: 'web-dev',
      beforeState: 'Manual physical book orders with high distribution overhead.',
      afterState: 'Full-featured online bookstore supporting secure global payments.'
    }
  },
  {
    id: 9,
    title: 'alghanipublishers.com',
    slug: 'alghanipublishers',
    category: 'Publishing',
    filter: 'corporate',
    description: 'Academic and literary book publishers corporate portal.',
    techStack: ['React', 'CSS Modules'],
    details: {
      tagline: 'A premium platform for authors and academic institutions.',
      overview: 'Corporate site detailing publication contracts, submission portals, and bookstore catalog lookup.',
      requirements: 'Author portal, manuscript file upload, catalog search, and clean design.',
      solved: 'Implemented secure document uploading pipelines, fast catalog search indexing, and clean styles.',
      strategy: 'Highly professional white space combined with corporate royal purple accents.',
      impact: 'Received over 300 manuscript entries online, saving 200 administrative hours.',
      liveUrl: 'https://alghanipublishers.com',
      serviceSlug: 'ui-ux',
      beforeState: 'Physical author manuscript submissions via postal mail.',
      afterState: 'Paperless online submission portal with tracking dashboard.'
    }
  },
  {
    id: 10,
    title: 'sangemeel.shop',
    slug: 'sangemeel',
    category: 'Ecommerce Book Store',
    filter: 'ecommerce',
    description: 'Modern ecommerce store for high-end literature and publications.',
    techStack: ['Shopify', 'Liquid', 'Custom JS'],
    details: {
      tagline: 'Premium e-commerce platform for elite book collectors.',
      overview: 'Sleek custom book store featuring search index, category tagging, and secure checkout system.',
      requirements: 'Rapid search, dynamic reviews, secure shopping cart, and premium visual layout.',
      solved: 'Engineered search query caching, responsive product grids, and custom typography integrations.',
      strategy: 'Luxurious dark purple theme base combined with gold accents on pricing.',
      impact: 'Average customer order values rose by 25%.',
      liveUrl: 'https://sangemeel.shop',
      serviceSlug: 'web-dev',
      beforeState: 'Generic Shopify template that failed to convey corporate prestige.',
      afterState: 'Bespoke custom e-commerce design reflecting rich publishing history.'
    }
  },
  {
    id: 11,
    title: 'walikhankakaro.com',
    slug: 'walikhankakaro',
    category: 'Educational / Personal',
    filter: 'educational',
    description: 'Personal portfolio, research database, and educational blog for a scholar.',
    techStack: ['React', 'TypeScript', 'Markdown'],
    details: {
      tagline: 'Academic research portfolio and educational resource database.',
      overview: 'Scholar portfolio containing research publications, seminar listings, educational resources, and research articles.',
      requirements: 'Advanced tagging, clean reading grid, citation indexing, and fast loading.',
      solved: 'Built a custom markdown publication parser, and implemented search query categorization.',
      strategy: 'Clean white space with purple text styling to mimic premium journal formatting.',
      impact: 'Grew organic reading visits by 150% in 3 months.',
      liveUrl: 'https://walikhankakaro.com',
      serviceSlug: 'web-dev',
      beforeState: 'Unstructured articles shared on public social media streams.',
      afterState: 'Centralized academic archive with searchable publications index.'
    }
  },
  {
    id: 12,
    title: 'Jamals.com',
    slug: 'jamals',
    category: 'Ecommerce / Retail',
    filter: 'ecommerce',
    description: 'High-end corporate retail and premium leather goods digital storefront.',
    techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    details: {
      tagline: 'Luxury retail storefront built for scaling conversions.',
      overview: 'Bespoke e-commerce website for luxury retail accessories, featuring rich product animations and filters.',
      requirements: 'High resolution images optimization, custom cart flows, fast page load speeds.',
      solved: 'Built dynamic loading components, optimized heavy image resolutions, and engineered Stripe integration.',
      strategy: 'Dark theme gradients combined with gold buttons to indicate leather luxury.',
      impact: 'Conversion rate rose from 1.8% to 4.2% on desktop.',
      liveUrl: 'https://Jamals.com',
      serviceSlug: 'web-dev',
      beforeState: 'Legacy static page with no e-commerce backend.',
      afterState: 'Bespoke high-performance store with 3D product previews.'
    }
  },
  {
    id: 13,
    title: 'Holidaysmaker.pk',
    slug: 'holidaysmaker',
    category: 'Travel Agency',
    filter: 'travel',
    description: 'Premium tour reservation and custom holiday booking platform.',
    techStack: ['Shopify', 'Liquid', 'Custom Booking Plugin'],
    details: {
      tagline: 'Luxury travel packaging made effortless.',
      overview: 'Customized e-commerce travel planner providing pre-packaged vacation packages, car bookings, and tours.',
      requirements: 'Multi-tiered checkout, dynamic pricing tables, currency converter, and user accounts.',
      solved: 'Developed customized booking forms, automated email scheduling, and optimized checkout.',
      strategy: 'Clean sky-blue and gold accents representing luxury travel trust.',
      impact: 'Direct bookings surged by 80% with zero phone dispatch overhead.',
      liveUrl: 'https://Holidaysmaker.pk',
      serviceSlug: 'web-dev',
      beforeState: 'Generic travel blog page requiring manual WhatsApp messages.',
      afterState: 'Complete online checkout reservation system for international travel.'
    }
  },
  {
    id: 14,
    title: 'pharmanook.com',
    slug: 'pharmanook',
    category: 'Medical / Pharmacy',
    filter: 'business',
    description: 'Digital medical supplies catalog and healthcare portal.',
    techStack: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    details: {
      tagline: 'Premium healthcare logistics and digital medicine supply.',
      overview: 'Catalog showcasing medical devices, healthcare kits, and supplies with advanced filtering systems.',
      requirements: 'Inquiry cart, detailed specification listings, PDF brochures export, and secure forms.',
      solved: 'Built a clean query panel, secure upload modules, and optimized database structures.',
      strategy: 'Trustworthy dark purple elements combined with clinical blue accents.',
      impact: 'Enterprise medical purchase inquiries increased by 65%.',
      liveUrl: 'https://pharmanook.com',
      serviceSlug: 'web-dev',
      beforeState: 'Scattered catalog lists across offline print sheets.',
      afterState: 'Searchable electronic catalog with instant inquiry cart capability.'
    }
  },
  {
    id: 15,
    title: 'themadhatters.pk',
    slug: 'themadhatters',
    category: 'Fashion / Ecommerce',
    filter: 'ecommerce',
    description: 'Modern luxury fashion store with dynamic filters and cart integration.',
    techStack: ['Shopify', 'Liquid', 'TailwindCSS'],
    details: {
      tagline: 'Bespoke clothing lines and visual luxury.',
      overview: 'Custom e-commerce store presenting designer fashion catalogs with interactive product previews.',
      requirements: 'Ultra-fast cart responsiveness, secure payments, size charts module, and reviews database.',
      solved: 'Engineered custom product cards, size chart modals, and optimized scripts.',
      strategy: 'Clean white spaces with bold headlines to make products stand out.',
      impact: 'Mobile customer checkout conversions increased by 30%.',
      liveUrl: 'https://themadhatters.pk',
      serviceSlug: 'web-dev',
      beforeState: 'Outdated fashion storefront with high mobile abandonment.',
      afterState: 'Elite custom shopping layout designed for mobile responsiveness.'
    }
  },
  {
    id: 16,
    title: 'Roshpack.com',
    slug: 'roshpack',
    category: 'Packaging Business',
    filter: 'business',
    description: 'B2B industrial packaging solutions and product catalog.',
    techStack: ['HTML5', 'Vanilla CSS', 'Javascript'],
    details: {
      tagline: 'Premium corporate packaging and industrial solutions.',
      overview: 'Corporate site detailing box designs, raw paper packaging types, and shipping carton categories.',
      requirements: 'Custom size quote generator, bulk catalog, factory process video support.',
      solved: 'Engineered custom pricing matrices and callback forms.',
      strategy: 'Clean brown, gold and purple corporate color schemes.',
      impact: 'Generated 50+ bulk commercial packaging queries in the first month.',
      liveUrl: 'https://Roshpack.com',
      serviceSlug: 'branding',
      beforeState: 'Simple brochure page lacking catalog structures.',
      afterState: 'Comprehensive B2B product showcase displaying boxes.'
    }
  },
  {
    id: 17,
    title: 'techgamess.com',
    slug: 'techgamess',
    category: 'Gaming / Tech',
    filter: 'news',
    description: 'Modern blog and news media portal covering hardware, gaming, and software reviews.',
    techStack: ['Next.js', 'React', 'Sanity.io'],
    details: {
      tagline: 'Ultra-fast technology blogs and media coverage.',
      overview: 'Tech media platform delivering reviews, news feeds, search indexes, and custom commenting.',
      requirements: 'Sub-second page speeds, CMS management, custom ads placement blocks, mobile performance.',
      solved: 'Connected Next.js to Sanity.io CMS, optimized image sizes, and implemented lazy-loaded ads.',
      strategy: 'Cyberpunk style purple and blue elements on a clean light background.',
      impact: 'Monthly reading visitors rose to 50k, with green Core Web Vitals.',
      liveUrl: 'https://techgamess.com',
      serviceSlug: 'web-dev',
      beforeState: 'Slow WordPress blog layout with massive script bloating.',
      afterState: 'Static-generated Next.js media hub rendering instantly.'
    }
  },
  {
    id: 18,
    title: 'Rehmantravel.com',
    slug: 'rehmantravel',
    category: 'Travel & Tourism',
    filter: 'travel',
    description: 'Large-scale travel booking engine with flight/hotel API integration.',
    techStack: ['React', 'Node.js', 'API Integration', 'Redux'],
    details: {
      tagline: 'Global flight and hotel booking portal for elite travelers.',
      overview: 'Travel booking engine integrating API connections to multiple flight channels and hotel databases.',
      requirements: 'API data caching, currency calculators, filter panels, secure checkout pages.',
      solved: 'Implemented flight database querying queues, customized UI filters, and reduced API call times.',
      strategy: 'Trustworthy corporate dark layouts with purple headers.',
      impact: 'Daily ticket sales increased by 30% due to flight searching speeds.',
      liveUrl: 'https://Rehmantravel.com',
      serviceSlug: 'web-dev',
      beforeState: 'Slow travel agent site with frequent flight price timeouts.',
      afterState: 'Fast travel aggregator showing flight schedules.'
    }
  },
  {
    id: 19,
    title: 'collectionprestige.nl',
    slug: 'collectionprestige',
    category: 'Luxury Ecommerce',
    filter: 'ecommerce',
    description: 'Bespoke perfume and luxury fragrance e-commerce store.',
    techStack: ['Shopify', 'Liquid', 'Custom CSS', 'Framer Motion'],
    details: {
      tagline: 'Elite fragrance boutique storefront.',
      overview: 'High-end perfume shop serving customers in Europe, featuring custom product displays, checkout, and translations.',
      requirements: 'Luxury look, multi-currency support, size selections, high-speed loading.',
      solved: 'Optimized Shopify liquid scripts, integrated custom language flags, and customized design templates.',
      strategy: 'Deep gold and purple accents on white background to feel premium and expensive.',
      impact: 'Sales conversion rates rose by 2.2% across European markets.',
      liveUrl: 'https://collectionprestige.nl',
      serviceSlug: 'web-dev',
      beforeState: 'Simple default Shopify template lacking prestige branding.',
      afterState: 'Luxury boutique custom design displaying perfume details.'
    }
  },
  {
    id: 20,
    title: 'akb134.com',
    slug: 'akb134',
    category: 'Corporate Website',
    filter: 'corporate',
    description: 'Corporate portal for global import-export and logistics.',
    techStack: ['Next.js', 'TypeScript', 'CSS Modules'],
    details: {
      tagline: 'International logistics and shipping infrastructure portal.',
      overview: 'Industrial corporate website providing shipping routes, quote calculations, and global office directories.',
      requirements: 'Clean grid, responsive maps, custom quote request form, speed.',
      solved: 'Engineered a multi-step shipping inquiry form, optimized loading assets, and styled interactive panels.',
      strategy: 'Royal purple borders with gray text grids signaling industrial trust.',
      impact: 'Generated 40% more commercial shipping queries within 90 days.',
      liveUrl: 'https://akb134.com',
      serviceSlug: 'web-dev',
      beforeState: 'Basic static page with broken links and legacy styling.',
      afterState: 'Global logistics presentation portal with modern corporate looks.'
    }
  },
  {
    id: 21,
    title: 'allmobileaccessories.com',
    slug: 'allmobileaccessories',
    category: 'Ecommerce Mobile Store',
    filter: 'ecommerce',
    description: 'Retail and wholesale mobile accessories ecommerce storefront.',
    techStack: ['Shopify', 'Liquid', 'Javascript'],
    details: {
      tagline: 'Your premium digital store for mobile accessories.',
      overview: 'E-commerce platform cataloging thousands of phone cases, chargers, and audio tools with quick filter panels.',
      requirements: 'Fast grid filtering, cart drawer, automated checkout notifications, sizing rules.',
      solved: 'Integrated dynamic catalog tags, optimized cart speed scripts, and integrated reviews plugins.',
      strategy: 'Modern design with clean backgrounds and gold accent highlight checkouts.',
      impact: 'Average customer order size rose by 18% in 60 days.',
      liveUrl: 'https://allmobileaccessories.com',
      serviceSlug: 'web-dev',
      beforeState: 'Legacy retail shop with no digital catalog.',
      afterState: 'Dynamic storefront supporting national online credit checkouts.'
    }
  },
  {
    id: 22,
    title: 'home.psco.com.pk',
    slug: 'homepsco',
    category: 'Corporate / Industrial',
    filter: 'corporate',
    description: 'Corporate site for industrial petrochemical equipment.',
    techStack: ['React', 'CSS Modules', 'TypeScript'],
    details: {
      tagline: 'Petrochemical plant parts and industrial systems.',
      overview: 'Engineering hub showcasing refinery equipment, valve systems, and custom steel works.',
      requirements: 'Technical specifications grid, PDF manuals library, contact forms, secure portal.',
      solved: 'Built a search engine for specs, set up clean document layouts, and optimized page speed.',
      strategy: 'Steel-gray typography with royal purple outlines to indicate engineering trust.',
      impact: 'Enterprise petrochemical bid inquiries increased by 35%.',
      liveUrl: 'https://home.psco.com.pk',
      serviceSlug: 'web-dev',
      beforeState: 'Scattered PDF datasheets and no centralized web catalog.',
      afterState: 'Integrated product specifications directory for industrial buyers.'
    }
  },
  {
    id: 23,
    title: 'pakistanchemical.com',
    slug: 'pakistanchemical',
    category: 'Chemical Industry',
    filter: 'business',
    description: 'B2B chemical catalog and product supply interface.',
    techStack: ['HTML5', 'CSS Modules', 'Javascript'],
    details: {
      tagline: 'Industrial chemical supplies catalog.',
      overview: 'B2B listing showing chemicals, raw plastic supplies, and logistics networks with safety sheets.',
      requirements: 'Safety sheets download library, search grid, query forms.',
      solved: 'Implemented simple database search systems and customized PDF sheets storage paths.',
      strategy: 'Royal purple badges on a clean background indicating industrial credibility.',
      impact: 'Received over 80 commercial chemical quote requests in 45 days.',
      liveUrl: 'https://pakistanchemical.com',
      serviceSlug: 'branding',
      beforeState: 'Legacy static page with complex tables.',
      afterState: 'Sleek searchable catalog database for commercial chemical distribution.'
    }
  },
  {
    id: 24,
    title: 'Wondermindsedu.com',
    slug: 'wondermindsedu',
    category: 'Education',
    filter: 'educational',
    description: 'Interactive preschool and kindergarten learning hub portal.',
    techStack: ['React', 'CSS Modules', 'Framer Motion'],
    details: {
      tagline: 'Nurturing future minds with interactive learning.',
      overview: 'School site detailing curriculum files, teacher lists, online admissions form, and academic calendars.',
      requirements: 'Interactive cards, clean navigation, bright design, secure parent admission form.',
      solved: 'Designed custom cards animations, set up form submission pipelines, and optimized scripts.',
      strategy: 'Clean white spaces with blue and purple accents to feel modern and academic.',
      impact: 'Admissions registrations rose by 60% within the first month.',
      liveUrl: 'https://Wondermindsedu.com',
      serviceSlug: 'web-dev',
      beforeState: 'Paper admissions sheets and zero web portal presence.',
      afterState: 'Secure parent portal supporting direct admissions.'
    }
  },
  {
    id: 25,
    title: 'kakcosmetics.com',
    slug: 'kakcosmetics',
    category: 'Beauty / Cosmetics',
    filter: 'ecommerce',
    description: 'High-end beauty and cosmetic catalog and store.',
    techStack: ['Shopify', 'Liquid', 'Custom CSS'],
    details: {
      tagline: 'Luxury beauty and skincare e-commerce platform.',
      overview: 'Storefront showcasing luxury cosmetics with ingredient directories, custom cart drawers, and checkouts.',
      requirements: 'High resolution images optimization, product review database, custom checkout options.',
      solved: 'Implemented image compressions, reviews plugins, and speed-optimized Shopify templates.',
      strategy: 'Soft gold highlights on a clean white background to feel premium and luxurious.',
      impact: 'Shopping cart abandonment dropped by 28%.',
      liveUrl: 'https://kakcosmetics.com',
      serviceSlug: 'web-dev',
      beforeState: 'Basic retail shop with no online purchasing support.',
      afterState: 'Luxury cosmetic store supporting secure global checkouts.'
    }
  },
  {
    id: 26,
    title: 'lohkotajkedu.com',
    slug: 'lohkotajkedu',
    category: 'Educational Institute',
    filter: 'educational',
    description: 'Government educational board and resource portal.',
    techStack: ['React', 'Node.js', 'PostgreSQL'],
    details: {
      tagline: 'Academic certificates verification and resources database.',
      overview: 'Official institute portal supporting online result checks, course syllabus lists, and school directories.',
      requirements: 'High database security, search query indexing, digital PDF downloads.',
      solved: 'Implemented database schema indexes, customized SQL queries, and integrated secure verification systems.',
      strategy: 'Trustworthy royal purple colors representing official academic authority.',
      impact: 'Over 10,000 student result queries processed in 1 week without timeouts.',
      liveUrl: 'https://lohkotajkedu.com',
      serviceSlug: 'web-dev',
      beforeState: 'Manual queue lines at school boards to verify exam certs.',
      afterState: 'Secure digital lookup engine with instant certificate status check.'
    }
  },
  {
    id: 27,
    title: 'Waqaschamical.com',
    slug: 'waqaschemical',
    category: 'Chemical Industry',
    filter: 'business',
    description: 'Industrial chemicals catalog and supply information.',
    techStack: ['HTML5', 'CSS Modules', 'Javascript'],
    details: {
      tagline: 'Enterprise chemical supply and distribution.',
      overview: 'Industrial corporate site detailing acid types, solvent catalogs, and factory shipment specifications.',
      requirements: 'Catalog categorization, Safety Sheet exports, clean quote forms.',
      solved: 'Created responsive catalog layouts and integrated contact callback scripts.',
      strategy: 'Clean grid layouts with purple badges indicating official industrial trust.',
      impact: 'Generated 40+ bulk commercial purchase calls in 30 days.',
      liveUrl: 'https://Waqaschamical.com',
      serviceSlug: 'branding',
      beforeState: 'Offline product guides with no digital trace.',
      afterState: 'High-end searchable chemical directory for global manufacturers.'
    }
  },
  {
    id: 28,
    title: 'Rukhnews.com',
    slug: 'rukhnews',
    category: 'News & Media',
    filter: 'news',
    description: 'Online newspaper portal and digital media news feed.',
    techStack: ['Next.js', 'React', 'GraphQL', 'Strapi'],
    details: {
      tagline: 'Sub-second real-time news delivery.',
      overview: 'Dynamic digital newspaper offering instant articles load, categorization panels, search index, and media integration.',
      requirements: 'Rapid database querying, CMS management, custom ads slots, mobile layout.',
      solved: 'Structured dynamic Next.js routes, integrated Strapi CMS backend, and optimized loading scripts.',
      strategy: 'Clean typographic layout resembling high-end modern journals with purple badges.',
      impact: 'Organic search reading volume increased by 200% within 90 days.',
      liveUrl: 'https://Rukhnews.com',
      serviceSlug: 'web-dev',
      beforeState: 'Bloated WordPress news layout with 5-second load times.',
      afterState: 'Instant static-generated Next.js news portal.'
    }
  }
];
