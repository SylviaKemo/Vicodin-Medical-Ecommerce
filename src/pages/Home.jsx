
import Hero from "../components/Hero";
import OurProducts from "../components/OurProducts";
import HotOffers from "../components/HotOffers";
import TrendingProducts from "../components/TrendingProducts";
import Discounts from "../components/Discounts";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home">
        
        <Hero/>
        <OurProducts/>
        <HotOffers/>
        <TrendingProducts/>
        <Discounts/>
        <Footer/>
    </div>
  );
};

export default Home;
