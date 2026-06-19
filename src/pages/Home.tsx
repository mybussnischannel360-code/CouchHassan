import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import TransformationsSection from '../components/sections/TransformationsSection';
import WhyChooseSection from '../components/sections/WhyChooseSection';
import TrainingLevelsSection from '../components/sections/TrainingLevelsSection';
import PricingSection from '../components/sections/PricingSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import FAQSection from '../components/sections/FAQSection';
import ContactSection from '../components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TransformationsSection />
      <WhyChooseSection />
      <TrainingLevelsSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
