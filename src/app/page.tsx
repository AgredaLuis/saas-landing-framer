import { CallToAction } from "@/containers/Home-sections/CallToAction";

import { Header } from "@/containers/Home-sections/Header";
import { Hero } from "@/containers/Home-sections/Hero";
import { LogoTicker } from "@/containers/Home-sections/LogoTicker";
import { Pricing } from "@/containers/Home-sections/Pricing";
import { ProductShowcase } from "@/containers/Home-sections/ProductShowcase";
import { Testimonials } from "@/containers/Home-sections/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <Pricing />
      <Testimonials />
      <CallToAction />
    </>
  );
}
