
import Hero from "../components/Hero";
import OurProducts from "../components/OurProducts";
import HotOffers from "../components/HotOffers";
import TrendingProducts from "../components/TrendingProducts";
import Discounts from "../components/Discounts";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <TrendingProducts />
      <HotOffers />
      <OurProducts />
      <Discounts />
    </div>
  );
};

export default Home;
