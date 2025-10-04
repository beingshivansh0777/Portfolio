import iTask from '../assets/iTask11.png'
import quillspace from '../assets/quillspcae22.png'

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
    image:iTask,
  },
  {
    id: 2,
    title: 'QuiillSpace',
    shortDesc: 'A Blogging platform(AI) using MERN Stack',
    fullDesc:
      'QuillSpace is a modern blogging platform built with the MERN stack and AI-powered content generation. Users can create, edit, and publish posts, and leverage AI to generate content like drafts, summaries, and titles.',
    features : 'User Login.,Create edit and delete posts., AI-powered content generation.,Admin dashboard for managing blogs.',
    tech: ['React', 'Express', 'MONGODB' , 'Gen AI' , 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/beingshivansh0777/QuillSpace',
    demo: 'https://quill-space-ashen.vercel.app/',
    image:quillspace,
  },
  
];