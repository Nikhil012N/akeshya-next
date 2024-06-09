import Image from 'next/image';

const Hero = () => {
  return (
    <section id="hero" className="flex  bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center ">
          <div className="w-full lg:w-1/2 pt-5 lg:pt-0 lg:pl-10 flex flex-col justify-center">
            <h1 className="text-4xl font-bold" data-aos="fade-up">Grow your business with Akeshya</h1>
            <h2 className="mt-4 text-2xl" data-aos="fade-up" data-aos-delay="400">We are a team of talented website designers, developers & digital marketeers</h2>
            <div className="mt-6" data-aos="fade-up" data-aos-delay="800">
              <a href="#about" className="btn-get-started scrollto text-white py-2 px-4 rounded">Get Started</a>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center" data-aos="fade-left" data-aos-delay="200">
            <Image src="/assets/hero-img.png" className="img-fluid animated" alt="Hero Image"  width={600} height={500} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
