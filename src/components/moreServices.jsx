import React from 'react';
const MoreServices = () => {
  return (
    <section id="more-services" className="more-services py-12 ">
      <div className="container mx-auto px-4">
        <div className="section-title text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-4">Our Process</h2>
          <p>Over the years we’ve evolved a tested method for attaining achievement for each one of our clients.</p>
        </div>

        <div className="flex flex-wrap">
          {services.map((service, index) => (
            <div key={index} className="w-full md:w-1/2 p-4" data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
              <div
                className="card bg-cover bg-center rounded-lg  flex flex-col justify-end h-96"
                style={{ backgroundImage: `url(${service.image})` }}
              >
                <div className="card-body bg-white  p-6 rounded">
                  <h5 className="card-title text-xl font-semibold"><a href="#">{service.title}</a></h5>
                  <p className="card-text text-gray-700">{service.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const services = [
  {
    title: "1. Planning",
    text: "We help you turn all of your ideas into a digital product that meets all of your requirements. We begin each project by determining its scope and needs. This is done by collaborating closely with you to ensure that we're all on the same page.",
    image: "/assets/more-services-1.jpg",
  },
  {
    title: "2. Design",
    text: "We build our websites carefully through a series of workshops, wire-framing, and user experience (UX) sessions, resulting in a site that reinforces trust, conveys important brand messaging, and provides a return on innovation.",
    image: "/public/assets/more-services-2.jpg",
  },
  {
    title: "3. Development",
    text: "We provide extensive front-end and back-end development that allows your idea to stand alone. Our in-house developers work side-by-side with the artistic team to seek out natural breakpoints inside the content and order practicality based on acknowledged statistics.",
    image: "/public/assets/more-services-3.jpg",
  },
  {
    title: "4. Marketing",
    text: "We come up with ideas and campaigns to help your business prosper online. Our campaigns and virtual approach have a verified tune report of accomplishing brilliant results, gathering new leads and site visitors in your website and assist them convert.",
    image: "/public/assets/more-services-4.jpg",
  },
];

export default MoreServices;
