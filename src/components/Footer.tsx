import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/beingshivansh0777',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/shivansh-mishra-233b5b2aa',
    },
    {
      icon: Twitter,
      label: 'Twitter',
      url: 'https://x.com/Mishra0857',
    },
  ];

  return (
    <footer className="py-12 px-6 border-t border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">

        {/* LEFT SIDE - SOCIAL */}
        <div className="flex flex-col gap-5">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Follow us to be always up to date
          </h3>

          <div className="flex gap-5">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:scale-110 hover:shadow-lg transition-all duration-300 hover:text-cyan-500"
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE - CONTACT */}
        <div className="flex flex-col gap-4 text-gray-700 dark:text-gray-300 max-w-sm md:text-right">
          
          <p className="text-lg font-medium">
            We are open for business. Feel free to drop us a line or send your brief
          </p>

          <div className="flex items-center gap-3 md:justify-end">
            <Mail className="w-5 h-5 text-cyan-500" />
            <a href="mailto:luckymishra2625@gmail.com" className="hover:underline">
              luckymishra2625@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-3 md:justify-end">
            <Phone className="w-5 h-5 text-cyan-500" />
            <span>+91 8858094500</span>
          </div>

          <div className="flex items-center gap-3 md:justify-end">
            <MapPin className="w-5 h-5 text-cyan-500" />
            <span>Lucknow, UP</span>
          </div>

        </div>
      </div>
    </footer>
  );
};
