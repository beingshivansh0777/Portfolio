import { useParams, useNavigate } from 'react-router-dom';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/project';

export const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return <p className="p-10 text-center">Project not found!</p>;
  }

  return (
    <section className="min-h-screen px-6 py-20 max-w-4xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:scale-105 transition"
      >
        ← Back
      </button>

      <img
        src={project.image}
        alt={project.title}
        className="w-full h-72 object-cover rounded-2xl mb-8"
      />

      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>

      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        {project.fullDesc}
      </p>

      {/* Features Section */}
      {project.features && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Features</h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
            {project.features.split(',').map((feature, idx) => (
              <li key={idx}>{feature.trim()}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((t, idx) => (
          <span
            key={idx}
            className="px-3 py-1 bg-cyan-100 dark:bg-cyan-800 text-cyan-600 dark:text-cyan-300 rounded-full text-sm"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full hover:scale-105 transition"
          >
            <Github className="w-5 h-5" />
            Code
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2 bg-cyan-500 text-white rounded-full hover:scale-105 transition"
          >
            <ExternalLink className="w-5 h-5" />
            Demo
          </a>
        )}
      </div>
    </section>
  );
};