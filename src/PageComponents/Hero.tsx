import React from 'react';
import Button from '../CustomComponents/buttons';

export default function Hero() {
  return (
    <section className="bg-#FFEBE7 dark:bg-#0C0500">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 md:grid-cols-12">
        <div className="mr-auto place-self-center md:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-center md:text-left">
          Luke Sorrell - Graphic Design & Animation
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-white text-center md:text-left">
          From intricate design concepts to the seamless flow of animations, I bring ideas to life, ensuring your message stands out.
          </p>
          <div className="flex justify-center md:justify-start">
            <Button className="mr-4" variant="primary" to="/gallery">View Projects</Button>
            <Button variant="secondary" to="/about">Learn About Luke</Button>
          </div>
        </div>
        <div className="md:col-span-5 flex items-center justify-center md:justify-end">
          <img
            className="w-full md:w-auto"
            src="/images/Hero-image.webp"
            alt="abstract art"
            style={{ maxHeight: '75vh' }}
          />
        </div>                
      </div>
    </section>
  );
}