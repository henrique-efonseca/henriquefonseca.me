import { ExternalLink } from '../components/ExternalLink';
import { GitHubIcon } from '../components/icons/GitHubIcon';
import { EmailIcon } from '../components/icons/EmailIcon';
import { XIcon } from '../components/icons/XIcon';

import ClevertechLogo from '../images/logos/clevertech.png';
import JojoMobileLogo from '../images/logos/jojomobile.png';

// Projects
import CareplaceLogo from '../images/logos/careplace.svg';
import AstroPiLogo from '../images/emojis/satellite.png';
import CanSatLogo from '../images/emojis/canned_food.png';
import SwiftSuggestLogo from '../images/logos/swiftsuggest.png';
import CarbonTreeLogo from '../images/emojis/deciduous_tree.png';

// Experience
import softwareEngineeringLogo from '../images/emojis/computer.png';
import startupFounderLogo from '../images/emojis/rocket.png';
import associationFounderLogo from '../images/emojis/handshake.png';
import projectManagementLogo from '../images/emojis/clipboard.png';
import networkingEngineeringLogo from '../images/emojis/globe_with_meridians.png';

// SKills
import frontEndLogo from '../images/emojis/art.png';
import backEndLogo from '../images/emojis/brain.png';
import testingLogo from '../images/emojis/microscope.png';
import devOpsLogo from '../images/emojis/gear.png';
import embeddedSystemsLogo from '../images/emojis/hammer_and_wrench.png';
import businessLogo from '../images/emojis/necktie.png';
import financeLogo from '../images/emojis/chart_with_upwards_trend.png';
import marketingLogo from '../images/emojis/megaphone.png';

import { LinkedInIcon } from '../components/icons/LinkedInIcon';
import { sk } from 'date-fns/locale';

export const Name = 'Henrique Fonseca';

export const About = (
  <>
    {`While many might call me a Software Engineer, I consider myself a Problem Solver at heart.
I'm always looking for new challenges and opportunities to learn and grow!`}{' '}
  </>
);
export const AboutExtended = `While many might call me a Software Engineer, I consider myself a Problem Solver at heart.
I thrive on learning about diverse topics and working across various industries. My journey includes: Software Development, Startup Founder, Association Founder, Project Management, Networking Engineering, and more. My passion lies in leveraging technology to drive innovation and create solutions that propel progress and add value to society.
I'm always looking for new challenges and opportunities to learn and grow 😄!`;

export type Project = {
  title: string;
  techStack: string[];
  description: string;
  logo: any;
  link?: {
    label: string;
    href: string;
  };
  liveLink?: {
    label: string;
    href: string;
  };
  readMoreLink?: {
    label: string;
    href: string;
  };
  githubLink?: {
    label: string;
    href: string;
  };
};

export const MyProjects: Project[] = [
  {
    title: 'Careplace',
    techStack: [
      'TypeScript',
      'React',
      'Next.Js',
      'RESTful APIs',
      'Node.js',
      'Express',
      'MongoDB',
      'Docker',
      'AWS',
    ],
    description:
      'Founded a startup with the idea of having an online platform to facilitate families in finding and hiring care services for their senior relatives. The platform, Careplace, offers a range of services including home care, nursing homes, day centers, and medical equipment.',
    logo: CareplaceLogo,
    link: {
      label: 'github.com',
      href: 'https://github.com/careplace-github',
    },
  },

  {
    title: 'Swift Suggest',
    techStack: ['TypeScript', 'AI', 'Browser Extension'],
    description:
      'Swift Suggest is a browser extension that provides real-time, context-aware AI suggestions as you type, helping you write faster and more accurately. Inspired by GitHub Copilot.',
    logo: SwiftSuggestLogo,
    link: {
      label: 'github.com',
      href: 'https://github.com/henrique-efonseca/swift-suggest',
    },
  },

  {
    title: 'AstroPi',
    techStack: ['Python', 'Raspberry Pi', 'Sense HAT'],
    description:
      "Development of an algorithm to collect data for a scientific experiment aimed at obtaining evidence for Galileo's Relativity Theory. The experiment was executed by a Raspberry Pi on the ISS (International Space Station) as part of ESA's (European Space Agency) Astro Pi contest.",
    logo: AstroPiLogo,
    readMoreLink: {
      label: 'Read more',
      href: 'https://henriquefonseca.me/blog/i-literally-sent-an-algorithm-to-space',
    },
    link: {
      label: 'github.com',
      href: 'https://github.com/henrique-efonseca/Astro-Pi',
    },
  },

  {
    title: 'Carbon Tree',
    techStack: ['C/C++', 'Python', 'Arduino'],
    description:
      'Air Quality Monitoring Stations to be implemented in schools in the municipality of Oeiras. InovLabs & Gulbenkian Institute of Science partnership.',
    logo: CarbonTreeLogo,
    readMoreLink: {
      label: 'Read more',
      href: 'https://henriquefonseca.me/blog/air-quality-monitoring-stations',
    },
    link: {
      label: 'github.com',
      href: 'https://github.com/henrique-efonseca/Carbon-Tree',
    },
  },

  {
    title: 'CanSat',
    techStack: ['C/C++', 'Arduino'],
    description:
      "Developed of a satellite the size of a can to monitor air quality for a scientific experiment. This project was conducted under the scope of ESA's (European Space Agency) CanSat contest, where participants design and build a functioning satellite to fit within a soda can.",
    logo: CanSatLogo,
    readMoreLink: {
      label: 'Read more',
      href: 'https://henriquefonseca.me/blog/how-i-developed-a-satellite-the-size-of-a-soda-can',
    },
  },
];

