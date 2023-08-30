import Footer from "../../components/Footer";
import AboutOneCenter from "./AboutOneCenter";
import Faqs from "./Faqs";
import Features from "./Features";
import HeroSection from "./HeroSection";
import Reviews from "./Reviews";
import WaitList from "./WaitList";

function Home() {
  return (
    <div>
      <HeroSection />
      <AboutOneCenter />
      <Features />
      <WaitList />
      <Reviews />
      <Faqs />
      <Footer />
    </div>
  );
}

export default Home;
