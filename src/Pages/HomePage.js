import Button from "../Components/Button/Button";
import Catalogue from "../Components/Catalogue/Catalogue";
import DatePicker from "../Components/DatePicker/DatePicker";
import HeroSection from "../Components/HeroSection/HeroSection";
import Layout from "../Layout/Layout";

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <div className=" w-full py-4 px-6 md:flex md:justify-between md:items-center md:gap-24 md:px-16 ">
        <DatePicker />
        <DatePicker />
      </div>
      <section className="py-4">
        <div className="w-full  px-8 flex justify-between items-center">
          <p className=" md:pr-18 font-semibold text-slate-600 text-base md:text-xl">
            خودرو های محبوب{" "}
          </p>
          <a href="/" className=" text-sky-700 font-semibold text-base">
            نمایش همه
          </a>
        </div>
        <div className="flex overflow-auto p-6 gap-5 md:gap-8">
          <Catalogue />
          <Catalogue />
          <Catalogue />
          <Catalogue />
        </div>
      </section>
      <section className="py-4">
        <p className=" pr-8  md:pr-18 font-semibold text-slate-600 text-base md:text-xl">
          خودرو های پیشنهادی
        </p>
        <div
          className=" w-full p-6 grid gap-5
        md:grid-cols-2 md:gap-8 lg:grid-cols-4"
        >
          <Catalogue />
          <Catalogue />
          <Catalogue />
          <Catalogue />
          <Catalogue />
          <Catalogue />
        </div>

        <Button title="   خودرو های بیشتر" />
      </section>
    </Layout>
  );
};

export default HomePage;