export const SocialMedia = [
  { name: 'Email', link: 'mailto:henrique@fonseca.email', icon: EmailIcon },
  { name: 'LinkedIn', link: 'https://www.linkedin.com/in/henrique-efonseca', icon: LinkedInIcon },
  { name: 'Github', link: 'https://github.com/henrique-efonseca', icon: GitHubIcon },
] as const;

export const Work = [
  {
    company: 'Software Engineering',
    title:
      'Developed several software solutions, including E-Commerce platforms, Marketplaces, ERMs, Dashboards, Auditing Platforms, and more. Worked with algorithms, embedded systems, and IoT devices.',
    logo: softwareEngineeringLogo,
    start: '',
    end: '',
  },
  {
    company: 'Startup Founder',
    title: 'Founded and bootstrapped an impact Startup that was featured at Web Summit.',
    logo: startupFounderLogo,
    start: '',
    end: '',
  },
  {
    company: 'Association Founder',
    title:
      "Established a branch of START in Lisbon (Europe's leading entrepreneurship student initiative) and a branch of Thirst Project (world’s leading youth water activism organization).",
    logo: associationFounderLogo,
    start: '',
    end: '',
  },
  {
    company: 'Project Management',
    title:
      'Managed projects with cross-functional teams, including developers, designers, and marketers.',
    logo: projectManagementLogo,
    start: '',
    end: '',
  },
  {
    company: 'Networking Engineering',
    title: 'Designed and implemented network solutions for small and medium-sized businesses.',
    logo: networkingEngineeringLogo,
    start: '',
    end: '',
  },
] as const;

export const Experience = [
  {
    company: 'Software Engineering',
    title:
      'Developed several software solutions, including E-Commerce platforms, Marketplaces, ERMs, Dashboards, Auditing Platforms, and more. Worked with algorithms, embedded systems, and IoT devices.',
    logo: softwareEngineeringLogo,
    start: '',
    end: '',
  },
  {
    company: 'Startup Founder',
    title: 'Founded and bootstrapped an impact Startup that was featured at Web Summit.',
    logo: startupFounderLogo,
    start: '',
    end: '',
  },
  {
    company: 'Association Founder',
    title:
      "Established a branch of START in Lisbon (Europe's leading entrepreneurship student initiative) and a branch of Thirst Project (world’s leading youth water activism organization).",
    logo: associationFounderLogo,
    start: '',
    end: '',
  },
  {
    company: 'Project Management',
    title:
      'Managed projects with cross-functional teams, including developers, designers, and marketers.',
    logo: projectManagementLogo,
    start: '',
    end: '',
  },
  {
    company: 'Networking Engineering',
    title: 'Designed and implemented network solutions for small and medium-sized businesses.',
    logo: networkingEngineeringLogo,
    start: '',
    end: '',
  },
] as const;

