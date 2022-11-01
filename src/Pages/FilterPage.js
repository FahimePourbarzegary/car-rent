import { useEffect } from "react";
import { toast } from "react-toastify";
import Button from "../Components/Button/Button";
import Catalogue from "../Components/Catalogue/Catalogue";
import DatePicker from "../Components/DatePicker/DatePicker";
import Layout from "../Layout/Layout";
import { useGetCarsQuery } from "../Services/carsApi";

const FilterPage = () => {
  const { data, isLoading, isError, error } = useGetCarsQuery();
  useEffect(() => {
    isError && toast.error(error);
  }, [isError, error]);

  if (isLoading) {
    return <div>loading</div>;
  }
  return (
    <Layout>
      <section className=" relative flex flex-col md:flex-row ">
        <div className=" w-full  p-4 pr-8 bg-white md:w-60 lg:w-96">
          <div>
            <p className=" font-semibold text-xs text-slate-500">نوع خودرو</p>
            <div className="flexflex-col justify-center items-start p-2 mt-2">
              <div class="flex items-center mb-4">
                <input
                  id="sport"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500  ml-2 focus:ring-2"
                />
                <label for="sport" class="ml-2  font-semibold text-gray-600 ">
                  اسپورت
                </label>
              </div>
              <div class="flex items-center mb-4">
                <input
                  id="SUV"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500  ml-2 focus:ring-2"
                />
                <label for="SUV" class="ml-2  font-semibold text-gray-600 ">
                  شاسی بلند
                </label>
              </div>
              <div class="flex items-center mb-4">
                <input
                  id="sedan"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500  ml-2 focus:ring-2"
                />
                <label for="sedan" class="ml-2  font-semibold text-gray-600 ">
                  sedan(سدان)
                </label>
              </div>
              <div class="flex items-center mb-4">
                <input
                  id="coupe"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500  ml-2 focus:ring-2"
                />
                <label for="coupe" class="ml-2  font-semibold text-gray-600 ">
                  coupe(کوپه)
                </label>
              </div>
              <div class="flex items-center mb-4">
                <input
                  id="hatchback"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500  ml-2 focus:ring-2"
                />
                <label
                  for="hatchback"
                  class="ml-2  font-semibold text-gray-600 "
                >
                  hatchback(هاچ بک)
                </label>
              </div>
            </div>
          </div>
          <div>
            <p className=" font-semibold text-xs text-slate-500"> ظرفیت</p>
            <div className="flexflex-col justify-center items-start p-2 mt-2">
              <div class="flex items-center mb-4">
                <input
                  id="2"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500  ml-2 focus:ring-2"
                />
                <label for="2" class="ml-2  font-semibold text-gray-600 ">
                  2نفره
                </label>
              </div>
              <div class="flex items-center mb-4">
                <input
                  id="4"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500  ml-2 focus:ring-2"
                />
                <label for="4" class="ml-2  font-semibold text-gray-600 ">
                  4نفره
                </label>
              </div>
              <div class="flex items-center mb-4">
                <input
                  id="6"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500  ml-2 focus:ring-2"
                />
                <label for="6" class="ml-2  font-semibold text-gray-600 ">
                  6نفره
                </label>
              </div>
              <div class="flex items-center mb-4">
                <input
                  id="8"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500  ml-2 focus:ring-2"
                />
                <label for="8" class="ml-2  font-semibold text-gray-600 ">
                  8نفره به بالا
                </label>
              </div>
            </div>
          </div>

          <div>
            <label
              for="price"
              className="block mb-2 text-xs font-semibold text-slate-500 "
            >
              قیمت
            </label>
            <input
              id="price"
              type="range"
              min="1"
              max="10000000"
              step="0.5"
              class=" w-48 h-3 rounded-lg cursor-pointer ring-1 hover:bg-slate-600 outline-none form-range"
            />
          </div>
        </div>
        <section className="py-4">
          <div className=" w-full py-4 px-6 md:flex md:justify-between md:items-center md:gap-24 md:px-16 ">
            <DatePicker />
            <DatePicker />
          </div>
          <div
            className=" w-full p-6 grid gap-5
        md:grid-cols-2 md:gap-8 xl:grid-cols-3"
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
      </section>
    </Layout>
  );
};

export default FilterPage;
