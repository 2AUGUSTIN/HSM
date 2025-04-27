import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import PricingPlans from '../components/PricingPlans';

function HomePage() {
  return (
    <div>
      <Hero />
      <Features />
      <Testimonials />
      <PricingPlans />
    </div>
  );
}

export default HomePage;