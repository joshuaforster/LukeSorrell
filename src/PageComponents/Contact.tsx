import React from 'react';
import { useInView } from 'react-intersection-observer';

export default function Contact() {
  const { ref: headingRef, inView: headingInView } = useInView({ triggerOnce: true, threshold: 0.75 });
  const { ref: emailRef, inView: emailInView } = useInView({ triggerOnce: true, threshold: 0.75 });
  const { ref: followUsRef, inView: followUsInView } = useInView({ triggerOnce: true, threshold: 0.75 });
  const { ref: formRef, inView: formInView } = useInView({ triggerOnce: true, threshold: 0.75 });

  return (
    <section className="bg-[#F26321] dark:bg-dark-gray">
      <div className="container px-6 py-12 mx-auto">
        <div className="lg:flex lg:items-center lg:-mx-6">
          <div className="lg:w-1/2 lg:mx-6">
            <h1
              ref={headingRef}
              className={`text-2xl font-semibold text-black capitalize dark:text-white lg:text-3xl transition-transform duration-700 ease-in-out ${
                headingInView ? 'transform translate-y-0 opacity-100' : 'transform -translate-y-10 opacity-0'
              }`}
            >
              Contact us for more info
            </h1>

            <div className="mt-6 space-y-8 md:mt-8">
              <p
                ref={emailRef}
                className={`flex items-start -mx-2 transition-transform duration-700 ease-in-out ${
                  emailInView ? 'transform translate-y-0 opacity-100' : 'transform -translate-y-10 opacity-0'
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-black dark:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="mx-2 text-black truncate w-72 dark:text-white">
                  luke.sorrell22@outlook.com
                </span>
              </p>
            </div>

            <div className="mt-6 w-80 md:mt-8">
              <h3
                ref={followUsRef}
                className={`text-black dark:text-white transition-transform duration-700 ease-in-out ${
                  followUsInView ? 'transform translate-y-0 opacity-100' : 'transform -translate-y-10 opacity-0'
                }`}
              >
                Follow us
              </h3>

              <div className="flex mt-4 -mx-1.5">
                <a
                  className="mx-1.5 dark:hover:text-white text-black transition-colors duration-300 transform dark:text-white"
                  href="https://www.facebook.com/luke.sorrell.961"
                >
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 10.2222V13.7778H9.66667V20H13.2222V13.7778H15.8889L16.7778 10.2222H13.2222V8.44444C13.2222 8.2087 13.3159 7.9826 13.4826 7.81591C13.6493 7.64921 13.8754 7.55556 14.1111 7.55556H16.7778V4H14.1111C12.9324 4 11.8019 4.46825 10.9684 5.30175C10.1349 6.13524 9.66667 7.2657 9.66667 8.44444V10.2222H7Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>

                <a
                  className="mx-1.5 dark:hover:text-white text-black transition-colors duration-300 transform dark:text-white"
                  href="https://www.instagram.com/_luke.sorrell_/&ved=2ahUKEwjsr4_0ubqGAxWpU0EAHU9JAOwQFnoECBUQAQ&usg=AOvVaw1NYxL_m6S9nlBntWvoOFp9"
                >
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.9294 7.72275C9.65868 7.72275 7.82715 9.55428 7.82715 11.825C7.82715 14.0956 9.65868 15.9271 11.9294 15.9271C14.2 15.9271 16.0316 14.0956 16.0316 11.825C16.0316 9.55428 14.2 7.72275 11.9294 7.72275ZM11.9294 14.4919C10.462 14.4919 9.26239 13.2959 9.26239 11.825C9.26239 10.354 10.4584 9.15799 11.9294 9.15799C13.4003 9.15799 14.5963 10.354 14.5963 11.825C14.5963 13.2959 13.3967 14.4919 11.9294 14.4919ZM17.1562 7.55495C17.1562 8.08692 16.7277 8.51178 16.1994 8.51178C15.6674 8.51178 15.2425 8.08335 15.2425 7.55495C15.2425 7.02656 15.671 6.59813 16.1994 6.59813C16.7277 6.59813 17.1562 7.02656 17.1562 7.55495ZM19.8731 8.52606C19.8124 7.24434 19.5197 6.10901 18.5807 5.17361C17.6453 4.23821 16.51 3.94545 15.2282 3.88118C13.9073 3.80621 9.94787 3.80621 8.62689 3.88118C7.34874 3.94188 6.21341 4.23464 5.27444 5.17004C4.33547 6.10544 4.04628 7.24077 3.98201 8.52249C3.90704 9.84347 3.90704 13.8029 3.98201 15.1238C4.04271 16.4056 4.33547 17.5409 5.27444 18.4763C6.21341 19.4117 7.34517 19.7045 8.62689 19.7687C9.94787 19.8437 13.9073 19.8437 15.2282 19.7687C16.51 19.708 17.6453 19.4153 18.5807 18.4763C19.5161 17.5409 19.8089 16.4056 19.8731 15.1238C19.9481 13.8029 19.9481 9.84704 19.8731 8.52606ZM18.1665 16.5412C17.8881 17.241 17.349 17.7801 16.6456 18.0621C15.5924 18.4799 13.0932 18.3835 11.9294 18.3835C10.7655 18.3835 8.26272 18.4763 7.21307 18.0621C6.51331 17.7837 5.9742 17.2446 5.69215 16.5412C5.27444 15.488 5.37083 12.9888 5.37083 11.825C5.37083 10.6611 5.27801 8.15832 5.69215 7.10867C5.97063 6.40891 6.50974 5.8698 7.21307 5.58775C8.26629 5.17004 10.7655 5.26643 11.9294 5.26643C13.0932 5.26643 15.596 5.17361 16.6456 5.58775C17.3454 5.86623 17.8845 6.40534 18.1665 7.10867C18.5843 8.16189 18.4879 10.6611 18.4879 11.825C18.4879 12.9888 18.5843 15.4916 18.1665 16.5412Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 lg:w-1/2 lg:mx-6">
            <div
              ref={formRef}
              className={`w-full px-8 py-10 mx-auto overflow-hidden bg-[#FFEFCE] rounded-lg dark:bg-[#0C0500] lg:max-w-xl transition-transform duration-700 ease-in-out ${
                formInView ? 'transform translate-y-0 opacity-100' : 'transform translate-y-10 opacity-0'
              }`}
            >
              <h1 className="text-lg font-medium dark:text-white text-gray-700">What do you want to ask</h1>

              <form
                className="mt-6"
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                data-netlify-recaptcha="true"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="hidden">
                  <label>
                    Don’t fill this out: <input name="bot-field" />
                  </label>
                </div>

                <div className="flex-1">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-white">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-white dark:bg-dark-gray dark:text-white dark:border-white focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="flex-1 mt-6">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-white">Email address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="johndoe@example.com"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-white dark:bg-dark-gray dark:text-white dark:border-white focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="w-full mt-6">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-white">Message</label>
                  <textarea
                    name="message"
                    className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:placeholder-white dark:bg-dark-gray dark:text-white dark:border-white focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Message"
                  ></textarea>
                </div>

                <div data-netlify-recaptcha="true"></div>

                <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  Get in touch
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
