import React, { useEffect, useState } from 'react';
import Button from '../CustomComponents/buttons';

interface HeroFields {
  headline: string;
  subHeadline: string;
  headlineImage?: { sys: { id: string } } | { url: string };
}

interface FetchResponse {
  items: Array<{
    fields: HeroFields;
  }>;
  includes?: {
    Asset: Array<{
      sys: { id: string };
      fields: { file: { url: string } };
    }>;
  };
}

const Hero: React.FC = () => {
  const [content, setContent] = useState<HeroFields | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const url = `https://cdn.contentful.com/spaces/oyk9ajukd2hh/environments/master/entries?access_token=hByayhQ07jnSKqia90NpcS61mEksyNYX35QY75Gur60&content_type=heroSection`;

    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data: FetchResponse) => {
        if (data.items.length > 0) {
          const fields = data.items[0].fields;

          if (fields.headlineImage && 'sys' in fields.headlineImage) {
            const mainImageId = fields.headlineImage.sys.id;
            const mainImageAsset = data.includes?.Asset.find(asset => asset.sys.id === mainImageId);

            if (mainImageAsset) {
              fields.headlineImage = { url: mainImageAsset.fields.file.url };
            } else {
              setError('Main image not found');
            }
          }

          setContent(fields);
        } else {
          setError('Content not found');
        }
        setIsLoading(false);
      })
      .catch(err => {
        console.error('Error fetching content:', err);
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error: {error}
        <br />
        <pre>{error}</pre>
      </div>
    );
  }

  return (
    <section className="bg-#FFEBE7 dark:bg-dark-gray">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 md:grid-cols-12">
        <div className="mr-auto place-self-center md:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl dark:text-white text-center md:text-left">
            {content?.headline || 'Default Headline'}
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-white text-center md:text-left">
            {content?.subHeadline || 'Default Subheadline'}
          </p>
          <div className="flex justify-center md:justify-start">
            <Button className="mr-4" variant="primary" href="#portfolio">View Projects</Button>
            <Button variant="secondary" href="#about">Learn About Luke</Button>
          </div>
        </div>
        <div className="md:col-span-5 flex items-center justify-center md:justify-end">
          <img className="w-full md:w-auto" src={(content?.headlineImage && 'url' in content.headlineImage) ? content.headlineImage.url : 'images/hero.jpg'} alt="abstract art" style={{ maxHeight: '75vh' }} />
        </div>
      </div>
    </section>
  );
};

export default Hero;