import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BeakerIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
//import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
//import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
//import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header3.jpg';
import profilepic from '../images/KlenkJoshua.jpg';
import porfolioImage14 from '../images/portfolio/portfolio-14.png';
import porfolioImage16 from '../images/portfolio/portfolio-16.png';
import porfolioImage20 from '../images/portfolio/portfolio-20.png';
import haploscopeOverview1 from '../images/research/haploscope-overview-1.jpg';
import haploscopeOverview2 from '../images/research/haploscope-overview-2.jpg';
import haploscopeUnity from '../images/research/haploscope-unity.jpg';
import lensView1 from '../images/research/lens-view-1.jpg';
import lensView2 from '../images/research/lens-view-2.jpg';
import {
  About,
  ContactSection,
  ContactType,
  FeaturedResearch,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Joshua Klenk — Developer Portfolio',
  description:
    'Computer Science senior at Fairleigh Dickinson University. Co-developing a custom AR haploscope entering human subjects trials. Projects in Unity, Unreal, and C++.',
  ogImageUrl: 'https://joshklenk.xyz/og-image.jpg',
  twitterCardType: 'summary_large',
  twitterDomain: 'joshklenk.xyz',
  twitterUrl: 'https://joshklenk.xyz',
  twitterTitle: 'Joshua Klenk — Developer Portfolio',
  twitterDescription:
    'Computer Science senior at FDU. Co-developer of a custom AR haploscope for near-field depth perception research.',
  twitterImageUrl: 'https://joshklenk.xyz/og-image.jpg',
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
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hi, I'm Joshua Klenk`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
         a <strong className="text-stone-100">computer science student</strong> focusing on
        <strong className="text-stone-100"> gameplay programming</strong>,
        <strong className="text-stone-100"> AR experiments</strong>, and{' '}
        <strong className="text-stone-100">interactive systems</strong>. I'm currently working toward my
        <strong className="text-stone-100"> B.S. in Computer Science at Fairleigh Dickinson University</strong>.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Recently I've been working in <strong className="text-stone-100">Unity</strong> for an {' '}
        <strong className="text-stone-100">AR haploscope I'm helping build for a near-field depth perception study</strong>.
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
  description: `I like to spend most of my time building things through code, hardware, or whatever the project calls for. 
                I enjoy troubleshooting technical problems, experimenting with AR/VR, and making systems that feel good to use.`,
  aboutItems: [
    {label: 'Location', text: 'Lebanon, NJ', Icon: MapIcon},
    {label: 'Education', text: 'B.S. Computer Science — FDU (Expected May 2026)', Icon: AcademicCapIcon},
    {label: 'Research', text: 'AR Haploscope — Near-Field Depth Perception', Icon: BeakerIcon},
    {label: 'Interests', text: 'Game development, AR/VR, 3D printing, hardware tinkering, guitar', Icon: SparklesIcon},
  ],
};

/**
 * Skills section — mirrors resume categories
 */
export const skills: SkillGroup[] = [
  {
    name: 'Languages',
    skills: [
      {name: 'C#', level: 8},
      {name: 'C++', level: 7},
      {name: 'Python', level: 6},
      {name: 'SQL', level: 5},
    ],
  },
  {
    name: 'Simulation & XR',
    skills: [
      {name: 'Unity (C#, New Input System)', level: 8},
      {name: 'Unreal Engine', level: 6},
      {name: 'OpenCV', level: 6},
      {name: 'AR/VR Development', level: 7},
    ],
  },
  {
    name: '3D & Visualization',
    skills: [
      {name: 'Blender', level: 7},
      {name: 'Shapr3D', level: 7},
      {name: 'Autodesk', level: 6},
      {name: 'Substance Painter', level: 6},
      {name: 'FBX Pipeline', level: 7},
    ],
  },
  {
    name: 'Tools & Practices',
    skills: [
      {name: 'Git / GitHub', level: 8},
      {name: 'Agile / Scrum', level: 7},
      {name: 'Jira', level: 7},
      {name: 'SOLID / OOP Design', level: 7},
      {name: 'Doxygen', level: 7},
      {name: 'Linux', level: 6},
    ],
  },
];

/**
 * Featured Research — AR Haploscope
 * Rendered at the top of the Portfolio section via <FeaturedResearch />
 */
