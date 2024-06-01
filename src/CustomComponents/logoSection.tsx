import React from 'react';

interface Logo {
  src: string;
  alt: string;
}

interface LogoSectionProps {
  logos: Logo[];
  theme: string;
}

const LogoSection: React.FC<LogoSectionProps> = ({ logos, theme }) => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-3 dark:text-gray-400">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                src={theme === 'dark' ? logo.src : logo.src}
                alt={logo.alt}
                className="h-14 hover:text-gray-900 dark:hover:text-white"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoSection;