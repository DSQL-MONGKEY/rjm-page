import About from "./container/About";
import Hero from "./container/Hero";
import Service from "./container/Service";
import Testimonials from "./container/Testimonials";
import Works from "./container/Works";

export default function Home() {
  return (
    <main className="w-full h-full">
      <Hero />
      <About />
      <Service />
      <Works />
      <Testimonials />
    </main>
  );
}
