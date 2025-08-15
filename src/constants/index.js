import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    cpp,
    yt,
    shop,
    x
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
     {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: cpp,
        name: "C++",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
   
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
  {
    title: "Software Engineer Fellow",
    company_name: "BuildSpace S5",
    iconBg: "#accbe1",
    date: "June 2024 - July 2024",
    points: [
      'Developed and deployed "ApplyLog," a robust web application using the MERN stack.',
      "Enabled users to efficiently track job applications, manage tasks, and utilize an interactive calendar.",
      "Integrated event functionality in the calendar and tasks, and designed an analytics tab for insights.",
      "Implemented secure user authentication with JWT tokens and ensured reliable data handling with MongoDB.",
    ],
  },
  {
    title: "FrontEnd Development",
    company_name: "Contract",
    iconBg: "#fbc3bc",
    date: "Aug 2024 - Sep 2024",
    points: [
      "Led the frontend development of the Osheanic website, incorporating a modern and user-friendly interface.",
      "Implemented personal blogs and messaging features, enhancing user engagement and communication.",
      "Developed custom color theme options, allowing users to personalize their browsing experience.",
      "Ensured full responsiveness and cross-browser compatibility, providing a consistent experience across different devices.",
    ],
  },
];


export const socialLinks = [
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/lalitnamdev",
  },
  {
    name: "x",
    iconUrl: x,
    link: "https://x.com/lalitnamdev_",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/codebylalit",
  },
];

  export const projects = [
  {
    name: "Skooty",
    description: "A ride-sharing platform for apps (React Native, Firebase, Node.js, Google Maps) and web version built with React.",
    link: "https://skooty.live/",
    iconUrl: "/path/to/skooty-icon.png",
    theme: "btn-back-blue" // or any theme class you already use
  },
  {
    name: "Solve Buddy",
    description: "A collaborative learning platform built with HTML, CSS, and JavaScript.",
    link: "https://solve-buddy.vercel.app/",
    iconUrl: "/path/to/solvebuddy-icon.png",
    theme: "btn-back-green"
  },
  {
    name: "Invoicely",
    description: "An online invoicing app built with React, Supabase, and TypeScript.",
    link: "https://www.invoicely.me/",
    iconUrl: "/path/to/invoicely-icon.png",
    theme: "btn-back-yellow"
  },
  {
    name: "Hashly AI",
    description: "A social media hashtag generator powered by AI, built with React, Supabase, and TypeScript.",
    link: "https://www.hashlyai.me/",
    iconUrl: "/path/to/hashlyai-icon.png",
    theme: "btn-back-purple"
  },
  {
    name: "Shortify",
    description: "Url shortner app built with React and TypeScript.",
    link: "https://vibelyai.vercel.app/",
    iconUrl: "/path/to/vibelyai-icon.png",
    theme: "btn-back-red"
  },
  {
    name: "Lofi Room Alpha",
    description: "A relaxing lofi music room experience built with HTML, CSS, and JavaScript.",
    link: "https://lofi-room-alpha.vercel.app/",
    iconUrl: "/path/to/lofiroom-icon.png",
    theme: "btn-back-pink"
  },
  {
    name: "Calmly AI",
    description: "An AI-powered mental wellness app built with React, Firebase, and TypeScript.",
    link: "https://calmly-ai.vercel.app/",
    iconUrl: "/path/to/calmlyai-icon.png",
    theme: "btn-back-orange"
  },
  {
    iconUrl: snapgram, // replace with actual icon URL
    theme: "btn-back-pink",
    name: "CalmlyAI ",
    description:
      "AI chatbot focused on mental health support and wellness. Tuned the chatbot using Gemini API for mental health topics, improving accuracy by 50%",
    link: "https://lalit-kumar-mental-wellness.vercel.app/",
  },
  {
    iconUrl: snapgram, // replace with actual icon URL
    theme: "btn-back-red",
    name: "ReelTubeSaver",
    description:
      "Built a web app for downloading YouTube videos, Shorts, and Instagram reels.",
    link: "https://reeltubesaver.vercel.app/",
  },
  {
    iconUrl: summiz, // replace with actual icon URL
    theme: "btn-back-blue",
    name: "ApplyLog",
    description:
      "A comprehensive web application for organizing and managing job applications with an analytics tab and task management features.",
    link: "https://applylog.vercel.app/",
  },
  {
    iconUrl: shop, // replace with actual icon URL
    theme: "btn-back-pink",
    name: "Lucky Fashion Store",
    description:
      "A React Native women’s clothing shopping app with secure login, shopping cart, WhatsApp integration, and Firebase backend for real-time data.",
    link: "https://drive.google.com/file/d/1Ow1KAIqOqVWb7RJjiLELb1J4MZqsK1Lu/view",
  },
  {
    iconUrl: threads,
    theme: "btn-back-yellow",
    name: "Authentication App",
    description:
      "Developed a React application for user authentication and management.",
    link: "https://github.com/codebylalit/Authentication-App",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-green",
    name: "Spotify Clone",
    description:
      "Developed a Spotify Clone using React that replicates the functionality of the Spotify music streaming service. User authentication and authorization with Spotify API.",
    link: "https://github.com/codebylalit/spotify-clone",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Sorting Visualizer",
    description:
      "Implemented real-time visualization of sorting processes with Bubble Sort, Selection Sort, and Merge Sort using HTML, CSS, and JavaScript.",
    link: "https://github.com/codebylalit/Sorting-Visualizer",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-orange",
    name: "Github Info Grabber",
    description:
      "An Angular project utilizing the GitHub API to fetch and display user information and repository details.",
    link: "https://github.com/codebylalit/GithubInfoGrabber-SPA-",
  },
];

    // {
    //     iconUrl: pricewise,
    //     theme: 'btn-back-red',
    //     name: 'Amazon Price Tracker',
    //     description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
    //     link: 'https://github.com/adrianhajdin/pricewise',
    // },
    // {
    //     iconUrl: car,
    //     theme: 'btn-back-blue',
    //     name: 'Car Finding App',
    //     description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
    //     link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    // },