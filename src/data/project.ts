import iTask from '../assets/iTask11.png'
import quillspace from '../assets/quillspcae22.png'
import booknest from '../assets/booknestss.png'

export const projects = [
  {
    id: 1,
    title: 'i-Task',
    shortDesc: 'Advance Todo App',
    fullDesc:
      'A fully featured React Todo App with Dark/Light mode, drag & drop, subtasks, file attachments, progress tracking, history management, filters, sorting, and animated gradient background. Data persists via LocalStorage with a clean UI powered by TailwindCSS.',
    features: 'Login/SignUp Features, UI/UX, Todo Management, Task Flow, Progress & Analytics, Drag & Drop, Filters & Sorting',
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
    features: `🔐 Secure authentication with email/password and Google OAuth, JWT-based sessions, and self-service account management
💬 Infinitely nested comment threads with Instagram-style collapsed replies and live @mention autocomplete with real-time inline highlighting
👥 Follow system with live follower/following counts and a personalized "Following" feed
🔔 Real-time notifications delivered instantly over WebSocket for comments, likes, follows, mentions, and more
⚡ Live updates across the app — vote counts, new comments, and support ticket replies all sync instantly for every connected viewer
✍️ Full publishing workflow with drafts, scheduled posts (auto-published via cron), AI-assisted content generation, and autosave
🎫 Built-in customer support system with threaded, real-time ticket conversations between users and admins
📊 Admin dashboard with live-updating analytics, content moderation tools, and a real-time reports/tickets queue
🗄️ Redis-backed caching layer with automatic graceful fallback to MongoDB, improving response times on high-traffic endpoints
🐳 Fully containerized with Docker Compose and deployed via a GitHub Actions CI/CD pipeline (build → deploy → smoke test)`,
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
    shortDesc: 'Shop, browse, and pay for your favorite books effortlessly with BookNest, built on the MERN stack.',
    fullDesc:
      'BookNest is a full-featured online bookstore built with the MERN stack, offering a seamless experience for both users and admins. Users can browse, search, and purchase books with secure payments, while admins can easily manage the book catalog, track orders, and oversee the platform. With a modern, responsive design and complete administrative control, BookNest provides a smooth, intuitive, and secure platform for book lovers and store managers alike.',
    features: 'User Authentication, Book Browsing & Search, Shopping Cart & Checkout, Stripe Payment Integration, Admin Panel, Responsive Design',
    tech: ['MERN Stack', 'Stripe'],
    github: 'https://github.com/beingshivansh0777/BookNest',
    demo: 'https://book-nest-user.vercel.app/',
    image: booknest,
  },
];