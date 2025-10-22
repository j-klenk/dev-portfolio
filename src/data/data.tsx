import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  //BuildingOffice2Icon,
  //CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
//import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
//import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
//import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header3.jpg';
import profilepic from '../images/Klenk_Joshua.jpg';
/*
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import porfolioImage12 from '../images/portfolio/portfolio-12.png';
*/
import porfolioImage14 from '../images/portfolio/portfolio-14.png';
import porfolioImage16 from '../images/portfolio/portfolio-16.png';
import porfolioImage18 from '../images/portfolio/portfolio-18.png';
import porfolioImage20 from '../images/portfolio/portfolio-20.png';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Joshua Klenk - Developer Portfolio.',
  description: "I’m a software developer focusing on gameplay programming, AR experimentation, and interactive systems. I’m currently working toward my B.S. in Computer Science at FDU (GPA 3.6).",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Joshua Klenk`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      I’m a <strong className="text-stone-100">software developer</strong> focusing on
        <strong className="text-stone-100"> gameplay programming</strong>,
        <strong className="text-stone-100"> AR experiments</strong>, and <strong className="text-stone-100">interactive systems</strong>. I’m currently working toward my
        <strong className="text-stone-100"> B.S. in Computer Science at FDU</strong> (GPA 3.6).
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Recently I’ve been working in <strong className="text-stone-100">Unity</strong>, <strong className="text-stone-100">Unreal Engine</strong>, and on an
        <strong className="text-stone-100"> AR project I’m adapting from OpenGL into Unity</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: 'klenk_joshua_resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I’m a developer who spends most of my time building things in Unity and Unreal. 
  I like troubleshooting technical problems, experimenting with AR/VR, and making systems that feel good to use.

  Outside of that, I’m usually learning something new, working on converting my school bus into a camper, or playing guitar.`,

  aboutItems: [
    {label: 'Location', text: 'New Jersey, USA', Icon: MapIcon},
    {label: 'Education', text: 'B.S Computer Science Fairleigh Dickinson University (In Progress)', Icon: AcademicCapIcon},
    {label: 'GPA', text: '3.6', Icon: FlagIcon},
    {label: 'Interests', text: 'Game development, AR, VR, 3D modeling, guitar', Icon: SparklesIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Programming Languages',
    skills: [
      {name: 'C#', level: 8},
      {name: 'C++', level: 6},
      {name: 'Python', level: 4},
    ],
  },
  {
    name: 'Game Development',
    skills: [
      {name: 'Unity (C#)', level: 8},
      {name: 'Unreal Engine (Blueprints)', level: 5},
      {name: 'Gameplay Systems / AI / Animation Controllers', level: 7},
    ],
  },
  {
    name: '3D & Technical Art',
    skills: [
      {name: 'Blender', level: 6},
      {name: 'Maya', level: 5},
      {name: 'Fusion 360 / 3D Printing Design', level: 7},
    ],
  },
  {
    name: 'XR (VR / AR)',
    skills: [
      {name: 'Unity VR (Quest 2, XR Interaction Toolkit)', level: 5},
      {name: 'VR UI / Ray Interaction / Grab Systems', level: 4},
    ],
  },
  {
    name: 'Tools & Workflow',
    skills: [
      {name: 'Git + GitHub', level: 7},
      {name: 'Agile / Scrum', level: 6},
      {name: 'Visual Studio / VS Code', level: 8},
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Stranded - Third Person Zombie Survival',
    description: 'Player controller, Cinemachine camera, animation state machine, and NavMesh enemy AI; core shooting loop in a flooded environment.',
    url: '#', //TODO
    image: porfolioImage14,
  },
  {
    title: 'Environment & Asset Showcase (Unreal + 3ds Max)',
    description: 'Unreal scene lit with Lumen, Sequencer cinematics, and a PBR sword model created in 3ds Max and imported for real-time rendering.',
    url: 'https://youtu.be/tNecUQNlCKk',
    image: porfolioImage16,
  },
  {
    title: 'AR Research — OpenGL → Unity Conversion (FDU)',
    description: 'Ported projection math and rendering alignment to Unity AR Foundation to replicate an OpenGL depth-perception experiment. (In Progress)',
    url: '#', //TODO
    image: porfolioImage18,
  },
  {
    title: 'Text Adventure Engine (C++)',
    description: 'Custom command parser (Verb/Noun, CommandWord/Parser), room navigation, and item handling using modular header/source files. (In Progress)',
    url: 'https://github.com/Boyardee-Bois/BB-TextAdventure',
    image: porfolioImage20,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Expected May 2026',
    location: 'Fairleigh Dickinson University',
    title: 'B.S. Computer Science',
    content: <p>Coursework includes game development, operating systems, software engineering, AR/VR concepts, 
        and 3D modeling/animation.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: '2024 – Present',
    location: 'Personal Project',
    title: 'Unity Developer – Stranded (3rd-Person Zombie Game)',
    content: (
      <p>
        Developing a third-person survival game in Unity using C#. Built player movement, 
        camera systems, animation state machines, and basic enemy AI using NavMesh.
      </p>
    ),
  },
  {
    date: '2024 – Present',
    location: 'Senior Project (FDU)',
    title: 'AR Research Project – OpenGL to Unity Conversion',
    content: (
      <p>
        Adapting an OpenGL-based AR depth perception experiment into Unity with C# and AR Foundation. 
        Focused on camera projection math, rendering alignment, and replicating research behavior in a modern engine.
      </p>
    ),
  },
  {
    date: '2024',
    location: 'Unreal Engine / 3ds Max',
    title: 'Environment & Asset Showcase',
    content: (
      <p>
        Created a small Unreal Engine environment and a 3D sword model using 3ds Max. 
        Used Lumen lighting, Sequencer for cinematic shots, and applied PBR materials for a final rendered scene.
      </p>
    ),
  },
  {
    date: '2024 – Present',
    location: 'C++ Console Project',
    title: 'Text Adventure Engine (In Progress)',
    content: (
      <p>
        Building a text-based adventure game engine in C++ with a custom command parser, 
        room navigation system, item handling, and modular header/source file architecture.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Development Approach',
      text: 'I value clean, maintainable code, thoughtful design, and steady progress toward a working product.',
      //image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'I’m open to connecting about anything related to computer science, programming, or technology; whether it’s projects, ideas, or collaboration opportunities.',
  items: [
    {
      type: ContactType.Email,
      text: 'joshklenk@outlook.com',
      href: 'mailto:joshklenk@outlook.com',
    },
    {
      type: ContactType.Location,
      text: 'New Jersey, U.S.A',
      href: 'https://maps.app.goo.gl/K5VJ3RgWmbachH3B6',
    },
    /*
    {
      type: ContactType.Instagram,
      text: '@tbakerx',
      href: 'https://www.instagram.com/tbakerx/',
    },
    */
    {
      type: ContactType.Github,
      text: 'j-klenk',
      href: 'https://github.com/j-klenk',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/j-klenk'},
  //{label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/josh-klenk/'},
  //{label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  //{label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
