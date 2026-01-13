import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { projects } from "../data/project";

export const Projects = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="relative h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => navigate(`/project/${project.id}`)}
                  className="absolute bottom-4 right-4 p-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-300 shadow-xl transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {project.shortDesc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
