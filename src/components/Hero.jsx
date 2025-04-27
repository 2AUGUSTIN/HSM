import { HomeIcon } from 'lucide-react';

function Hero() {
  return (
    <section
      className="bg-cover bg-center h-screen flex flex-col justify-center items-center text-white p-6" style={{ backgroundImage: 'url(https://emmaushostel.com/static/media/s1.6960165b94d3ce76dfc5.JPG)' }}
    >
      {/* Hero Content */}
      <div className="text-center max-w-4xl mx-auto bg-red-400 bg-opacity-20 p-6 rounded-lg bg-no-repeat bg-cover bg-center object-cover" >
        <h1 className="text-5xl font-bold mb-4">Welcome to Hostel</h1>
        <p className="text-xl mb-6">
          Your all-in-one hotel management system. Manage bookings, customers, and operations with ease.
        </p>
        
        {/* Call to Action Button */}
        <div className="flex justify-center space-x-4">
          <a
            href="#features"
            className="bg-white text-blue-800 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition-all"
          >
            Learn More
          </a>
          <a
            href="#book-now"
            className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-800 transition-all"
          >
            Book Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;