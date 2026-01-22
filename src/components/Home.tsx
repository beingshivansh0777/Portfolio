import { ArrowRight, Code, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Home = ({
  onNavigate,
}: {
  onNavigate: (section: string) => void;
}) => {
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
            Designing and developing scalable full-stack web solutions aligned with business objectives.
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

        {/* Connect Button - Circular Jellyfish */}
        <button
          onClick={() => navigate("/connect")}
          className="
    fixed z-40
    bottom-24 right-8        /* Desktop - unchanged */
    sm:bottom-20 sm:right-6
    max-sm:bottom-[87px] max-sm:right-1  /* Mobile slightly lower */
  "
        >
          <div
            className="
      relative overflow-hidden bg-black
      rounded-[24px_24px_18px_18px]

      w-24 h-12                    /* Desktop */
      max-sm:w-18 max-sm:h-9       /* Mobile smaller */
    "
          >
            {/* Siri liquid */}
            <div className="absolute inset-0 animate-siri-strong">
              <div className="absolute -top-5 -left-5 w-20 h-20 bg-cyan-400 rounded-full blur-lg opacity-80 mix-blend-screen" />
              <div className="absolute -bottom-5 -right-5 w-20 h-20 bg-purple-500 rounded-full blur-lg opacity-80 mix-blend-screen animate-siri-delay" />
            </div>

            {/* Text */}
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <span className="text-white text-[12px] max-sm:text-[10px] font-semibold tracking-[0.12em] uppercase">
                Connect
              </span>
            </div>
          </div>
        </button>
      </div>
    </section>
  );
};
