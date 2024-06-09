
import { 
  RiWindowLine, 
  RiCodeBoxLine, 
  RiCreativeCommonsByLine, 
  RiPlayCircleLine, 
  RiSearchEyeLine, 
  RiTodoLine, 
  RiMapPinLine, 
  RiBarChartGroupedLine, 
  RiContactsBookLine, 
  RiDiscLine, 
  RiCalendarEventLine, 
  RiAdvertisementFill 
} from "react-icons/ri";

const Features = () => {
  const features = [
    { icon: <RiWindowLine className="text-yellow-500 relative top-2" />, title: 'Web design' },
    { icon: <RiCodeBoxLine className="text-blue-500 relative top-2" />, title: 'Development' },
    { icon: <RiCreativeCommonsByLine className="text-red-500 relative top-2" />, title: 'Branding' },
    { icon: <RiPlayCircleLine className="text-purple-500 relative top-2" />, title: 'Media buying' },
    { icon: <RiSearchEyeLine className="text-blue-300 relative top-2" />, title: 'Search engine' },
    { icon: <RiTodoLine className="text-orange-500 relative top-2" />, title: 'Brand strategy' },
    { icon: <RiMapPinLine className="text-yellow-600 relative top-2" />, title: 'Local search marketing' },
    { icon: <RiBarChartGroupedLine className="text-indigo-500 relative top-2" />, title: 'Lead Tracking & Management' },
    { icon: <RiContactsBookLine className="text-brown-500 relative top-2" />, title: 'Contact management' },
    { icon: <RiDiscLine className="text-pink-700 relative top-2" />, title: 'Media management' },
    { icon: <RiCalendarEventLine className="text-orange-600 relative top-2" />, title: 'Social scheduling' },
    { icon: <RiAdvertisementFill className="text-green-500 relative top-2" />, title: 'Ad retargeting' },
  ];

  return (
    <section id="features" className="features py-12 ">
      <div className="container mx-auto px-4">
        <div className="section-title text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-4">Our Core Features</h2>
          <p>Akeshya is a forward-thinking and intelligent design firm that is technically and creatively capable of transforming your brand into its best digital self...</p>
        </div>

        <div className="flex flex-wrap">
          {features.map((feature, index) => (
            <div
              key={index}
              className="w-full md:w-1/2 lg:w-1/4 p-4"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <div className="icon-box bg-white p-6 shadow-lg rounded-lg text-center h-full gap-1">
                <div className="icon text-3xl mb-4">{feature.icon}</div>
                <h3 className="title text-xl font-semibold">
                  <a href="#" className="text-blue-600 hover:text-blue-800">{feature.title}</a>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
