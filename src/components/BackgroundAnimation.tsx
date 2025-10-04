export const BackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors duration-500" />

      <div className="absolute top-0 -left-4 w-72 h-72 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 dark:from-cyan-500/20 dark:to-blue-600/20 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl animate-blob" />

      <div className="absolute top-0 -right-4 w-72 h-72 bg-gradient-to-br from-purple-400/30 to-pink-500/30 dark:from-purple-500/20 dark:to-pink-600/20 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl animate-blob animation-delay-2000" />

      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-br from-blue-400/30 to-cyan-500/30 dark:from-blue-500/20 dark:to-cyan-600/20 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl animate-blob animation-delay-4000" />

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-br from-pink-400/30 to-purple-500/30 dark:from-pink-500/20 dark:to-purple-600/20 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl animate-blob animation-delay-6000" />

      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" />
    </div>
  );
};
