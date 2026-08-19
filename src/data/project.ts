import iTask from '../assets/iTask11.png'
import quillspace from '../assets/quillspcae22.png'
import booknest from '../assets/booknestss.png'

export const projects = [
  {
    id: 1,
    title: 'i-Task',
    shortDesc: 'A feature-rich productivity app with drag & drop and smart task tracking',
    fullDesc:
      'i-Task reimagines the classic todo list as a complete productivity tool, built with performance and usability in mind. Users can organize work with subtasks and intuitive drag-and-drop reordering, attach files directly to any task, and monitor progress through built-in analytics and history logs. The interface supports Dark/Light mode with smooth transitions and an animated gradient background, while smart filters and sorting keep even large task lists easy to navigate. All data persists locally via LocalStorage, ensuring a fast, offline-friendly experience with zero backend dependency — making it a lightweight yet powerful solution for personal task management.',
    features: 'Secure Login/Signup, Drag & Drop Task Reordering, Subtasks & File Attachments, Progress Tracking & Analytics, Task History & Undo, Smart Filters & Sorting, Dark/Light Mode, Fully Responsive UI, LocalStorage Persistence',
    tech: ['React', 'Clerk'],
    github: 'https://github.com/beingshivansh0777/Advance-iTask-Todo',
    demo: 'https://advance-i-task-todo.vercel.app/',
    image: iTask,
  },
  {
    id: 2,
    title: 'QuiillSpace',
    shortDesc: 'A Blogging platform(AI) using MERN Stack',
    fullDesc:
      'A full-stack, real-time blogging platform built with the MERN stack, where writers publish and schedule posts, readers follow authors and engage through infinitely nested comments, and every interaction — a like, a follow, a new comment — updates instantly across all connected users via Socket.io. The backend is optimized with Redis caching and deployed alongside a fully Dockerized development environment with CI/CD.',
    features: [
      '🔐 Secure Authentication (Email/Password + Google OAuth)',
      '💬 Infinitely Nested Comments with @Mention Autocomplete',
      '👥 Follow System with Personalized Feed',
      '🔔 Real-Time Notifications via WebSocket',
      '⚡ Live Sync for Votes, Comments & Tickets',
      '✍️ Full Publishing Workflow with Scheduled Posts & AI Content Generation',
      '🎫 Real-Time Customer Support Ticketing',
      '📊 Admin Dashboard with Live Analytics',
      '🗄️ Redis Caching with MongoDB Fallback',
      '🐳 Dockerized with GitHub Actions CI/CD',
    ],
    tech: [
      'Frontend: React · Vite · Tailwind CSS · React Router · Axios · Socket.io Client · Quill (Rich Text Editor) · Recharts',
      'Backend: Node.js · Express · MongoDB · Mongoose · Socket.io · Redis · JWT Authentication · bcrypt',
      'Third-Party Services: Google OAuth · Google Gemini API · ImageKit · Resend (Transactional Email)',
      'DevOps & Tooling: Docker · Docker Compose · GitHub Actions (CI/CD) · Nginx · Helmet · Pino (Logging) · Swagger/OpenAPI',
    ],
    github: 'https://github.com/beingshivansh0777/QuillSpace',
    demo: 'https://quill-space-ashen.vercel.app/',
    image: quillspace,
  },
  {
    id: 3,
    title: 'BookNest',
    shortDesc: 'A full-featured online bookstore with secure checkout and admin control',
    fullDesc:
      'BookNest is a complete e-commerce platform for book lovers, built on the MERN stack with a focus on performance, security, and usability. On the storefront, users can browse a curated catalog, search by title or category, manage a persistent shopping cart, and complete purchases through integrated Stripe payments with full transaction security. Behind the scenes, a dedicated admin dashboard gives store managers real-time control over inventory, order status, and catalog updates — eliminating manual overhead and keeping the store accurate and up to date. Built with a mobile-first, fully responsive interface, BookNest delivers a consistent, polished shopping experience across devices, demonstrating end-to-end e-commerce architecture from authentication and payments to admin operations.',
    features: 'User Authentication, Book Browsing & Search, Persistent Shopping Cart, Stripe Payment Integration, Admin Dashboard for Order & Inventory Management, Real-Time Order Tracking, Fully Responsive Design',
    tech: ['MERN Stack', 'Stripe'],
    github: 'https://github.com/beingshivansh0777/BookNest',
    demo: 'https://book-nest-user.vercel.app/',
    image: booknest,
  },
];