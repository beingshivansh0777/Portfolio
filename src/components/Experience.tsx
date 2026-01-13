import { Calendar, Briefcase } from 'lucide-react';

export const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Micro IT Company',
      period: 'May 2025 - June 2025',
      description: [
        'Developed and maintained multiple client projects, implementing modern UI/UX designs and RESTful APIs.',
        'Collaborated with cross-functional teams.'
      ],
    },
    {
      title: 'Freelancer',
      company: '',
      period: 'Ongoing',
      description: [
        'Built responsive and accessible web applications with a strong focus on performance optimization, scalability, and user experience.',
        'Collaborated closely with designers and clients to transform ideas into high-quality, production-ready solutions.',
        'Completed 15+ real-world projects, ranging from business websites and dashboards to custom learning platforms.',
        'Passionate about writing clean, maintainable code and delivering results that align with client goals.',
      ],
    },
  ];  

  return (
    <section className="min-h-screen px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            My professional journey and accomplishments
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-2">
                    <Briefcase className="w-4 h-4" />
                    <span className="font-semibold">{exp.company}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>

              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 leading-relaxed">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
