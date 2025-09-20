import Hero from "@/components/sections/hero";
import WhyUs from "@/components/sections/whyUs";
import WhatWeDo from "@/components/sections/whatWeDo";
import HowItWorks from "@/components/sections/howItWorks";
import Faq from "@/components/sections/faq";
import AboutUs from "@/components/sections/aboutUs";
import ContactUs from "@/components/sections/ContactUs";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <WhatWeDo />
      <WhyUs />
      <AboutUs />
      <HowItWorks />
      <Faq />
      <ContactUs />
    </main>
  );
}
