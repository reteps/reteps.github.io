import type { ImageMetadata } from 'astro';

import Image1 from '$assets/showcase/uiuc-apartments.png';
import Image2 from '$assets/showcase/website.png';
import Image3 from '$assets/showcase/pwnybot.png';
import Image4 from '$assets/showcase/pwnyctf.png';
import Image5 from '$assets/showcase/kotahi.png';
import Image6 from '$assets/showcase/battelle.png';
import Image7 from '$assets/showcase/fifth-eye.png';
import Image8 from '$assets/showcase/ctftime.png';

export interface ShowcaseItem {
  title: string;
  description: string;
  image: ImageMetadata;
  source?: string;
  link?: string;
  languages: string[];
  technologies: string[];
  categories: string[];
}

export const content: ShowcaseItem[] = [
  {
    title: 'uiuc-apartments.com',
    description:
      'A website that helps students find apartments near the University of Illinois at Urbana-Champaign. Wrote a web scraper for around 15 rental agencies on campus. Fetch new listings every day and provide a frontend for students to search for apartments.',
    image: Image1,
    source: 'https://github.com/uiuc-apartments/uiuc-apartments.com',
    link: 'https://www.uiuc-apartments.com/',
    languages: ['Javascript', 'Python'],
    technologies: ['Typescript', 'Vue', 'Google Cloud', 'TailwindCSS'],
    categories: ['Projects']
  },
  {
    title: 'Personal website',
    description:
      'Built with Astro and TailwindCSS. Blog uses Svelte islands. Hosted on Github Pages.',
    image: Image2,
    source: 'https://github.com/reteps/reteps.github.io',
    link: 'https://stenger.io',
    languages: ['Javascript'],
    technologies: ['Typescript', 'Svelte', 'Astro', 'TailwindCSS', 'Github Pages'],
    categories: ['Projects']
  },
  {
    title: 'CTF Discord Bot: pwnybot',
    description:
      'A tool for the cybersecurity club @ UIUC to manage CTFs, and perform other useful actions. Autodeployed with Github Actions.',
    image: Image3,
    languages: ['Python'],
    technologies: ['CI/CD', 'Discord.py', 'Docker'],
    source: 'https://github.com/sigpwny/pwnybot',
    categories: ['Projects']
  },
  {
    title: 'CTF Platform: PwnyCTF',
    description:
      'An in-house CTF platform for the cybersecurity club @ UIUC. Driven by a Github Action that redeploys the latest challenges to the website and challenge infrastructure to the SIGPwny server. Hooks into Discord using webhooks.',
    image: Image4,
    source: 'https://github.com/sigpwny/CTFd',
    link: 'https://ctf.sigpwny.com',
    languages: ['Python', 'Javascript'],
    technologies: ['Docker', 'CI/CD', 'Django', 'Bootstrap 5'],
    categories: ['Projects']
  },
  {
    title: 'Kotahi: Manuscript Publishing Platform (Fall 2021)',
    description:
      'Worked with the nonprofit <a href="https://coko.foundation">Coko</a> to improve their open-source manuscript publishing system. Refactored the dashboard page into an extensible table system, and hooked up the tables with GraphQL to Postgres for filtering and sorting.',
    image: Image5,
    source: 'https://gitlab.coko.foundation/kotahi/kotahi/-/commits/peer-review-dashboard',
    link: 'https://elife.kotahi.cloud',
    languages: ['Javascript'],
    technologies: ['Node.js', 'React', 'GraphQL', 'Postgres', 'Docker'],
    categories: ['Previous Work']
  },
  {
    title: 'Cybersecurity Intern @ Battelle (Summer 2021)',
    description:
      'Reverse-engineered a closed-source ARM-based modem and modified functionality in order to exfiltrate valuable cellular data typically disarded. Wrote an emulator for a .NET debugging tool and wrote Ghidra plugins to aid in reverse-engineering.',
    image: Image6,
    languages: ['Assembly', 'C', 'Python'],
    technologies: ['Ghidra', 'Android'],
    categories: ['Previous Work', 'Cybersecurity']
  },
  {
    title: 'Full-Stack Intern @ Fifth Eye (Summer 2020)',
    description:
      'Interned at a medical technology startup, creating a webapp to manage hospital deployments. It performs AWS provisioning and displays AWS CloudWatch statistics. Deployment management triggers <a href="https://circleci.com/">CircleCI</a> actions.',
    image: Image7,
    languages: ['Javascript'],
    technologies: ['Node.js', 'React', 'AWS', 'MaterialUI', 'CI/CD'],
    categories: ['Previous Work']
  },
  {
    title: 'CTF Player for SIGPwny',
    description:
      'Compete in cybersecurity "Capture the Flag" competitions at a high level. Am a key team player, especially focused on reverse-engineering. Ranked 47th in the world out of 10000+ teams, and the second best US collegiate team.',
    categories: ['Cybersecurity'],
    languages: [],
    image: Image8,
    link: 'https://ctftime.org/team/27736',
    technologies: [
      'Organizer - UIUCTF 2020/2021/2022',
      '1st - Club CTF 2021',
      '5th - CSAW Finals 2022',
      '2nd - BuckeyeCTF 2022'
    ]
  }
];
