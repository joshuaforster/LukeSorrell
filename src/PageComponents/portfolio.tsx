import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createClient } from 'contentful';
import { useInView } from 'react-intersection-observer';

const spaceId = 'oyk9ajukd2hh';
const accessToken = 'hByayhQ07jnSKqia90NpcS61mEksyNYX35QY75Gur60';

interface PortfolioItem {
  heading: string;
  image: string;
  link: string;
}

interface PortfolioProps {
  Header: string;
}

const Portfolio: React.FC<PortfolioProps> = ({ Header }) => {
  const [portfolioPieces, setPortfolioPieces] = useState<PortfolioItem[]>([]);
  const [subHeadline, setSubHeadline] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const client = createClient({
      space: spaceId,
      accessToken: accessToken
    });

    const fetchPortfolioData = async () => {
      try {
        const response = await client.getEntries({ content_type: 'portfolioSection', include: 2 });
        const portfolioEntry = response.items[0];

        if (portfolioEntry && portfolioEntry.fields.portfolioPieces) {
          const pieces = (portfolioEntry.fields.portfolioPieces as any[]).map((piece: any) => ({
            heading: piece.fields.nameOfWork,
            image: piece.fields.image.fields.file.url,
            link: piece.fields.link
          }));
          setPortfolioPieces(pieces);
          setSubHeadline(portfolioEntry.fields.portfolioSubHeadline as string || '');
        }

        setIsLoading(false);
      } catch (error) {
        setError('Error fetching portfolio data');
        setIsLoading(false);
      }
    };

    fetchPortfolioData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="bg-white dark:bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {Header}
          </h1>
          <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-400">
            {subHeadline}
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {portfolioPieces.map((piece, key) => (
            <PortfolioCard key={key} piece={piece} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface PortfolioCardProps {
  piece: PortfolioItem;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ piece }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.75, // Using 75% of the window height
  });

  return (
    <Link
      ref={ref}
      to={piece.link}
      target="_blank"
      className={`relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 dark:bg-gray-800 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 transition-transform duration-700 ease-in-out ${
        inView ? 'transform translate-y-0 opacity-100' : 'transform translate-y-10 opacity-0'
      }`}
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
  );
};

export default Portfolio;
