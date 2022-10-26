import DatePicker from "../Components/DatePicker/DatePicker";
import HeroSection from "../Components/HeroSection/HeroSection";
import Layout from "../Layout/Layout";

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <div className=" px-6 md:flex md:justify-between md:items-center md:gap-24">
        <DatePicker />
        <DatePicker />
      </div>
    </Layout>
  );
};

export default HomePage;
