import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { BackgroundAnimation } from './BackgroundAnimation';

export const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen relative flex flex-col items-center justify-center px-6 py-20">
      {/* Background Animation */}
      <BackgroundAnimation />

      <div className="max-w-4xl w-full text-center relative z-10">
        <h1 className="text-5xl font-bold mb-6 text-cyan-500">About Me</h1>
        <p className="text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-300">
          Welcome to my portfolio! I'm Shivansh Mishra, Full Stack Developer.Currently I am pursuing Btech(IT) from SGSITS college. I am always learning new technologies and evolving, thrive on the
          latest web design trends.I enjoy building scalable applications and exploring new tools.
          Beyond coding, I am a photographer📷.
        </p>
        <p className="text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-300">
          Feel free to explore my projects and get in touch if you'd want to collaborate on something exciting.🚀
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-purple-500">Skills & Tools</h2>
         <div className="flex flex-wrap justify-center gap-4 mb-8">
           <span className="bg-cyan-200 text-cyan-800 px-4 py-2 rounded-full">JavaScript</span>
           <span className="bg-cyan-200 text-cyan-600 px-4 py-2 rounded-full">C++</span>
          <span className="bg-cyan-400 text-cyan-800 px-4 py-2 rounded-full">React.js</span>
          <span className="bg-purple-200 text-purple-800 px-4 py-2 rounded-full">Node.js</span>
          <span className="bg-purple-200 text-purple-800 px-4 py-2 rounded-full">Express.js</span>
          <span className="bg-pink-200 text-pink-800 px-4 py-2 rounded-full">Tailwind CSS</span>
          <span className="bg-pink-200 text-pink-800 px-4 py-2 rounded-full">SQL</span>
          <span className="bg-green-200 text-green-800 px-4 py-2 rounded-full">MongoDB</span>
           <span className="bg-green-200 text-green-800 px-4 py-2 rounded-full">Git</span>
          <span className="bg-gray-400 text-white px-4 py-2 rounded-full">Github</span>
           <span className="bg-gray-400 text-white px-4 py-2 rounded-full">VS Code</span>
          

        </div>

        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 bg-gray-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-cyan-600 transition-all duration-300"
        >
          Back <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
