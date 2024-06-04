import React from 'react';
import { Link } from 'react-router-dom';

interface PortfolioItem {
  heading: string;
  text: string;
  image: string;
  link: string;
}

interface PortfolioProps {
  portfolioPieces: PortfolioItem[];
  Header: string;
}

const Portfolio: React.FC<PortfolioProps> = ({ portfolioPieces, Header }) => {
  return (
    <section className="bg-white dark:bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {Header}
          </h1>
          <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Collaborated with some of the best in the industry.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {portfolioPieces.map((piece, key) => (
            <Link
              to={piece.link}
              key={key}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 dark:bg-gray-800 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <img
                src={piece.image}
                alt={piece.heading}
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40 dark:from-gray-800 dark:via-gray-800/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10 dark:ring-gray-800/10" />

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-white dark:text-gray-100">
                <h2 className="mt-3 text-lg font-semibold leading-6 text-white dark:text-gray-100">
                  {piece.heading}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;