export const Skills = [
  {
    type: 'Frontend',
    logo: frontEndLogo,
    skills: [
      'HTML',
      'CSS',
      'JavaScript / TypeScript',
      'React',
      'Next.js',
      'Angular',
      'Material UI',
      'Bootstrap',
      'Tailwind CSS',
      'SASS',
      'Styled Components',
      'Figma',
    ],
  },
  {
    type: 'Backend',
    logo: backEndLogo,
    skills: [
      'Node.js',
      'NestJS',
      'Express',
      'Python',
      'Django',
      'Flask',
      'MongoDB',
      'PostgresSQL',
      'MySQL',
      'Prisma',
      'Mongoose',
      'Redis',
      'RESTful APIs',
    ],
  },
  {
    type: 'Testing',
    logo: testingLogo,
    skills: ['Jest', 'Mocha', 'Chai', 'Cypress', 'Puppeteer', 'Postman', 'Insomnia'],
  },
  {
    type: 'DevOps',
    logo: devOpsLogo,
    skills: [
      'Nginx',
      'Apache',
      'Docker',
      'Kubernetes',
      'AWS',
      'Azure',
      'Google Cloud',
      'CloudFlare',
      'CI/CD',
      'Terraform',
      'Ansible',
      'Jenkins',
      'Shell Scripting',
      'Linux',
      'Prometheus',
      'Grafana',
    ],
  },
  {
    type: 'Embedded Systems',
    logo: embeddedSystemsLogo,
    skills: [
      'C/C++',
      'Python',
      'Arduino',
      'Raspberry Pi',
      'Sense HAT',
      'IoT',
      'Sensors',
      'Actuators',
    ],
  },
  {
    type: 'Networking',
    logo: networkingEngineeringLogo,
    skills: [
      'Subnetting',
      'Routing',
      'Switching',
      'IPAM',
      'DNS Management',
      'Firewalls and Security Groups',
      'VPC',
      'VPN',
      'Load Balancing',
      'CDN ',
      'Network Monitoring and Diagnostics',
      'Container Networking',
    ],
  },
] as const;

export const CompaniesLinks = [
  {
    name: 'VisionMedia',
    link: 'https://www.visionmedia.com/',
  },
  {
    name: 'DKMS',
    link: 'https://www.dkms.org/en',
  },
  {
    name: 'AAA',
    link: 'https://www.aaa.com/',
  },
  {
    name: 'PolskaPress',
    link: 'https://polskapress.pl/pl',
  },
  {
    name: 'Canal Digital',
    link: 'https://www.canaldigital.no/',
  },
] as const;

export const Books = [
  {
    name: 'Bible',
    link: 'https://www.bible.com/bible/111/GEN.INTRO1.NIV',
  },
  {
    name: 'Factfulness',
    link: 'https://a.co/d/7ntKtZq',
  },
  {
    name: 'Sapiens: A Brief History of Humankind by Yuval Noah Harari',
    link: 'https://amzn.to/3k7V8Qw',
  },
  {
    name: 'Shoe Dog: A Memoir by the Creator of Nike by Phil Knight',
    link: 'https://www.amazon.com/Shoe-Dog-Memoir-Creator-Nike-ebook/dp/B0176M1A44',
  },
  {
    name: 'The Black Swan: The Impact of the Highly Improbable by Nassim Nicholas Taleb',
    link: 'https://amzn.to/2NwihaS',
  },
  {
    name: 'Fooled by Randomness: The Hidden Role of Chance in Life and in the Markets by Nassim Nicholas Taleb',
    link: 'https://amzn.to/3kbvaD9',
  },
  {
    name: 'Daily stoic by Ryan Holiday',
    link: 'https://amzn.to/3n8ATuC',
  },
  {
    name: 'A Guide to the Good Life: The Ancient Art of Stoic Joy by William B. Irvine',
    link: 'https://amzn.to/3iuL1ud',
  },
  {
    name: 'Atomic Habits by James Clear',
    link: 'https://amzn.to/3iqimpZ',
  },
] as const;

export const VideosWorthWatching = [
  {
    name: 'Steve Jobs 2005 Stanford Commencement Address',
    link: 'https://www.youtube.com/watch?v=UF8uR6Z6KLc',
  },
  {
    name: 'Falcon Heavy & Starman',
    link: 'https://www.youtube.com/watch?v=A0FZIwabctw',
  },
] as const;

export const Podcasts = [
  {
    name: 'Lex Fridman Podcast',
    link: 'https://www.youtube.com/@lexfridman',
  },
  {
    name: 'Huberman Lab',
    link: 'https://www.youtube.com/@hubermanlab',
  },
  {
    name: 'CdK Podcast',
    link: 'https://www.youtube.com/@CdK_podcast',
  },

  {
    name: 'The Tim Ferriss Show',
    link: 'https://tim.blog/podcast/',
  },

  {
    name: 'The Daily Stoic',
    link: 'https://dailystoic.com/podcast/',
  },

  {
    name: 'My First Million',
    link: 'https://www.youtube.com/@MyFirstMillionPod',
  },

  {
    name: 'The Jordan B. Peterson Podcast',
    link: 'https://www.youtube.com/@JordanBPeterson',
  },
  {
    name: 'The Ground Up Show',
    link: 'https://www.youtube.com/@mattdavella',
  },
] as const;

export const PeopleWorthFollowingOnTwitter = [
  {
    name: 'Jesus Christ',
    link: 'https://www.bible.com/bible/111/GEN.INTRO1.NIV',
  },
  {
    name: 'Steve Jobs',
    link: 'https://en.wikipedia.org/wiki/Steve_Jobs',
  },
  {
    name: 'Elon Musk',
    link: 'https://x.com/elonmusk',
  },
  {
    name: 'Diogo Mónica',
    link: 'https://x.com/diogomonica',
  },
  {
    name: 'Fred Antunes',
    link: 'https://mobile.x.com/realFredAntunes',
  },
  {
    name: 'Miguel Milhão',
    link: 'https://x.com/miguel_milhao',
  },
  {
    name: 'David Goggins',
    link: 'https://x.com/davidgoggins',
  },
  {
    name: 'Cristiano Ronaldo',
    link: 'https://x.com/cristiano',
  },
  {
    name: 'Kobe Bryant',
    link: 'https://x.com/kobebryant',
  },
] as const;

export const Blogs = [
  {
    name: 'Wait but why',
    link: 'https://waitbutwhy.com/',
  },
  {
    name: 'Paul Graham',
    link: 'http://www.paulgraham.com/',
  },
  {
    name: 'Joel Hooks',
    link: 'https://joelhooks.com',
  },
  {
    name: 'David Perell',
    link: 'https://www.perell.com/',
  },
  {
    name: 'Dan Abramov',
    link: 'https://overreacted.io',
  },
  {
    name: 'Lee Robinson',
    link: 'https://leerob.io',
  },
  {
    name: 'Naval Ravikant',
    link: 'https://nav.al/',
  },
] as const;

export const Quotes = [
  {
    content: 'We have two lives, and the second begins when we realize we only have one.',
    author: '― Confucius',
  },
  {
    content: 'The man who moves a mountain begins by carrying away small stones.',
    author: '― Confucius',
  },
  {
    content:
      'The man who asks a question is a fool for a minute, the man who does not ask is a fool for life.',
    author: '― Confucius',
  },
  {
    content:
      "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did so. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
    author: '― Mark Twain',
  },
  {
    content:
      "You have no responsibility to live up to what other people think you ought to accomplish. I have no responsibility to be like they expect me to be. It's their mistake, not my failing.",
    author: '― Mark Twain',
  },
  {
    content:
      'Watch your thoughts, they become your words; watch your words, they become your actions; watch your actions, they become your habits; watch your habits, they become your character; watch your character, it becomes your destiny.',
    author: '― Laozi',
  },
  {
    content: 'If you are going through hell, keep going.',
    author: '― Winston S. Churchill',
  },
  {
    content: 'Attitude is a little thing that makes a big difference.',
    author: '― Winston S. Churchill',
  },
  {
    content:
      'To think is easy. To act is hard. But the hardest thing in the world is to act in accordance with your thinking.',
    author: '― Johann Wolfgang von Goethe',
  },
  {
    content: 'It is not death that a man should fear, but he should fear never beginning to live.',
    author: '― Marcus Aurelius',
  },
  {
    content: 'If it is not right do not do it; if it is not true do not say it.',
    author: '― Marcus Aurelius',
  },
  {
    content:
      'You have power over your mind - not outside events. Realize this, and you will find strength.',
    author: '― Marcus Aurelius',
  },
  {
    content: 'The happiness of your life depends upon the quality of your thoughts.',
    author: '― Marcus Aurelius',
  },
  {
    content:
      'If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment.',
    author: '― Marcus Aurelius',
  },
  {
    content: 'There is no easy way from the earth to the stars',
    author: '― Seneca',
  },
  {
    content: 'We suffer more often in imagination than in reality',
    author: '― Seneca',
  },
  {
    content:
      'The people who are crazy enough to think they can change the world are the ones who do.',
    author: '― Steve Jobs',
  },
  {
    content: 'Stay hungry, stay foolish.',
    author: '― Steve Jobs',
  },
  {
    content:
      'Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.',
    author: '― Steve Jobs',
  },
] as const;

