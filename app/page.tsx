import About from "./About/page";
import Products from "./Components/HeroSection/Products";
import QualityPolicy from "./Components/HeroSection/QualtyPolicy";
import WhyUs from "./Components/HeroSection/WhyUs";

import Team from "./Team/page";

export default function Home() {
  return (
    <div>
      <div className="">
        <About />
      </div>
      <div className="">
        <Products />
      </div>
      <div className="">
        <Team />
      </div>

      <div className="">
        <QualityPolicy />
      </div>
      <div className="mt-10">
        <WhyUs />
      </div>
    </div>
  );
}
