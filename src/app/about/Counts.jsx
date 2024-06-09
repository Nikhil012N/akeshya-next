"use client"
import Image from 'next/image';
import countsImg from '/public/assets/counts-img.svg';
import { BsEmojiSmile, BsJournalRichtext, BsClock, BsGlobe } from 'react-icons/bs';
import CountUp from 'react-countup';

const Counts = () => {
  return (
    <section id="counts" className="counts py-8">
      <div className="mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center lg:justify-between">
          <div
            className="w-full lg:w-5/12 flex justify-center lg:justify-start mb-4 lg:mb-0"
            data-aos="fade-right"
            data-aos-delay="150"
          >
            <Image src={countsImg} alt="" className="img-fluid" loading='lazy' />
          </div>

          <div
            className="w-full lg:w-7/12 flex flex-wrap  lg:justify-end"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <div className="w-full md:w-1/2 lg:w-1/2 flex  mb-4">
              <div className="count-box p-4 flex gap-4 ">
                <BsEmojiSmile className="text-4xl mb-2 text-primary" />    <div>
                <CountUp start={0} end={3835039} duration={2} className="text-3xl font-bold" />
                <p className="mt-2"><strong>Organic Reach</strong> (Global)</p>
                </div></div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/2 flex mb-4">
              <div className="count-box p-4 flex gap-4 ">
                <BsJournalRichtext className="text-4xl mb-2 text-primary" /> <div>
                <span><CountUp start={0} end={85} duration={3} className="text-3xl font-bold" /></span>
                <p className="mt-2"><strong>Campaigns</strong></p>
                </div></div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/2 flex  mb-4">
              <div className="count-box p-4  flex gap-4 ">
                <BsClock className="text-4xl mb-2 text-primary" /> <div>
                <CountUp start={0} end={14081} duration={3} className="text-3xl font-bold" />
                <p className="mt-2"><strong>Watch Hours</strong> (Asia)</p></div></div>
             
            </div>

            <div className="w-full md:w-1/2 lg:w-1/2 flex  mb-4">
              <div className="count-box p-4 flex gap-4">
                <BsGlobe className="text-4xl mb-2 text-primary" />
                <div>
                <CountUp start={0} end={17} duration={1}  className="text-3xl font-bold"/>
                <p className="mt-2"><strong>Excellent CTR %</strong> (Asia)</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counts;
