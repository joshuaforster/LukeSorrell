import React from 'react';

interface Skill {
    imgSrc: string;
    imgAlt: string;
    title: string;
    description: string;
}

interface SkillsProps {
    skills: Skill[];
    headline: string;
    desc: string;
}

const Skills: React.FC<SkillsProps> = ({ skills, headline, desc }) => {
    return (
        <div className="bg-gray-100 dark:bg-#0C0500">
            <div className="mx-auto max-w-screen-xl px-4 py-8 text-center">
                <h3 className="text-4xl font-bold mb-4 text-black dark:text-white">{headline}</h3>
                <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">{desc}</p>
                <div className="flex flex-col items-center md:flex-row md:justify-between">
                    {skills.map((skill, index) => (
                        <div key={index} className='flex flex-col items-center text-center mb-4 md:mb-0'>
                            <img
                                src={skill.imgSrc}
                                alt={skill.imgAlt}
                                className="h-24 mb-4"
                            />
                            <h3 className="text-xl font-semibold text-black dark:text-white">{skill.title}</h3>
                            <p className="text-gray-700 dark:text-gray-300">{skill.description}</p>
                        </div>
                    ))} 
                </div>
            </div>
        </div>
    );
};

export default Skills;