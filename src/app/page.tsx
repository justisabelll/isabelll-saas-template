import { Hero } from '@/components/landing-page/hero';
import { WithWithout } from '@/components/landing-page/with-without';
import { FeatureListicle } from '@/components/landing-page/features-listicle';
import { FAQSection } from '@/components/landing-page/faq';
import Pricing from '@/components/landing-page/pricing';

export default function Page() {
  return (
    <div className="min-h-screen mt-12">
      <Hero />
      <WithWithout />
      <FeatureListicle />
      <Pricing />
      <FAQSection />
    </div>
  );
}
