import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Code, Database, Gauge, Rocket, Settings, Wrench, FolderKanban } from 'lucide-react';
import { BackgroundAnimation } from './BackgroundAnimation';

export const ConnectPage = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: FolderKanban,
      title: 'Project Management',
      description: 'Comprehensive project planning, tracking, and delivery management to ensure your projects are completed on time and within budget.',
      gradient: 'from-cyan-400 to-blue-500',
    },
    {
      icon: Code,
      title: 'Website Development',
      description: 'Building modern, responsive, and user-friendly websites that deliver exceptional user experiences across all devices.',
      gradient: 'from-blue-400 to-purple-500',
    },
    {
      icon: Rocket,
      title: 'Full Stack Application Development',
      description: 'End-to-end development of scalable web applications using modern technologies and best practices.',
      gradient: 'from-purple-400 to-pink-500',
    },
    {
      icon: Settings,
      title: 'API Development and Integration',
      description: 'Creating robust RESTful APIs and seamless third-party service integrations for enhanced functionality.',
      gradient: 'from-pink-400 to-red-500',
    },
    {
      icon: Database,
      title: 'Database Design and Maintenance',
      description: 'Efficient database architecture design, optimization, and ongoing maintenance for optimal performance.',
      gradient: 'from-green-400 to-teal-500',
    },
    {
      icon: Gauge,
      title: 'Performance Optimization',
      description: 'Analyzing and improving application performance, load times, and overall user experience.',
      gradient: 'from-orange-400 to-yellow-500',
    },
    {
      icon: Wrench,
      title: 'Deployment and Maintenance',
      description: 'Smooth deployment processes, continuous monitoring, and proactive maintenance to keep your applications running flawlessly.',
      gradient: 'from-teal-400 to-cyan-500',
    },
  ];

  return (
    <section className="min-h-screen relative px-6 py-20">
      <BackgroundAnimation />

      <div className="max-w-6xl mx-auto relative z-10">
        <button
          onClick={() => navigate('/')}
          className="mb-8 flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-300"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </button>

        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Let's Building Something Amazing
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
            Let's Connect to transform concepts into stunning, functional websites that elevate brands.
          </p>

          <h2 className="text-4xl md:text-5xl font-black mb-12 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-services-title" style={{fontFamily: "'Poppins', 'Segoe UI', sans-serif", letterSpacing: '0.05em'}}>
            Services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Let's discuss how I can help bring your vision to life.
            </p>
            <a
              href="mailto:luckymishra2625@gmail.com"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              {/* Schedule a Call */}
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