export const Tools = {
  Workstation: [
    {
      title: '14” MacBook Pro, M1 Max, 32GB RAM (2021)',
      description:
        'This laptop is a top-of-the-line machine that can handle virtually any task you throw at it, making it a worthwhile investment for anyone looking for a reliable and powerful laptop that can be used for years.',
      href: 'https://amzn.to/3XkWxhF',
    },
    {
      title: 'Apple Studio Display 5K (Standard Glass)',
      description:
        '5K resolution helps to reduce strain on the eyes and makes it more comfortable to work for long periods of time. Not to mention that it looks great.',
      href: 'https://amzn.to/3NnMlAu',
    },
    {
      title: 'Logitech MX Keys Mini',
      description:
        'Backlit keys, compact design, good battery life and a great typing experience. Matches the space gray color of the laptop almost perfectly.',
      href: 'https://amzn.to/3qSUNQS',
    },
    {
      title: 'Logitech MX Master 3',
      description: "Let's be honest, it just looks great with MX Keys Mini keyboard.",
      href: 'https://amzn.to/3qXIvXl',
    },
    {
      title: 'Apple Magic Trackpad',
      description:
        'Gestures, taps and swipes are something I miss when I work with my laptop closed.',
      href: 'https://amzn.to/3pgETza',
    },
    {
      title: 'Apple Magic Mouse',
      description:
        'Because it looks great and it allows me to post pictures with how badly the charging port is designed.',
      href: 'https://amzn.to/43UuA30',
    },
    {
      title: 'Autonomous ErgoChair Pro',
      description: `If I'm going to slouch in the worst ergonomic position imaginable all day, I might as well do it in an expensive chair.`,
      href: 'https://www.autonomous.ai/office-chairs/ergonomic-chair',
    },
  ],
  Software: [
    {
      title: 'Visual Studio Code',
      description: `I still miss WebStorm but at least VS Code does not consume 1000% CPU when I open it. And to be fair, it's a great editor.`,
      href: 'https://code.visualstudio.com/',
    },
    {
      title: 'iTerm2',
      description: `I'm honestly not even sure what features I get with this that aren't just part of the macOS Terminal but it's what I use.`,
      href: 'https://iterm2.com/',
    },
    {
      title: 'TablePlus',
      description: `Great software for working with databases. Has saved me from building about a thousand admin interfaces for my various projects over the years.`,
      href: 'https://tableplus.com/',
    },
    {
      title: 'Figma',
      description: `I'm not a designer but it allows me to quickly mock up interfaces and play with my ideas. One day I'll learn how to use it properly.`,
      href: 'https://www.figma.com/',
    },
    {
      title: 'Notion',
      description: `I use it for everything. I have a separate workspace for each of my projects and I use it to keep track of my tasks, notes, and ideas.`,
      href: 'https://www.notion.so/',
    },
    {
      title: 'Raycast',
      description: `Window management, quick access to my most used apps, and a bunch of other useful features. I use it every day.`,
      href: 'https://www.raycast.com/',
    },
    {
      title: '1Password',
      description: `Not much to say here. It's a great password manager.`,
      href: 'https://1password.com/',
    },
    {
      title: 'Cron',
      description: `Calendar application done right`,
      href: 'https://cron.com/',
    },
  ],
} as const;
