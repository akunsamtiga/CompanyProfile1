import Cover from "./components/Cover";
import About from "./components/About";
import Founder from "./components/Founder";
import Menu from "./components/Menu";
import BestServices from "./components/BestServices";
import SWOTAnalysis from "./components/SWOTAnalysis";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import CoffeeMenu from "./components/CoffeeMenu";
import FoodMenuGrid from "./components/FoodMenuGrid";

export default function Home() {
  return (
    <main>
      <Cover />
      <About />
      <Founder />
      <Menu />
      <CoffeeMenu />
      <FoodMenuGrid />
      <BestServices />
      <Testimonials />
      <SWOTAnalysis />
      <Footer />
    </main>
  );
}
