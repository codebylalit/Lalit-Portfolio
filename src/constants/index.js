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
    yt
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
        title: "DSA Fellowship",
        company_name: "NextLeap",
        iconBg: "#accbe1",
        date: "June 2023 - October 2023",
        points: [
            "Acomprehensivecourse will cover C++ fundamentals, including variables, data types, loops, and functions, as well as object-oriented programming concepts like classes and inheritance, Students will delve into memory management, file handling, and libraries like the Standard Template Library (STL).",
            "LearnDataStructures & Algorithms Learning to break down complex problems into smaller, manageable parts.Practicing problem-solving skills through algorithmic challenges and exercises. Recognizing the need for efficient data handling in software development.",
        ],
    },
    {
        title: "Content Creator",
        company_name: "Self Employed",
        icon: yt,
        iconBg: "#fbc3bc",
        date: "Jan 2020 - Present",
        points: [
            "Filmmaker & Storyteller",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/codebylalit',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/lalitnamdev',
    }
];

export const projects = [
    // {
    //     iconUrl: pricewise,
    //     theme: 'btn-back-red',
    //     name: 'Amazon Price Tracker',
    //     description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
    //     link: 'https://github.com/adrianhajdin/pricewise',
    // },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Authentication App',
        description: 'Developed a React application for user authentication and management',
        link: 'https://github.com/codebylalit/Authentication-App',
    },
    // {
    //     iconUrl: car,
    //     theme: 'btn-back-blue',
    //     name: 'Car Finding App',
    //     description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
    //     link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    // },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Spotify Clone',
        description: ' Developed a Spotify Clone using React that replicates the functionality of the Spotify music streaming service.User authentication and authorization with Spotify API.',
        link: 'https://github.com/codebylalit/spotify-clone',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Sorting Visualizer',
        description: 'Implemented real-time visualization of sorting processes with Bubble Sort, Selection Sort, and Merge Sort using Html,Css and Javascript.',
        link: 'https://github.com/codebylalit/Sorting-Visualizer',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Github Info Grabber',
        description: ' AnAngular project utilizing the GitHub API to fetch and display user information and repository details.',
        link: 'https://github.com/codebylalit/GithubInfoGrabber-SPA-',
    }
];