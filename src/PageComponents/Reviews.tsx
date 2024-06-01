import React from 'react';
import { Swiper as SwiperType } from 'swiper/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, A11y } from 'swiper/modules';


const reviewsData = [
  {
    name: 'Laura Blake',
    review: 'Working with Holly has been an absolute delight. Her artistic talent is truly remarkable, and her attention to detail is impeccable. The artwork we collaborated on turned out beautifully, capturing the essence of each subject perfectly. Highly recommend her work!',
    stars: '⭐️⭐️⭐️⭐️⭐️',
    date: '20 May 2024',
    id: 1,
  },
  {
    name: 'Richard Forster',
    review: 'I absolutely love the picture of my dog Bumble, the pig, and the tree. The detail and quality of the artwork are outstanding. It brings so much joy and character to our home. Thank you for the amazing work!',
    stars: '⭐️⭐️⭐️⭐️⭐️',
    date: '15 May 2024',
    id: 2,
  },
];


const TestimonialSlider: React.FC = () => {
  return (
    <div className="py-16 mx-auto bg-gray-100  dark:bg-#0C0500">
      <div className='container mx-auto'>
        <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">Testimonials</h2>
        <p className="text-center mb-8 text-gray-600 dark:text-gray-300">
          Here are some of the reviews from our satisfied customers. Click the button below to see more reviews on our Facebook page.
        </p>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          onSwiper={(swiper: SwiperType) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {reviewsData.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="p-4 text-center">
                <div className="bg-#F4E1CF dark:bg-neutral-800 p-6 rounded-lg mb-8 shadow-lg w-full lg:w-3/4 mx-auto">
                  <p className="text-gray-800 dark:text-white mb-4">{review.review}</p>
                  <div className="flex flex-col items-center">
                    <div>
                      <p className="text-lg font-semibold dark:text-white">{review.name}</p>
                      <p className="dark:text-gray-400">{review.stars}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialSlider;