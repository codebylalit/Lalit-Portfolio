import {
  car,
  contact,
  css,
  estate,
  evercore,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  nextjs,
  nodejs,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  cpp,
  shop,
  x,
} from "../assets/icons";
import hashly from "../assets/hashly.png";
import study from "../assets/study.png";
import shortify from "../assets/shortify.png";
import skooty from "../assets/skooty.png";
import lofi from "../assets/lofi.jpg";
import invoicely from "../assets/invoicely.png";
import buildspace from "../assets/buildspace.jpg";
import self from "../assets/self.jpg";
import mynotes from "../assets/mynotes.png";
import nano from "../assets/favicon.png";

/** Default admin password — change in Admin → Settings or portfolio export */
export const DEFAULT_ADMIN_PASSWORD = "portfolio2024";

export const PROJECT_THEMES = [
  "btn-back-orange",
  "btn-back-yellow",
  "btn-back-green",
  "btn-back-blue",
  "btn-back-pink",
  "btn-back-red",
  "btn-back-black",
];

const uid = () =>
  `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 9)}`;

export const getDefaultPortfolioData = () => ({
  meta: {
    version: 1,
    adminPassword: DEFAULT_ADMIN_PASSWORD,
  },
  navbar: {
    firstName: "Lalit",
    lastName: "Kumar",
  },
  hero: {
    stages: [
      {
        id: uid(),
        type: "intro",
        line1: "Hi, I'm",
        name: "Lalit",
        line2: "Aspiring Software Engineer",
      },
      {
        id: uid(),
        type: "cta",
        text: "Here are my skills\nI developed by building my projects",
        buttonText: "Learn more",
        link: "/about",
      },
      {
        id: uid(),
        type: "cta",
        text: "I Did Some Personal Projects.\nCurious about the Projects?",
        buttonText: "Visit my portfolio",
        link: "/about",
      },
      {
        id: uid(),
        type: "cta",
        text: "Need a project done or looking for a dev?\nI'm just a few keystrokes away",
        buttonText: "Let's talk",
        link: "/contact",
      },
    ],
  },
  about: {
    profileMediaType: "embed",
    profileEmbedUrl:
      "https://assets.pinterest.com/ext/embed.html?id=581808845633314049",
    profileEmbedWidth: 345,
    profileEmbedHeight: 295,
    profileImage: "",
    greeting: "Hello, I'm",
    name: "Lalit",
    emoji: "👋",
    bio: "i'm a software engineer who builds immersive and user friendly web applications that users loves.",
    cvLink:
      "https://drive.google.com/file/d/1FO1a2OK85gBeI7tXdEvbfOWHIngEWZXE/view?usp=sharing",
    cvButtonText: "Download CV",
    aboutSocials: [
      {
        id: uid(),
        name: "LinkedIn",
        iconUrl: linkedin,
        link: "https://drive.google.com/file/d/1PAXC7whUvhhT5Ecmg3ZI0NjXd1wdK3em/view?usp=sharing",
      },
      {
        id: uid(),
        name: "GitHub",
        iconUrl: github,
        link: "https://github.com/codebylalit",
      },
    ],
    skillsTitle: "My Skills",
    experienceSectionTitle: "Work Experience.",
    experienceIntroPrefix:
      "As a student i building projects and leveling up my skills ",
    experienceIntroSuffix: ", here is some of my experiences.",
    experienceIntroLinkText: "[Projects]",
    experienceIntroLinkPath: "/projects",
  },
  skills: [
    { id: uid(), imageUrl: css, name: "CSS", type: "Frontend" },
    { id: uid(), imageUrl: html, name: "HTML", type: "Frontend" },
    { id: uid(), imageUrl: javascript, name: "JavaScript", type: "Frontend" },
    { id: uid(), imageUrl: cpp, name: "C++", type: "Frontend" },
    { id: uid(), imageUrl: react, name: "React", type: "Frontend" },
    { id: uid(), imageUrl: express, name: "Express", type: "Backend" },
    { id: uid(), imageUrl: git, name: "Git", type: "Version Control" },
    { id: uid(), imageUrl: github, name: "GitHub", type: "Version Control" },
    { id: uid(), imageUrl: mongodb, name: "MongoDB", type: "Database" },
    { id: uid(), imageUrl: nextjs, name: "Next.js", type: "Frontend" },
    { id: uid(), imageUrl: nodejs, name: "Node.js", type: "Backend" },
    {
      id: uid(),
      imageUrl: tailwindcss,
      name: "Tailwind CSS",
      type: "Frontend",
    },
    { id: uid(), imageUrl: typescript, name: "TypeScript", type: "Frontend" },
  ],
  experiences: [
    {
      id: uid(),
      title: "Software Engineer Intern",
      company_name: "Evercore Digital Solutions",
      location: "Ahmedabad, India",
      iconBg: "#b7e4c7",
      icon: evercore,
      date: "Oct 2025 - Present",
      points: [
        "Developed micro SaaS applications using React, focusing on scalable and user-centric interfaces.",
        "Utilized Cloudflare (Pages, Workers, KV, D1) for backend, hosting, and data management.",
        "Built serverless architecture to handle APIs, database integration, and deployment.",
        "Managed CI/CD pipelines and automated deployment workflows for faster releases.",
        "Used Jira for task management, tracking problem statements, solutions, priorities, and deadlines.",
        "Tracked development time and productivity using Clockify.",
      ],
    },
    {
      id: uid(),
      title: "Software Engineer Fellow",
      company_name: "BuildSpace S5",
      location: "",
      iconBg: "#accbe1",
      icon: buildspace,
      date: "June 2024 - July 2024",
      points: [
        'Developed and deployed "ApplyLog," a robust web application using the MERN stack.',
        "Enabled users to efficiently track job applications, manage tasks, and utilize an interactive calendar.",
        "Integrated event functionality in the calendar and tasks, and designed an analytics tab for insights.",
        "Implemented secure user authentication with JWT tokens and ensured reliable data handling with MongoDB.",
      ],
    },
    {
      id: uid(),
      title: "FrontEnd Development",
      company_name: "Freelance",
      location: "",
      iconBg: "#fbc3bc",
      icon: self,
      date: "Aug 2024 - Sep 2024",
      points: [
        "Led the frontend development of the Osheanic website, incorporating a modern and user-friendly interface.",
        "Implemented personal blogs and messaging features, enhancing user engagement and communication.",
        "Developed custom color theme options, allowing users to personalize their browsing experience.",
        "Ensured full responsiveness and cross-browser compatibility, providing a consistent experience across different devices.",
      ],
    },
  ],
  projectsPage: {
    title: "My",
    titleHighlight: "Projects",
    description:
      "I've embarked on numerous projects, but these are the ones I hold closest to my heart. Many of them are open-source, so if you come across something that piques your interest, feel free to explore the codebase and contribute your ideas for further enhancements. Your collaboration is highly valued!",
    linkLabel: "Live Link",
  },
  projects: [
    {
      id: uid(),
      name: "Skooty",
      description:
        "A ride-sharing platform for apps (React Native, Firebase, Node.js, Google Maps) and web version built with React.",
      link: "https://skooty.live/",
      iconUrl: skooty,
      theme: "btn-back-orange",
    },
    {
      id: uid(),
      name: "Nano Banana",
      description:
        "AI-powered image generation and editing tool built with Google's Gemini API",
      link: "https://nenobanana.site/",
      iconUrl: nano,
      theme: "btn-back-yellow",
    },
    {
      id: uid(),
      name: "Invoicely",
      description:
        "An online invoicing app built with React, Supabase, and TypeScript.",
      link: "https://invoicely-five.vercel.app/",
      iconUrl: invoicely,
      theme: "btn-back-yellow",
    },
    {
      id: uid(),
      name: "Hashly AI",
      description:
        "A social media hashtag generator powered by AI, built with React, Supabase, and TypeScript.",
      link: "https://www.hashlyai.me/",
      iconUrl: hashly,
      theme: "btn-back-green",
    },
    {
      id: uid(),
      name: "My Notes",
      description:
        "A clean, minimalist note-taking app that helps you capture ideas, manage tasks. built with React and Firebase.",
      link: "https://mynote-s.vercel.app/",
      iconUrl: mynotes,
      theme: "btn-back-blue",
    },
    {
      id: uid(),
      name: "Shortify",
      description: "Url shortner app built with React and TypeScript.",
      link: "https://shortifyy.live/",
      iconUrl: shortify,
      theme: "btn-back-yellow",
    },
    {
      id: uid(),
      name: "Solve Buddy",
      description:
        "A collaborative learning platform built with HTML, CSS, and JavaScript.",
      link: "https://solve-buddy.vercel.app/",
      iconUrl: study,
      theme: "btn-back-green",
    },
    {
      id: uid(),
      name: "Lofi Room Alpha",
      description:
        "A relaxing lofi music room experience built with HTML, CSS, and JavaScript.",
      link: "https://lofi-room-alpha.vercel.app/",
      iconUrl: lofi,
      theme: "btn-back-pink",
    },
    {
      id: uid(),
      name: "Calmly AI",
      description:
        "An AI-powered mental wellness app built with React, Firebase, and TypeScript.",
      link: "https://calmly-ai.vercel.app/",
      iconUrl: snapgram,
      theme: "btn-back-orange",
    },
    {
      id: uid(),
      name: "ReelTubeSaver",
      description:
        "Built a web app for downloading YouTube videos, Shorts, and Instagram reels.",
      link: "https://reeltubesaver.vercel.app/",
      iconUrl: snapgram,
      theme: "btn-back-red",
    },
    {
      id: uid(),
      name: "ApplyLog",
      description:
        "A comprehensive web application for organizing and managing job applications with an analytics tab and task management features.",
      link: "https://applylog.vercel.app/",
      iconUrl: summiz,
      theme: "btn-back-blue",
    },
    {
      id: uid(),
      name: "Lucky Fashion Store",
      description:
        "A React Native women's clothing shopping app with secure login, shopping cart, WhatsApp integration, and Firebase backend for real-time data.",
      link: "https://drive.google.com/file/d/1Ow1KAIqOqVWb7RJjiLELb1J4MZqsK1Lu/view",
      iconUrl: shop,
      theme: "btn-back-pink",
    },
    {
      id: uid(),
      name: "Authentication App",
      description:
        "Developed a React application for user authentication and management.",
      link: "https://github.com/codebylalit/Authentication-App",
      iconUrl: threads,
      theme: "btn-back-yellow",
    },
    {
      id: uid(),
      name: "Spotify Clone",
      description:
        "Developed a Spotify Clone using React that replicates the functionality of the Spotify music streaming service. User authentication and authorization with Spotify API.",
      link: "https://github.com/codebylalit/spotify-clone",
      iconUrl: snapgram,
      theme: "btn-back-green",
    },
    {
      id: uid(),
      name: "Sorting Visualizer",
      description:
        "Implemented real-time visualization of sorting processes with Bubble Sort, Selection Sort, and Merge Sort using HTML, CSS, and JavaScript.",
      link: "https://github.com/codebylalit/Sorting-Visualizer",
      iconUrl: estate,
      theme: "btn-back-black",
    },
    {
      id: uid(),
      name: "Github Info Grabber",
      description:
        "An Angular project utilizing the GitHub API to fetch and display user information and repository details.",
      link: "https://github.com/codebylalit/GithubInfoGrabber-SPA-",
      iconUrl: summiz,
      theme: "btn-back-orange",
    },
  ],
  socialLinks: [
    {
      id: uid(),
      name: "LinkedIn",
      iconUrl: linkedin,
      link: "https://www.linkedin.com/in/lalitnamdev",
    },
    {
      id: uid(),
      name: "x",
      iconUrl: x,
      link: "https://x.com/lalitnamdev_",
    },
    {
      id: uid(),
      name: "GitHub",
      iconUrl: github,
      link: "https://github.com/codebylalit",
    },
  ],
  contact: {
    title: "Get in Touch",
    formspreeEndpoint: "https://formspree.io/f/xeolzgvz",
    namePlaceholder: "John",
    emailPlaceholder: "John@gmail.com",
    messagePlaceholder: "Write your thoughts here...",
    submitText: "Submit",
    sendingText: "Sending...",
    successMessage: "Thank you for your message 😃",
    errorMessage: "I didn't receive your message 😢",
  },
  cta: {
    text: "Have a project in mind?",
    textLine2: "Let's build something together!",
    buttonText: "Contact",
    link: "/contact",
  },
  footer: {
    copyrightName: "Lalit",
    year: "2024",
  },
  settings: {
    siteTheme: "light",
  },
});
