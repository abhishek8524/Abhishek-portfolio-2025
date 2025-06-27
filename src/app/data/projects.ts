export interface Project {
  title: string;
  description: string;
  tech: string[];
  date: string;
  images: string[]; // multiple image filenames
  github?: string;
  liveDemo?: string;
}

export const PROJECTS: Project[] = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio built with Angular,  Typescript, and Bootstrap. Features dark mode, responsive layout, and animations.',
    tech: ['Angular', 'TypeScript', 'Bootstrap'],
    date: 'June 2025',
    images: ['portfolio-1.jpg', 'portfolio-2.jpg', 'portfolio-3.jpg','portfolio-4.jpg','portfolio-5.jpg'],
    github: 'https://github.com/abhishek8524/Abhishek-portfolio-2025.git',
    liveDemo: 'https://abhish31.dev.fast.sheridanc.on.ca/Angular_App/'
  },
   {
    title: 'Book Inventory App',
    description: 'Java Spring Boot + MySQL full stack inventory management system.',
    tech: ['Java', 'Spring Boot', 'MySQL', 'Thymeleaf'],
    date: 'June 2025',
    images: ['InventoryApp-1.png', 'InventoryApp-2.png'],
    github: 'https://github.com/abhishek8524/BookInventoryApp.git'
  },
  {
    title: 'Spotify Web Clone',
    description: 'A responsive clone of the Spotify web UI using HTML, CSS, and JavaScript.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    date: 'March 2025',
    images: ['Spotify.png'],
    github: 'https://github.com/abhishek8524/Spotify-ClonedVersion.git'
  },
  {
    title: 'Pixel Frame Gallery',
    description: 'Mobile-first responsive image gallery using Tailwind and Bootstrap.',
    tech: ['HTML', 'Bootstrap', 'Tailwind'],
    date: 'Feb 2025',
    images: ['PixelFrame.jpg'],
    github: 'https://github.com/abhishek8524/PixelFrame.git',
    liveDemo: 'https://abhishek8524.github.io/PixelFrame/'
  }
];
