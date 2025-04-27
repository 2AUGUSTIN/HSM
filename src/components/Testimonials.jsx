function Testimonials() {
    const testimonials = [
      {
        quote: "LuxeStay has revolutionized how we manage our boutique hotel. Bookings are up 30% and our staff can focus more on guests rather than paperwork.",
        author: "Sarah Johnson",
        position: "Owner, Serenity Suites",
        image: "https://i.pinimg.com/236x/a4/74/e9/a474e99634c45b4012b0b1baba6927c7.jpg"
      },
      {
        quote: "The analytics feature alone has paid for the entire system. We've optimized our pricing strategy and increased revenue by 25% in just six months.",
        author: "Michael Chen",
        position: "Revenue Manager, Grand Plaza Hotel",
        image: "https://i.pinimg.com/236x/a4/74/e9/a474e99634c45b4012b0b1baba6927c7.jpg"
      },
      {
        quote: "Customer support is outstanding. Whenever we have questions, the team responds quickly and helps us get the most out of the system.",
        author: "Elena Rodriguez",
        position: "General Manager, Coastal Retreat Resort",
        image: "https://i.pinimg.com/236x/a4/74/e9/a474e99634c45b4012b0b1baba6927c7.jpg"
      }
    ];
  
    return (
      <section className="py-20 bg-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl max-w-2xl mx-auto">
              Trusted by hotels and resorts around the world
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-blue-700 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <img
                      src={testimonial.image}
                      alt={`${testimonial.author} profile`}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.author}</h4>
                    <p className="text-blue-200">{testimonial.position}</p>
                  </div>
                </div>
                <p className="italic">&ldquo;{testimonial.quote}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Testimonials;
  