// src/data/index.js

export const personalInfo = {
  name: "Md Mahosin",
  title: "UI Craftsman",
  tagline: "I build responsive, user-friendly web applications with React, Node.js, and MongoDB — focused on clean UI, reliable backends, and details that make interfaces feel effortless.",
  about: "I'm a Diploma in Computer Science student and self-taught MERN Stack Developer from Bangladesh. I build responsive, user-friendly web interfaces with React, Tailwind, and JavaScript — with a focus on clean UI, reliable backends, and problem solving. Still learning, still shipping, and enjoying every step.",
  location: "Bangladesh",
  cvLink: "/cv.pdf",
};

export const stats = [
  { number: "4+", label: "PROJECTS BUILT" },
  { number: "MERN", label: "STACK FOCUSED" },
  { number: "100%", label: "DEDICATION" },
];

export const skills = {
  title: "Skills & Technologies",
  description: "I've been working on a variety of projects, from full-stack web development to building scalable user interfaces.",
  categories: [
    {
      name: "Frontend Architecture",
      tools: [ "JavaScript", "TypeScript","React", "Next.js", "Tailwind CSS", "Framer Motion", "HTML", "CSS"]
    },
    {
      name: "Backend & Data",
      tools: ["Node.js", "Express.js", "MongoDB", "REST API", "Redux", "TanStack Query", "Pusher (WebSockets)"]
    },
    {
      name: "Auth, Payments & Tools",
      tools: ["JWT", "Firebase Auth", "BetterAuth", "Stripe", "Git", "GitHub", "Figma", "Vercel", "Netlify", "CI/CD"]
    }
  ]
};
// Apnar real project data
export const projectsData = [
  {
    id: "1",
    name: "ShifaCare",
    image: "https://i.ibb.co.com/4wcQK6zw/Screenshot-2026-06-23-160852.png",
    stack: ["Next.js", "TypeScript", "MongoDB", "Pusher API", "BetterAuth", "TanStack Query", "Tailwind CSS"],
    description: "A comprehensive full-stack healthcare platform engineered to optimize clinical workflows. It features secure dynamic role-based access control for Admins, Doctors, and Patients, dynamic profile management, and a seamless medical booking system.",
    liveLink: "https://medical-management-hijw.vercel.app/",
    githubLink: "https://github.com/mahosin-islam/medical-management",
    challenges: "Implementing a low-latency, real-time chat feature while avoiding high server overhead and maintaining state sync was the main challenge. To solve this, a hybrid pipeline using Pusher Channels (WebSockets) for instant messaging was integrated with TanStack Query for optimistic client-side cache updates. Additionally, global connection caching was used to prevent MongoDB pooling leaks in serverless environment.",
    futurePlan: "Integrating video calling feature (WebRTC) for remote tele-medicine consultations and automated prescription generation systems."
  },
  {
    id: "2",
    name: "MERN E-Commerce",
    image: "https://i.ibb.co.com/RGszFPBD/Screenshot-2026-04-29-215537.png",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion", "MongoDB", "Firebase Auth", "Role Base Access"],
    description: "A comprehensive e-commerce solution built from scratch featuring user authentication, product catalog with filtering, shopping cart, secure payment processing with Stripe, order management, and a complete admin dashboard for inventory and order management.",
    liveLink: "https://garmamts-product-trackar.netlify.app/",
    githubLink: "https://github.com/mahosin-islam/assignment-11-cliend",
    challenges: "Implementing real-time inventory updates and handling concurrent cart modifications was challenging. Also, integrating Stripe's payment system securely while maintaining a smooth user experience required careful consideration.",
    futurePlan: "In the future, there is a plan to add a user dashboard to this project."
  },
  {
    id: "3",
    name: "MERN Restaurant",
    image: "https://i.ibb.co.com/TqK3g3YV/Screenshot-2026-04-29-220416.png",
    stack: ["MongoDB", "Node.js", "Express", "React"],
    description: "Start Restaurant is a high-performance, full-stack e-commerce engine designed for modern food businesses. It bridges the gap between a seamless customer ordering experience and a robust administrative management system.",
    liveLink: "https://startresturent.vercel.app/",
    githubLink: "https://github.com/mahosin-islam/startresturent",
    challenges: "Integrating Stripe's payment system securely without disrupting the user flow. Maintaining state between the checkout session and the order confirmation—especially in case of network interruptions—required precision.",
    futurePlan: "Adding a multi-vendor system."
  },
  {
    id: "4",
    name: "Quranul Hakim",
    image: "https://i.ibb.co.com/W4nkQpkr/Screenshot-2026-05-04-102901.png",
    stack: ["Next.js", "TypeScript", "Tailwind CSS v4.0", "Lucide React"],
    description: "A modern and professional Quran application that allows users to read all 114 surahs and listen to audio for each verse. It includes customizable font settings, global search, and dark mode support, making the Quran reading experience smoother and more user-friendly.",
    liveLink: "https://quran-app-snowy-two.vercel.app/",
    githubLink: "https://github.com/mahosin-islam/quran-app",
    challenges: "Loading data of 114 surahs and thousands of verses while maintaining performance was the main challenge. To solve this, a Load More system and Static Site Generation (SSG) were used to optimize page loading speed. Also, LocalStorage synchronization was implemented to persist user settings like font size and family after refresh.",
    futurePlan: "Adding offline Quran reading support (PWA) and multiple reciter audio selection options."
  }
];

// Services data (updated with real project info)
export const services = [
  {
    title: "Full-Stack Development",
    description: "End-to-end web applications with React, Next.js, Node.js, and MongoDB. From database design to polished UI.",
    icon: "FiMonitor",
  },
  {
    title: "Healthcare Solutions",
    description: "Building secure, scalable healthcare platforms with role-based access control, real-time chat, and medical booking systems.",
    icon: "FiHeart",
  },
  {
    title: "E-Commerce Platforms",
    description: "Complete e-commerce solutions with authentication, product management, payment integration, and admin dashboards.",
    icon: "FiShoppingBag",
  },
  {
    title: "Real-Time Applications",
    description: "Implementing WebSocket-based real-time features including chat, notifications, and live updates using Pusher and Socket.io.",
    icon: "FiMessageCircle",
  },
];

export const contactInfo = {
  email: "mahosin.dev@gmail.com",
  github: "https://github.com/mahosin-islam",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
};