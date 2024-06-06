import React from 'react';

interface WhyMeProps {
    headline: string;
    text: React.ReactNode; // Change from string to React.ReactNode
  }

const WhyMe: React.FC<WhyMeProps> = ({ headline, text }) => {
  return (
    <section className="bg-#FFEBE7 dark:bg-dark-gray">
      <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center lg:w-2/3">
        <div className="text-black bg-[#F26321] flex flex-col items-center px-8 py-12">
          <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight xl:text-3xl px-4">
            {headline}
          </h2>
          <p className="max-w-4xl mt-6 px-4">
            {text}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyMe;