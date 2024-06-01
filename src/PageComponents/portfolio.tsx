import React from 'react';
import { Link } from 'react-router-dom';

interface Portfolio {
    heading: string;
    text: string;
    image: string;
    link: string;
}

interface PortfolioArray {
    portfolioPieces: Portfolio[];
    Header: string;
}

const Portfolio: React.FC<PortfolioArray> = ({ portfolioPieces, Header }) => {
    return (
        <section className="bg-#F4E1CF dark:bg-#0C0500">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
                    {Header}
                </h1>

                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2">
                    {portfolioPieces.map((piece, key) => (
                        <Link to={piece.link} key={key} className="flex items-end overflow-hidden bg-cover rounded-lg h-96" style={{ backgroundImage: `url(${piece.image})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                            <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                                <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
                                    {piece.heading}
                                </h2>
                                <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">
                                    {piece.text}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;