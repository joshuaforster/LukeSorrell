import React from 'react';
import { 
    FaWindows, 
    FaBorderStyle, 
    FaHome, 
    FaTint, 
    FaSolarPanel, 
    FaCaravan, 
    FaBuilding, 
    FaThLarge, 
    FaTractor
} from 'react-icons/fa';
import Button from '../CustomComponents/buttons';

const servicesData = [
    {
        title: "Window Cleaning",
        description: "Expert cleaning for clearer, streak-free windows, enhancing the view and brightness of your space.",
        path: "/services/windows",
        icon: FaWindows,
    },
    {
        title: "Frames and Sills",
        description: "Detailed cleaning to protect and maintain the condition of your window frames and sills.",
        path: "/services/frames-sills",
        icon: FaBorderStyle,
    },
    {
        title: "Conservatories",
        description: "Comprehensive cleaning solutions to keep your conservatory sparkling clean and enjoyable all year round.",
        path: "/services/conservatories",
        icon: FaHome,
    },
    {
        title: "Gutters and Fascias",
        description: "Effective cleaning to ensure your gutters and fascias are debris-free and functioning properly.",
        path: "/services/gutters-fascias",
        icon: FaTint,
    },
    {
        title: "Solar Panels",
        description: "Specialized cleaning to maintain the efficiency and performance of your solar panels.",
        path: "/services/solar-panels",
        icon: FaSolarPanel,
    },
    {
        title: "Caravan Cleaning",
        description: "Thorough cleaning services to keep your caravan in pristine condition, ready for your next adventure.",
        path: "/services/caravan-cleaning",
        icon: FaCaravan,
    },
    {
        title: "Domestic and Commercial",
        description: "Tailored cleaning services to meet the specific needs of both homes and businesses, ensuring a clean and welcoming environment.",
        path: "/services/domestic-commercial",
        icon: FaBuilding,
    },
    {
        title: "Patios",
        description: "Professional cleaning to revive your patio, making it a perfect spot for relaxation or entertainment.",
        path: "/services/patio-regular-cleans",
        icon: FaThLarge,
    },
    {
        title: "Mini Digger Hire",
        description: "Reliable mini digger hire for your construction and landscaping needs, available with skilled operators.",
        path: "/services/mini-digger",
        icon: FaTractor,
    },
];

export default function Services() {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="max-w-screen-md mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Designed for Homes and Businesses Like Yours</h2>
                    <p className="text-gray-500 sm:text-xl dark:text-gray-400">Here at AD Forster Window Cleaning, we focus on providing top-quality cleaning services that enhance your living and working environments, ensuring cleanliness and comfort to help drive your daily success.</p>
                </div>
                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                    {servicesData.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div key={index} className="p-6 transition-transform duration-300 transform bg-white rounded-lg shadow-md hover:scale-105 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 hover:shadow-lg hover:border dark:border-gray-700">
                                <div className="flex flex-col items-start mb-4">
                                    <Icon className="w-10 h-10 text-primary-500 lg:h-12 lg:w-12 text-gray-800 dark:text-white mb-4" />
                                    <h3 className="mb-2 text-xl font-bold text-gray-800 dark:text-white">{service.title}</h3>
                                    <p className="text-gray-500 dark:text-gray-400 mb-4">{service.description}</p>
                                </div>
                                <Button variant='primary' to={service.path}>See More</Button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}