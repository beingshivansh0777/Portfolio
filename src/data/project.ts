import iTask from '../assets/iTask11.png'
import quillspace from '../assets/quillspcae22.png'
import booknest from '../assets/booknestss.png'

export const projects = [
  {
    id: 1,
    title: 'i-Task',
    shortDesc:
      'A feature-rich productivity app with drag & drop and smart task tracking',
    fullDesc:
      'i-Task reimagines the classic todo list as a complete productivity tool, built with performance and usability in mind. Users can organize work with subtasks and intuitive drag-and-drop reordering, attach files directly to any task, and monitor progress through built-in analytics and history logs. The interface supports Dark/Light mode with smooth transitions and an animated gradient background, while smart filters and sorting keep even large task lists easy to navigate. All data persists locally via LocalStorage, ensuring a fast, offline-friendly experience with zero backend dependency — making it a lightweight yet powerful solution for personal task management.',

    features: [
      'Secure Login / Signup',
      'Drag & Drop Task Reordering',
      'Subtasks & File Attachments',
      'Progress Tracking & Analytics',
      'Task History & Undo',
      'Smart Filters & Sorting',
      'Dark / Light Mode',
      'Fully Responsive UI',
      'LocalStorage Persistence',
    ],

    tech: ['React', 'Clerk'],
    github: 'https://github.com/beingshivansh0777/Advance-iTask-Todo',
    demo: 'https://advance-i-task-todo.vercel.app/',
    image: iTask,
  },

  {
    id: 2,
    title: 'QuillSpace',
    shortDesc: 'An AI-powered blogging platform built using the MERN stack',
    fullDesc:
      'A full-stack, real-time blogging platform built with the MERN stack, where writers publish and schedule posts, readers follow authors and engage through infinitely nested comments, and every interaction — a like, a follow, a new comment — updates instantly across all connected users via Socket.io. The backend is optimized with Redis caching and deployed alongside a fully Dockerized development environment with CI/CD.',

    features: [
      'Secure authentication with Email/Password & Google OAuth',
      'JWT-based sessions & self-service account management',
      'Infinitely nested comment threads with collapsed replies',
      'Live @mention autocomplete with real-time highlighting',
      'Follow system with live follower / following counts',
      'Personalized Following feed',
      'Real-time notifications via WebSocket',
      'Live updates for likes, comments & support tickets',
      'Draft, Schedule & Publish workflow',
      'AI-assisted content generation with Google Gemini',
      'Autosave for blog posts',
      'Automated scheduled publishing using Cron Jobs',
      'Real-time customer support ticket system',
      'Admin dashboard with live analytics',
      'Content moderation & reports management',
      'Redis-backed caching with MongoDB fallback',
      'Dockerized development environment',
      'GitHub Actions CI/CD pipeline',
    ],

    tech: [
      'Frontend: React · Vite · Tailwind CSS · React Router · Axios · Socket.io Client · Quill · Recharts',
      'Backend: Node.js · Express · MongoDB · Mongoose · Socket.io · Redis · JWT · bcrypt',
      'Third-Party Services: Google OAuth · Google Gemini API · ImageKit · Resend',
      'DevOps & Tooling: Docker · Docker Compose · GitHub Actions · Nginx · Helmet · Pino · Swagger/OpenAPI',
    ],

    github: 'https://github.com/beingshivansh0777/QuillSpace',
    demo: 'https://quill-space-ashen.vercel.app/',
    image: quillspace,
  },

  {
    id: 3,
    title: 'BookNest',
    shortDesc:
      'A full-featured online bookstore with secure checkout and admin control',
    fullDesc:
      'BookNest is a complete e-commerce platform for book lovers, built on the MERN stack with a focus on performance, security, and usability. On the storefront, users can browse a curated catalog, search by title or category, manage a persistent shopping cart, and complete purchases through integrated Stripe payments with full transaction security. Behind the scenes, a dedicated admin dashboard gives store managers real-time control over inventory, order status, and catalog updates — eliminating manual overhead and keeping the store accurate and up to date. Built with a mobile-first, fully responsive interface, BookNest delivers a consistent, polished shopping experience across devices, demonstrating end-to-end e-commerce architecture from authentication and payments to admin operations.',

    features: [
      'User Authentication',
      'Book Browsing & Search',
      'Category-based Book Filtering',
      'Persistent Shopping Cart',
      'Stripe Payment Integration',
      'Secure Checkout',
      'Admin Dashboard',
      'Order & Inventory Management',
      'Real-Time Order Tracking',
      'Fully Responsive Design',
    ],

    tech: ['MERN Stack', 'Stripe'],
    github: 'https://github.com/beingshivansh0777/BookNest',
    demo: 'https://book-nest-user.vercel.app/',
    image: booknest,
  },
];