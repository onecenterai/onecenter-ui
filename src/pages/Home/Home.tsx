import { useDispatch } from "react-redux";
import Footer from "../../components/Footer";
import { getPartners } from "../../slices/PartnerSlice";
import AboutOneCenter from "./AboutOneCenter";
import Faqs from "./Faqs";
import Features from "./Features";
import HeroSection from "./HeroSection";
import { AppDispatch } from "../../store";
import { useEffect } from "react";

function Home() {
  return (
    <div>
      <HeroSection />
      <AboutOneCenter />
      <Features />
      <Faqs />
      <Footer />
    </div>
  );
}

export default Home;
