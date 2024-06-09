import { FaDribbble, FaFile, FaGlobe, FaTachometerAlt } from "react-icons/fa";

const Services = () => {
  return (
    <section id="services" className="services py-12">
      <div className="container mx-auto px-4">
        <div className="section-title text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-4">Services</h2>
          <p>
            Akeshya will serve as your consultant and development partner to
            help you turn your idea into a reality.
          </p>
        </div>

        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <div
              className="icon-box bg-white p-6 shadow-lg rounded-lg flex flex-col items-center text-center h-full"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="icon mb-4 text-4xl text-white">
                <FaDribbble />
              </div>
              <h4 className="title mb-4 text-xl font-semibold">
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  Design
                </a>
              </h4>
              <p className="description text-gray-700">
                Our web design services can assist you in reclaiming your
                company&#39;s online image. Your business will flourish on the
                Internet thanks to the combination of style and technology we
                provide, as well as our experience.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <div
              className="icon-box bg-white p-6 shadow-lg rounded-lg flex flex-col items-center text-center h-full"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="icon mb-4 text-4xl text-white">
                <FaFile />
              </div>
              <h4 className="title mb-4 text-xl font-semibold">
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  Development
                </a>
              </h4>
              <p className="description text-gray-700">
                Our development team can construct platforms to help your
                business thrive by creating powerful customised solutions
                tailored to your particular requirements. Akeshya makes use of
                established and effective web development tools.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <div
              className="icon-box bg-white p-6 shadow-lg rounded-lg flex flex-col items-center text-center h-full"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="icon mb-4 text-4xl text-white">
                <FaGlobe />
              </div>
              <h4 className="title mb-4 text-xl font-semibold">
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  Marketing
                </a>
              </h4>
              <p className="description text-gray-700">
                A beautiful website is the foundation of effective marketing.
                Our customers achieve success where it counts—in the real
                world—by combining our proven approach with our passion for
                improving conversions and increasing ROI.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <div
              className="icon-box bg-white p-6 shadow-lg rounded-lg flex flex-col items-center text-center h-full"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="icon mb-4 text-4xl text-white ">
                <FaTachometerAlt />
              </div>
              <h4 className="title mb-4 text-xl font-semibold">
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  Support
                </a>
              </h4>
              <p className="description text-gray-700">
                Since the beginning, we at Akeshya have specialised in website
                maintenance. We recognise the significance of having your
                business online 24 hours a day, seven days a week, and we&#39;ve
                created a system to ensure that we&#39;re always available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
