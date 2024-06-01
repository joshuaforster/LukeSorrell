import React from "react";
import Hero from "../PageComponents/Hero";
import TestimonialSlider from "../PageComponents/Reviews";
import { useTheme } from '../CustomComponents/darkmode';
import LogoSection from "../CustomComponents/logoSection";
import Skills from "../CustomComponents/Skills";
import WhyMe from "../CustomComponents/whyme";
import About from "../PageComponents/about";
import Portfolio from "../PageComponents/portfolio";
import Contact from "../PageComponents/Contact";

export default function Home() {
    const { theme } = useTheme();

    const logos = theme === 'dark' ? [
        { src: '/images/NUALogo.webp', alt: 'Laura Blake' },
        { src: '/images/InvokeLogo.webp', alt: 'Franks' },
        { src: '/images/A&DLogo.webp', alt: 'Anteros' },
    ] : [
        { src: '/images/nuadark.png', alt: 'Laura Blake' },
        { src: '/images/Invoke Digital Signage Logo dark.png', alt: 'Franks' },
        { src: '/images/A&D_Film_Studios_dark.png', alt: 'Anteros' },
    ];



    const skills = [
        {
            imgSrc: "images/letter.webp",
            imgAlt: "Abstract art piece 1",
            title: "Typography",
            description: "Crafting visuals that captivate, I bridge design and message for impactful brand presence",
        },
        {
            imgSrc: "images/pencil.webp",
            imgAlt: "Rabbit art piece",
            title: "Typography",
            description: "Crafting visuals that captivate, I bridge design and message for impactful brand presence",
        },
        {
            imgSrc: "images/stylus.webp",
            imgAlt: "Abstract art piece 2",
            title: "Typography",
            description: "Crafting visuals that captivate, I bridge design and message for impactful brand presence",
        },
    ];

    const about = {
        headline: 'About Me',
        image: '/images/Luke_Sorrell_Avater_2023.webp',
        body: `
            I developed my skills after graduating with my undergrad degree in animation at the Norwich University of the Arts in 2016. As a freelancer and motion graphic designer, I gained experience in the graphic design industry. I noticed I had a passion for graphic design, which led me to complete a master's in communication design. My practice is motion graphics due to my degree in animation; I always want to see what my designs look like when they apply movement. Thanks to that experience, I can make my work look energetic and approachable.

            I always try to keep an open mind and take people's opinions and suggestions on board when developing my designs. I believe this makes me a better designer while pushing myself to achieve that next level of work. It also allows me to interact with those people viewing my creative work.

            My strength has always been to come up with new ideas on the spot and figure out how to implement them into my designs. This leads me to play with different ideas, which I enjoy even in my spare time. I also try to inject humour and personality into my work to help people connect to my designs. This year in my master's, I've discovered why I love graphic design, which has given me a new drive to succeed and reach my potential.
        `
    };

    const skillsSection = {
        headline: "Our Skills",
        desc: "We offer a diverse range of skills to meet your needs.",
    };
    const whyMe = {
        headline: "Why Me",
        text: "Driven by a passion for visual storytelling, I merge design, animation, and typography to elevate brands. With every project, I commit to delivering tailored solutions that resonate and engage. Choose collaboration, creativity, and a distinct voice in a saturated digital landscape"
    };
    
    const portfolioPieces = [
        {
            heading: "Best website collections",
            text: "Website",
            image: "/images/Dyslexia.webp",
            link: "https://www.dropbox.com/scl/fo/fp04e5eil1m85bv9bwflw/h/Norwich%20University%20of%20the%20Arts/MA%20COMMUNICATION%20DESIGN?dl=0&preview=Dyslexia_Is_Not_A_Disability_2022_v2.mp4&subfolder_nav_tracking=1"
        },
        {
            heading: "Block of UI kit collections",
            text: "UI Kit",
            image: "/images/haunted.webp",
            link: "https://www.youtube.com/watch?v=0KXVhueCx4k"
        },
        {
            heading: "Ton’s of mobile mockup",
            text: "Mockups",
            image: '/images/Reviews.webp',
            link: "https://www.dropbox.com/scl/fo/fp04e5eil1m85bv9bwflw/h/Norwich%20University%20of%20the%20Arts/MA%20COMMUNICATION%20DESIGN/MP_Posters_2023?dl=0&subfolder_nav_tracking=1"
        },
        {
            heading: "Huge collection of animation",
            text: "Animation",
            image: "/images/Typography.webp",
            link: "https://www.dropbox.com/scl/fo/fp04e5eil1m85bv9bwflw/h/Norwich%20University%20of%20the%20Arts/MA%20COMMUNICATION%20DESIGN/Typography_Project_2023?dl=0&subfolder_nav_tracking=1"
        },
        {
            heading: "Huge collection of animation",
            text: "Animation",
            image: "/images/loreal.webp",
            link: "https://www.youtube.com/watch?v=qHTvaAztvWI"
        },
        {
            heading: "Huge collection of animation",
            text: "Animation",
            image: "/images/cafe.webp",
            link: "https://www.dropbox.com/scl/fo/fp04e5eil1m85bv9bwflw/h/Freelance%20Work?dl=0&subfolder_nav_tracking=1"
        }
    ];
    
    return (
        <section>
            <div id="hero">
                <Hero />
            </div>
            <div id="logos">
                <LogoSection logos={logos} theme={theme} />
            </div>
            <div id="skills">
                <Skills skills={skills} headline={skillsSection.headline} desc={skillsSection.desc} />
            </div>
            <div id="whyme">
                <WhyMe headline={whyMe.headline} text={whyMe.text}/>
            </div>
            <div id="portfolio">
                <Portfolio portfolioPieces={portfolioPieces} Header="Our Portfolio" />
            </div>
            <div id="about">
                <About headline={about.headline} body={about.body} image={about.image}/>
            </div>
            <div id="reviews">
                <TestimonialSlider />
            </div>
            <div id="contact">
                <Contact />
            </div>
        </section>
    );}