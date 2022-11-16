import { useEffect } from "react";
import Button from "../Components/Button/Button";
import Catalogue from "../Components/Catalogue/Catalogue";
import DatePicker from "../Components/DatePicker/DatePicker";
import HeroSection from "../Components/HeroSection/HeroSection";
import Layout from "../Layout/Layout";
import { useGetCarsQuery } from "../Services/carsApi";
import { toast } from "react-toastify";
const HomePage = ({ searchValue = "", setSearchValue }) => {
  const { data, isLoading, isError, error } = useGetCarsQuery();

  useEffect(() => {
    isError && toast.error(error);
  }, [isError, error]);

  if (isLoading) {
    return <div>loading</div>;
  }

  console.log(error);
  return (
    <Layout setSearchValue={setSearchValue} searchValue={searchValue}>
      <HeroSection />
      <div className=" w-full py-4 px-6 md:flex md:justify-between md:items-center md:gap-24 md:px-16 ">
        <DatePicker />
        <DatePicker />
      </div>
      {/*popular  section */}
      <section className="py-4">
        <div className="w-full  px-8 flex justify-between items-center">
          <p className=" md:pr-18 font-semibold text-slate-600 text-base md:text-xl">
            خودرو های محبوب{" "}
          </p>
          <a href="/" className=" text-sky-700 font-semibold text-base">
            نمایش همه
          </a>
        </div>

        <div className=" w-full flex overflow-auto p-6 gap-5 xl:grid  md:gap-10 xl:grid-cols-4">
          {data?.map((item) => {
            if (item.id < 5) {
              return (
                <div key={item.id}>
                  <Catalogue {...item} />
                </div>
              );
            } else return "";
          })}
        </div>
      </section>
      {/*reccommand  section */}
      <section className="py-4">
        <p className=" pr-8  md:pr-18 font-semibold text-slate-600 text-base md:text-xl">
          خودرو های پیشنهادی
        </p>
        <div
          className=" w-full p-6 grid gap-5
        md:grid-cols-2 md:gap-8 xl:grid-cols-4"
        >
          {data?.map((item) => {
            return (
              <div key={item.id}>
                <Catalogue {...item} />
              </div>
            );
          })}
        </div>

        <Button title="   خودرو های بیشتر" />
      </section>
    </Layout>
  );
};

export default HomePage;
