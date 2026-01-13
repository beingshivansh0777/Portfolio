import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

export const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/beingshivansh0777',
      color: 'hover:text-gray-900 dark:hover:text-white',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/shivansh-mishra-233b5b2aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      color: 'hover:text-blue-600 dark:hover:text-blue-400',
    },
    {
      icon: Twitter,
      label: 'Twitter',
      url: 'https://x.com/Mishra0857?t=CTZ2W5OLf3J138dwSN5IpQ&s=09',
      color: 'hover:text-sky-500 dark:hover:text-sky-400',
    },
    {
      icon: Mail,
      label: 'Email',
      url: 'mailto:luckymishra2625@gmail.com',
      color: 'hover:text-red-500 dark:hover:text-red-400',
    },
  ];

  return (
    <footer className="py-12 px-6 border-t border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center gap-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Shivansh Mishra
            </h3>
            <a
              href="mailto:luckumishra2625@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-300"
            >
              luckymishra2625@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 ${link.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
                <span className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {link.label}
                </span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
            
          </div>

          <p className="text-gray-500 dark:text-gray-500 text-sm">
           
          </p>
        </div>
      </div>
    </footer>
  );
};
