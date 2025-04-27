import { Check } from 'lucide-react';

function PricingPlans() {
  const plans = [
    {
      name: "Starter",
      price: 49,
      features: [
        "Up to 20 rooms",
        "Basic booking management",
        "Guest profiles",
        "Email support",
        "Mobile access"
      ],
      recommended: false,
      buttonText: "Get Started"
    },
    {
      name: "Professional",
      price: 99,
      features: [
        "Up to 100 rooms",
        "Advanced booking system",
        "Guest management",
        "Analytics & reporting",
        "Payment processing",
        "24/7 support",
        "Mobile access"
      ],
      recommended: true,
      buttonText: "Best Value"
    },
    {
      name: "Enterprise",
      price: 199,
      features: [
        "Unlimited rooms",
        "Full feature access",
        "Custom integrations",
        "Dedicated account manager",
        "Staff training",
        "Advanced analytics",
        "API access"
      ],
      recommended: false,
      buttonText: "Contact Sales"
    }
  ];

  return (
    <section id="book-now" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that's right for your hotel
          </p>
        </div>

        <div className="flex flex-wrap justify-center">
          {plans.map((plan, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className={`h-full rounded-lg shadow-lg overflow-hidden ${
                plan.recommended ? 'border-2 border-blue-500 transform md:-translate-y-4' : 'border border-gray-200'
              }`}>
                {plan.recommended && (
                  <div className="bg-blue-500 text-white text-center py-2 font-semibold">
                    MOST POPULAR
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <ul className="mb-8 space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Check size={20} className="text-green-500 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-3 px-6 rounded-md font-semibold ${
                      plan.recommended
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                    }`}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingPlans;