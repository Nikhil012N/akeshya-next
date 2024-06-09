import { IoCheckmarkDoneSharp } from "react-icons/io5";
import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="about py-8">
      <div className="container mx-auto px-4">
        <div className="section-title" data-aos="fade-up">
          <h2 className="text-3xl font-semibold text-center">About Us</h2>
        </div>
        <div className="row content flex flex-wrap mt-8">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0" data-aos="fade-up" data-aos-delay="150">
            <p className="mb-4">
              We are Akeshya, a firm that specializes in web design and marketing. We help transform ideas into reality with a team of passionate graphic designers, web developers, and seasoned marketing advisors.
            </p>
            <ul className="list-none space-y-2">
              <li className="flex items-start gap-2">
                <IoCheckmarkDoneSharp className="w-20 h-6" />
                <p className="w-80">We started with a simple idea: do what is best for the client.</p>
              </li>
              <li className="flex items-start gap-2">
                <IoCheckmarkDoneSharp className="w-20 h-6" />
                <p className="w-80">Our methodical and individual approach to each project delivers the finest possible results for your media.</p>
              </li>
              <li className="flex items-start gap-2">
                <IoCheckmarkDoneSharp className="w-20 h-6" />
                <p className="w-80">Our day-to-day work is to solve your problems utilizing the most up-to-date, practical adaptive technology, and we have a lot of fun doing it.</p>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2 pt-4 lg:pt-0" data-aos="fade-up" data-aos-delay="300">
            <p className="mb-4">
              We&#39;re professional, but we&#39;re also friendly, and we&#39;ll always pay attention to your concerns. We expect to work with innovative people that have an open mind and are dedicated to making every idea a reality. We want to hear from you if you&#39;re interested in SEO, have Web Development ideas, or require a graphic designer who can match your goals.
            </p>
            <a href="#services" className="btn-learn-more inline-block text-white px-4 py-2 rounded-md">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
