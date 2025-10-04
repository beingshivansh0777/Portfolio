import { ArrowRight, Code, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Home = ({ onNavigate }: { onNavigate: (section: string) => void }) => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-6 relative">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 p-1 animate-spin-slow">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                <Code className="w-16 h-16 text-cyan-500" />
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Shivansh Mishra
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
            A Full Stack Developer who builds scalable web apps.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* About Me Card */}
          <div
            onClick={() => navigate("/about")}
            className="group bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
              About Me
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm Shivansh Mishra with a deep passion for coding and technology.
              
            </p>
            <button
              onClick={() => navigate("/about")}
              className="mt-4 flex items-center gap-2 text-blue-500 dark:text-blue-400 group-hover:gap-4 transition-all duration-300"
            >
              More <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Experience Card */}
          <div
            onClick={() => onNavigate("experience")}
            className="group bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
              <Code className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
              Experience
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Hands-on experience working with cutting-edge technologies. Built
              and optimized web apps, ensuring high performance & scalability
              for clients.
            </p>
            <button className="mt-4 flex items-center gap-2 text-blue-500 dark:text-blue-400 group-hover:gap-4 transition-all duration-300">
              Explore <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Projects Card */}
          <div
            onClick={() => onNavigate("projects")}
            className="group bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-400 transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
              <Code className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
              Projects
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              A collection of innovative projects showcasing my skills in
              various technologies and frameworks.
            </p>
            <button className="mt-4 flex items-center gap-2 text-purple-500 dark:text-purple-400 group-hover:gap-4 transition-all duration-300">
              View All <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Build Something Amazing
          </h2>
          <p className="text-lg opacity-90 mb-6">
            Let's connect to transform concepts into stunning, functional
            websites that elevate brands.🚀✨
          </p>
          <a
            href="mailto:luckumishra2625@gmail.com"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};