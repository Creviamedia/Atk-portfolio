export interface Project {
  slug: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  year: string;
  image: string;
  color: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface Service {
  title: string;
  description: string;
  features: string[];
  number: string;
  deliverables?: string[];
}

export interface Location {
  city: string;
  coordinates: string;
}

export const projects: Project[] = [

  {
    slug: 'velocity-runner',
    title: 'Velocity Runner',
    category: 'Velocity Runner',
    tags: ['Design', 'Development', 'Performance'],
    description:
      'Sporty low-top sneakers enhanced with lightweight, aerodynamic influences. Features refined sole detailing and performance-driven construction.',
    year: '2024',
    image: '/videos/images/DSC01918.jpg',
    color: '#1a1a1a',
  },

  {
    slug: 'rebel-deck',
    title: 'Rebel Deck',
    category: 'Rebel Deck',
    tags: ['Youth Culture', 'Skater', 'Collaboration'],
    description:
      'A skater-inspired sneaker featuring worn textures, streetwear influence, and bold youth-culture aesthetics.',
    year: '2024',
    image: '/videos/images/DSC01918.jpg',
    color: '#1a1a1a',
  },

  {
    slug: 'texture-theory',
    title: 'Texture Theory',
    category: 'Texture Theory',
    tags: ['Material', 'Texture', 'Detail'],
    description:
      'An exploration of premium leather textures and layered surface finishes focused on luxury footwear design.',
    year: '2024',
    image: '/videos/images/DSC01919.jpg',
    color: '#1a1a1a',
  },

  {
    slug: 'terra-clog',
    title: 'Terra Clog',
    category: 'Terra Clog',
    tags: ['Functional', 'Lightweight', 'Outdoor'],
    description:
      'A lightweight outdoor clog designed with comfort-focused construction and durable everyday utility.',
    year: '2023',
    image: '/videos/images/DSC01930.jpg',
    color: '#1a1a1a',
  },

  {
    slug: 'design-pipeline',
    title: 'Design Pipeline',
    category: 'Design Pipeline',
    tags: ['Process', 'Technical', 'Quality'],
    description:
      'Documenting the layered assembly workflow and technical production process behind modern footwear construction.',
    year: '2024',
    image: '/videos/images/DSC01937.jpg',
    color: '#1a1a1a',
  },

  {
    slug: 'future-form',
    title: 'Future Form',
    category: 'Future Form',
    tags: ['Heritage', 'Basketball', 'Storytelling'],
    description:
      'A conceptual footwear study inspired by basketball heritage and expressive hand-sketched storytelling.',
    year: '2023',
    image: '/videos/images/DSC01956.jpg',
    color: '#1a1a1a',
  },

  {
    slug: 'rapid-form',
    title: 'Rapid Form',
    category: 'Rapid Form',
    tags: ['Form', 'Technical', 'Structure'],
    description:
      'Exploring footwear proportions, upper tensioning, and construction refinement during prototype development.',
    year: '2024',
    image: '/videos/images/DSC01967.jpg',
    color: '#1a1a1a',
  },

  {
    slug: 'precision-build',
    title: 'Precision Build',
    category: 'Precision Build',
    tags: ['QC', 'Production', 'Standards'],
    description:
      'Factory-level quality review focused on precision craftsmanship and brand-specific manufacturing standards.',
    year: '2024',
    image: '/videos/images/DSC01971.jpg',
    color: '#1a1a1a',
  },

  {
    slug: 'aura-sole',
    title: 'Aura Sole',
    category: 'Aura Sole',
    tags: ['Craftsmanship', 'Traditional', 'Modern'],
    description:
      'A women’s footwear collection blending embellished craftsmanship with contemporary silhouettes.',
    year: '2024',
    image: '/videos/images/DSC06581.jpg',
    color: '#1a1a1a',
  },

  {
    slug: 'sole-theory',
    title: 'Sole Theory',
    category: 'Sole Theory',
    tags: ['Design', 'Lifestyle', 'Draft'],
    description:
      'Developing modern lifestyle silhouettes balancing visual sharpness with everyday comfort.',
    year: '2024',
    image: '/videos/images/DSC06584.jpg',
    color: '#1a1a1a',
  },

  {
    slug: 'engineered-fit',
    title: 'Engineered Fit',
    category: 'Engineered Fit',
    tags: ['Technical', 'Blueprint', 'Sole'],
    description:
      'Detailed technical development focused on high-performance sole structures and precision specifications.',
    year: '2024',
    image: '/videos/images/DSC06637.jpg',
    color: '#1a1a1a',
  },

  {
    slug: 'vision-culture',
    title: 'Vision Culture',
    category: 'Vision Culture',
    tags: ['Color', 'Material', 'Strategy'],
    description:
      'Curating seasonal material palettes and strategic visual direction for future footwear collections.',
    year: '2024',
    image: '/videos/images/DSC06645.jpg',
    color: '#1a1a1a',
  },

  {
    slug: 'signature-form',
    title: 'Signature Form',
    category: 'Signature Form',
    tags: ['Branding', 'Detail', 'Identity'],
    description:
      'Exploring subtle branding placements that strengthen product identity without overpowering the design.',
    year: '2024',
    image: '/videos/images/DSC06649.jpg',
    color: '#1a1a1a',
  },

  {
    slug: 'evolution-series',
    title: 'Evolution Series',
    category: 'Evolution Series',
    tags: ['Heritage', 'Modern', 'Update'],
    description:
      'Reimagining heritage-inspired footwear using updated materials and modern construction methods.',
    year: '2024',
    image: '/videos/images/DSC06676.jpg',
    color: '#1a1a1a',
  },

  {
    slug: 'innovation-lab',
    title: 'Innovation Lab',
    category: 'Innovation Lab',
    tags: ['Tech', 'Comfort', 'Performance'],
    description:
      'Testing advanced cushioning systems and high-rebound materials for enhanced daily performance.',
    year: '2024',
    image: '/videos/images/DSC06686.jpg',
    color: '#1a1a1a',
  },

  {
    slug: 'conscious-craft',
    title: 'Conscious Craft',
    category: 'Conscious Craft',
    tags: ['Green', 'Recycled', 'Eco'],
    description:
      'Integrating recycled materials and sustainable production practices into modern footwear manufacturing.',
    year: '2024',
    image: '/videos/images/DSC06692.jpg',
    color: '#1a1a1a',
  },

  {
    slug: 'final-iteration',
    title: 'Final Iteration',
    category: 'Final Iteration',
    tags: ['Sample', 'Final', 'Sign-off'],
    description:
      'Final prototype evaluation and refinement before transitioning into commercial production.',
    year: '2024',
    image: '/videos/images/DSC06697.jpg',
    color: '#1a1a1a',
  },
];

export const services: Service[] = [
  {
    title: '01 — Brand Strategy & Identity',
    description: 'Most footwear brands lose on positioning before they lose on product. We help you define what your brand stands for, who it stands for, and how that translates into product decisions that build long-term equity.',
    features: ['Competitive Analysis', 'Consumer Insight', 'Product Narrative', 'Brief Execution'],
    deliverables: ['Brand DNA document', 'Product positioning framework', 'Seasonal narrative direction', 'Competitive landscape review'],
    number: '01',
  },
  {
    title: '02 — Footwear Design',
    description: 'From hand sketches to final tech packs, we design footwear that is commercially grounded and brand-consistent. Our design process is rooted in trend intelligence, material knowledge, and a deep understanding of consumer interaction.',
    features: ['Athletic', 'Lifestyle', 'Fashion', 'Casual', 'Women\'s Occasionwear'],
    deliverables: ['Concept sketches', 'Refined design renders', 'Colourway development', 'Tech packs', 'Material specifications'],
    number: '02',
  },
  {
    title: '03 — Product Development',
    description: 'The gap between a great design and a great product is development. We work alongside your sourcing and factory teams from the earliest stage — clarifying construction, resolving material constraints, and ensuring the brief is understood.',
    features: ['Construction Guidance', 'Last Selection', 'Material Sourcing', 'Factory Liaison'],
    deliverables: ['Construction guidance', 'Last selection', 'Material sourcing input', 'Factory liaison', 'Development milestone tracking'],
    number: '03',
  },
  {
    title: '04 — Manufacturing Oversight & QC',
    description: 'We manage the final stretch — the stage where most design briefs get diluted. We conduct factory reviews, assess production samples against the original specification, and ensure the product leaves the factory as intended.',
    features: ['Factory Reviews', 'Sample Assessment', 'Specification Compliance', 'Final Sign-off'],
    deliverables: ['Sample review', 'QC checklist management', 'Factory audit support', 'Final approval sign-off'],
    number: '04',
  },
];

export const brands = [
  'Free People', 'Firetrap', 'Carlton London', 'Hudson London', 'DoubleU', 'Red Tape',
  'Ben Sherman', 'Westside', 'FILA', 'Lee Cooper', 'Original Penguin', 'Farah',
  'The Souled Store', 'BIBA'
];

export const locations: Location[] = [
  {
    city: 'London',
    coordinates: '51.5072 N, 0.1276 W',
  },
  {
    city: 'New Delhi',
    coordinates: '28.6139 N, 77.2090 E',
  },
];

export const pillars = [
  {
    number: '01',
    title: '25 Years. Two Markets. One Language — Footwear.',
    description: 'From heritage-driven labels on UK high streets to India\'s fastest-growing fashion brands, we understand what sells on both sides of the world. That dual-market fluency is a competitive edge you won\'t find in a generalist studio.'
  },
  {
    number: '02',
    title: 'We Don\'t Just Design Shoes. We Build the Story the Consumer Buys.',
    description: 'A performance sole carries technical credibility. A cultural reference makes a silhouette collectable. A material choice signals the brand\'s values before a word is read. Every decision — stitch, last, color — is a brand decision.'
  },
  {
    number: '03',
    title: 'From the First Sketch to the Factory Floor.',
    description: 'We stay in it — through development, sourcing, and QC. Because a great concept that falls apart in production isn\'t design. It\'s just drawing. We partner with factories and developers from day one, so the final product delivers on what the first sketch promised.'
  }
];

export const testimonials = [
  {
    name: 'Verrucci Lorenzo',
    role: 'Director, Indian Operations — Fin Project',
    quote: 'Tawwab is an all-round Shoes Designer and Product Developer. He is updated with the latest international trends and knows India\'s market requirements quite well. Making shoes requires passion, knowledge, skills and dedication — and he has all the magic ingredients.'
  },
  {
    name: 'Satyam Srivastava',
    role: 'Sr. Consultant — FDDI, Ministry of Commerce, Govt. of India',
    quote: 'I have known Tawwab Khan since 1995. He is an illustrious alumnus of FDDI, setting many milestones in the field of Design. I have found him a highly disciplined, intelligent, committed man who is always in the pursuit of excellence.'
  },
  {
    name: 'Deepak Budhiraja',
    role: 'CEO — Roger Industries Limited',
    quote: 'Mr. Abdul Tawwab is very creative and energetic. He is always in search of new ideas and applications. We are impressed by his different perspective of looking at things. We wish him all the very best for his new venture.'
  },
  {
    name: 'Antony Nathan',
    role: 'MD — Chapters Brand, UK Limited',
    quote: 'Abdul worked with me directly as one of the key designers. A creative, commercial and effective designer and range builder, able to work directly with clients, managing expectations and connecting with their business.'
  }
];