export const featuredResearch: FeaturedResearch = {
  title: 'AR Haploscope — Near-Field Depth Perception',
  subtitle: 'Collaborative research at the FDU AR/VR Lab',
  status: 'Hardware iteration phase — preparing for human subjects trials',
  description: (
    <>
      <p>
        Co-developing a custom tabletop AR display using collimated and diopter lenses to study
        vergence–accommodation conflict and depth judgment accuracy. The work targets problems directly applicable to
        AR-assisted surgery and precision industrial systems.
      </p>
      <p>
        I engineered the Unity rendering pipeline for stereoscopic stimulus presentation, and built calibration and
        stimuli-alignment tooling in Python with OpenCV. The experimental protocol — measuring depth judgment of
        occluded virtual objects against real-world targets.
      </p>
    </>
  ),
media: [
  {type: 'image', src: haploscopeOverview1, alt: 'Haploscope hardware on the optical bench'},
  {type: 'image', src: haploscopeUnity, alt: 'Unity stereoscopic rendering pipeline — left and right eye displays'},
  {type: 'image', src: lensView1, alt: 'Close-up of the collimated lens assembly with stimulus visible'},
  {type: 'video', src: '/research/stimuli-detection.mp4', poster: lensView1, alt: 'Stimulus detection demonstration'},
  {type: 'image', src: haploscopeOverview2, alt: 'Reverse angle of the haploscope setup'},
  {type: 'image', src: lensView2, alt: 'Front-on view of the stimulus through the beam splitter'},
],
  links: [
    {
      text: 'View research code',
      href: 'https://github.com/ARVRLab/AR-Depth_Perception_Study_UNITY',
      primary: true,
    },
    {text: 'FDU AR/VR Lab', href: 'https://github.com/ARVRLab'},
  ],
  autoAdvanceMs: 5000,
};

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'BB-TextAdventure',
    subtitle: 'C++ · Agile',
    description:
      'Scrum Master for a 5-person team. SOLID architecture, Command-pattern input dispatch, 175+ commits, full Doxygen coverage.',
    url: 'https://github.com/Boyardee-Bois/BB-TextAdventure',
    image: porfolioImage20,
    tags: ['C++', 'SOLID', 'Agile', 'Doxygen'],
  },
  {
    title: 'Stranded',
    subtitle: 'Unity · Solo',
    description:
      'Third-person zombie survival in Unity: player controller with Cinemachine, animation state machine, NavMesh enemy AI, and core shooting loop.',
    url: '#',
    image: porfolioImage14,
    tags: ['Unity', 'C#', 'NavMesh', 'Cinemachine'],
  },
  {
    title: 'Environment Showcase',
    subtitle: 'Unreal · 3ds Max',
    description:
      'Lumen-lit Unreal environment with Sequencer cinematics and a PBR sword modeled in 3ds Max and brought in through the FBX pipeline.',
    url: 'https://youtu.be/tNecUQNlCKk',
    image: porfolioImage16,
    tags: ['Unreal', 'Lumen', '3ds Max', 'PBR'],
  },
];

/**
 * Resume section
 */
export const education: TimelineItem[] = [
  {
    date: 'Expected May 2026',
    location: 'Fairleigh Dickinson University — Florham Park, NJ',
    title: 'B.S. Computer Science — GPA 3.6, Honors List',
    content: (
      <p>
        Relevant coursework: Software Engineering, Computer Architecture, Operating Systems, Data Structures &
        Algorithms, Database Development, AR/VR, 3D Game Creation, Linear Algebra, Physics II.
      </p>
    ),
  },
  {
    date: '2018 – 2023',
    location: 'Raritan Valley Community College — Branchburg, NJ',
    title: 'A.S. Information Technology — GPA 3.55, Dean\u2019s List',
    content: <p>Foundations in programming, systems, and networking.</p>,
  },
];

/*
export const experience: TimelineItem[] = [
  {
    date: 'In Progress',
    location: 'FDU AR/VR Lab — Research',
    title: 'Co-Developer — AR Haploscope, Depth Perception Study',
    content: (
      <p>
        Built Unity stereoscopic rendering pipeline and Python/OpenCV calibration tools for a custom tabletop AR
        display studying near-field depth perception. Designed IRB-compliant experimental protocols; human subjects
        testing phase beginning within two weeks.
      </p>
    ),
  },
  {
    date: 'Fall 2025',
    location: 'BB-TextAdventure — Team Project',
    title: 'Scrum Master & Engine Developer (C++)',
    content: (
      <p>
        Led a 5-person team over one semester (175+ commits). Facilitated 3x/week standups, managed the Jira backlog,
        and ran sprint planning and retrospectives. Architected a SOLID-compliant engine with a hash-map-driven
        Command pattern for input dispatch and a coordinate-keyed level loading system. Enforced Doxygen and coding
        standards across the codebase.
      </p>
    ),
  },
  {
    date: '2024 – Present',
    location: 'Personal Project',
    title: 'Stranded — Unity Gameplay Developer',
    content: (
      <p>
        Solo-developed a third-person zombie survival game in Unity: player movement, Cinemachine camera, animation
        state machines, NavMesh AI, and the core shooting loop.
      </p>
    ),
  },
  {
    date: '2024',
    location: 'Unreal Engine / 3ds Max',
    title: 'Environment & Asset Showcase',
    content: (
      <p>
        Built a small Unreal environment using Lumen lighting and Sequencer cinematics, featuring a PBR sword modeled
        in 3ds Max and imported through a standard FBX pipeline.
      </p>
    ),
  },
];
*/

/**
 * Contact section
 */
export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description:
    'I\u2019m open to connecting about research, game engine work, AR/VR, or collaboration on technical projects.',
  items: [
    {
      type: ContactType.Email,
      text: 'j-klenk@outlook.com',
      href: 'mailto:j-klenk@outlook.com',
    },
    {
      type: ContactType.Location,
      text: 'Lebanon, NJ, U.S.A',
      href: 'https://maps.app.goo.gl/K5VJ3RgWmbachH3B6',
    },
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
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/j-klenk/'},
];
