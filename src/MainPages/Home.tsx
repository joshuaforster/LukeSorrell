import React, { useEffect, useState } from "react";
import Hero from "../PageComponents/Hero";
import TestimonialSlider from "../PageComponents/Reviews";
import { useTheme } from '../CustomComponents/darkmode';
import LogoSection from "../PageComponents/logoSection";
import Skills from "../PageComponents/Skills";
import WhyMe from "../PageComponents/whyme";
import About from "../PageComponents/about";
import Portfolio from "../PageComponents/portfolio";
import Contact from "../PageComponents/Contact";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { createClient, Asset } from 'contentful';

const spaceId = 'oyk9ajukd2hh';
const accessToken = 'hByayhQ07jnSKqia90NpcS61mEksyNYX35QY75Gur60';

interface AboutSection {
    headline: string;
    body: any; // RichTextDocument type from Contentful
    image: string;
}

interface SkillsSection {
    headline: string;
    subHeadline: string;
}

export default function Home() {
    const { theme } = useTheme();

    const [skillsSection, setSkillsSection] = useState<SkillsSection>({ headline: '', subHeadline: '' });
    const [whyMeSection, setWhyMeSection] = useState<{ headline: string; text: React.ReactNode }>({ headline: '', text: '' });
    const [aboutSection, setAboutSection] = useState<AboutSection>({ headline: '', body: null, image: '' });
    const [error, setError] = useState<string>('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const client = createClient({
            space: spaceId,
            accessToken: accessToken
        });

        const fetchContent = async () => {
            try {
                const res = await client.getEntries({ include: 2 });
                console.log('Fetch response:', res);

                const skillsEntry = res.items.find((item: any) => item.sys.contentType.sys.id === 'whatIOffer');
                const whyMeEntry = res.items.find((item: any) => item.sys.contentType.sys.id === 'whatIOffer');
                const aboutEntry = res.items.find((item: any) => item.sys.contentType.sys.id === 'aboutSection');

                if (skillsEntry) {
                    setSkillsSection({
                        headline: skillsEntry.fields.headline as string,
                        subHeadline: skillsEntry.fields.subHeadline as string,
                    });
                }

                if (whyMeEntry) {
                    setWhyMeSection({
                        headline: whyMeEntry.fields.whyMeHeadline as string,
                        text: documentToReactComponents(whyMeEntry.fields.whyMeSubText as any),
                    });
                }

                if (aboutEntry) {
                    const imageField = aboutEntry.fields.image as Asset;
                    const imageUrl = imageField && imageField.fields && imageField.fields.file && typeof imageField.fields.file.url === 'string' ? imageField.fields.file.url : '';
                    setAboutSection({
                        headline: aboutEntry.fields.headline as string,
                        body: aboutEntry.fields.body,
                        image: imageUrl
                    });
                }

                setIsLoading(false);
            } catch (error) {
                if (error instanceof Error) {
                    console.error('Error fetching content:', error);
                    setError(error.message);
                } else {
                    setError('An unknown error occurred');
                }
                setIsLoading(false);
            }
        };

        fetchContent();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <section>
            <div id="hero">
                <Hero />
            </div>
            <div id="logos">
                <LogoSection theme={theme} />
            </div>
            <div id="skills">
                <Skills headline={skillsSection.headline} subHeadline={skillsSection.subHeadline} />
            </div>
            <div id="whyme">
                <WhyMe headline={whyMeSection.headline} text={whyMeSection.text} />
            </div>
            <div id="portfolio">
                <Portfolio Header="Our Portfolio" />
            </div>
            <div id="about">
                <About
                    headline={aboutSection.headline}
                    body={aboutSection.body}
                    image={aboutSection.image}
                />
            </div>
            <div id="reviews">
                <TestimonialSlider />
            </div>
            <div id="contact">
                <Contact />
            </div>
        </section>
    );
}