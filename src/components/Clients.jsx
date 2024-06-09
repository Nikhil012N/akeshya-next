import Image from 'next/image';
import client1 from '/public/assets/client-1.png';
import client2 from '/public/assets/client-2.png';
import client3 from '/public/assets/client-3.png';
import client4 from '/public/assets/client-4.png';
import client5 from '/public/assets/client-5.png';
import client6 from '/public/assets/client-6.png';

const Clients = () => {
  return (
    <section id="clients" className="clients py-8 bg-gray-100">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center">
          {[client1, client2, client3, client4, client5, client6].map((client, index) => (
            <div
              key={index}
              className="w-1/2 sm:w-1/3 lg:w-1/6 p-2 flex justify-center items-center"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <Image 
                src={client} 
                alt={`Client ${index + 1}`} 
                width={150} 
                height={100} 
                className="img-fluid"
                placeholder="blur"
                loading='lazy'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
