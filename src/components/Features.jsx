import { Calendar, Users, PieChart, ShieldCheck, Clock, Star } from 'lucide-react';

function Features() {
  const features = [
    {
      icon: <Calendar size={40} />,
      title: "Booking Management",
      description: "Streamline your reservation process with our intuitive booking system. Track availability and manage room allocations effortlessly."
    },
    {
      icon: <Users size={40} />,
      title: "Guest Management",
      description: "Keep track of guest details, preferences, and history to provide personalized service and build lasting relationships."
    },
    {
      icon: <PieChart size={40} />,
      title: "Analytics & Reporting",
      description: "Access real-time data and comprehensive reports to make informed decisions and optimize your hotel operations."
    },
    {
      icon: <ShieldCheck size={40} />,
      title: "Secure Payments",
      description: "Process payments securely with our integrated payment system supporting multiple currencies and methods."
    },
    {
      icon: <Clock size={40} />,
      title: "Housekeeping",
      description: "Efficiently manage room cleaning schedules and maintenance tasks to ensure perfect stays for all guests."
    },
    {
      icon: <Star size={40} />,
      title: "Review Management",
      description: "Collect and respond to guest feedback to continually improve your services and reputation."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Key Features</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our comprehensive hotel management system provides everything you need to run your property efficiently
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;