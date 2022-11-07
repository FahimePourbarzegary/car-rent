import { useEffect, useState } from "react";
//import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../Components/Button/Button";
import Catalogue from "../Components/Catalogue/Catalogue";
import DatePicker from "../Components/DatePicker/DatePicker";
import Layout from "../Layout/Layout";
import { useGetCarsQuery } from "../Services/carsApi";

const FilterPage = ({ searchValue="", setSearchValue }) => {
  const { data, isLoading, isError, error } = useGetCarsQuery();
 // const location = useLocation();
 // const searchValue = location.state.carName;
  //console.log(location.state.carName);
  const [filteredCar, setFilteredCar] = useState([]);
  const [check, setCheck] = useState({
    p2: false,
    p4: false,
    p6: false,
    p8: false,
    sport: false,
    sedan: false,
    SUV: false,
    coupe: false,
    hatchback: false,
  });
  const [price, setPrice] = useState(500);
  useEffect(() => {
    isError && toast.error(error);
  }, [isError, error]);
  const [dragStarted, setDragStarted] = useState(false);
  const [dragging, setDragging] = useState(false);
  useEffect(() => {
    let result;
    if (!isLoading) {
      result = [...data];
      result = filterByName(result);
      setFilteredCar(result);
    }
  }, [isLoading, data, searchValue]);
  useEffect(() => {
    if (dragStarted && !dragging) {
      setDragging(true);
    }
  }, [price, dragStarted, dragging]);

  console.log(price);
  if (isLoading) {
    return <div>loading</div>;
  }
  const onCheck = (e) => {
    const newCheck = { ...check, [e.target.name]: e.target.checked };
    setCheck(newCheck);
  };
  const filterByName = (array) => {
    return array.filter((c) =>
      c.name
        .toString()
        .toLowerCase()
        .includes(searchValue.toString().toLowerCase())
    );
  };
  return (
    <Layout setSearchValue={setSearchValue} searchValue={searchValue}>
      <section className=" relative flex flex-col md:flex-row ">
        <div className=" w-full  p-4 pr-8 bg-white md:w-60 lg:w-96">
          <div>
            <p className=" font-semibold text-xs text-slate-500">نوع خودرو</p>
            <div className="flexflex-col justify-center items-start p-2 mt-2">
              <div className="flex items-center mb-4">
                <input
                  id="sport"
                  type="checkbox"
                  checked={check.sport}
                  name="sport"
                  value="اسپورت"
                  onChange={(e) => onCheck(e)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500  ml-2 focus:ring-2"
                />
                <label
                  htmlFor="sport"
                  className="ml-2  font-semibold text-gray-600 "
                >
                  اسپورت
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  id="SUV"
                  type="checkbox"
                  name="SUV"
                  value="شاسی بلند(SUV)"
                  onChange={(e) => onCheck(e)}
                  checked={check.SUV}
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500  ml-2 focus:ring-2"
                />
                <label
                  htmlFor="SUV"
                  className="ml-2  font-semibold text-gray-600 "
                >
                  شاسی بلند
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  id="sedan"
                  type="checkbox"
                  name="sedan"
                  value="سدان"
                  checked={check.sedan}
                  onChange={(e) => onCheck(e)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500  ml-2 focus:ring-2"
                />
                <label
                  htmlFor="sedan"
                  className="ml-2  font-semibold text-gray-600 "
                >
                  sedan(سدان)
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  id="coupe"
                  type="checkbox"
                  name="coupe"
                  value="کوپه"
                  checked={check.coupe}
                  onChange={(e) => onCheck(e)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500  ml-2 focus:ring-2"
                />
                <label
                  htmlFor="coupe"
                  className="ml-2  font-semibold text-gray-600 "
                >
                  coupe(کوپه)
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  id="hatchback"
                  type="checkbox"
                  name="hatchback"
                  value="هاچ بک (hatchback)"
                  checked={check.hatchback}
                  onChange={(e) => onCheck(e)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500  ml-2 focus:ring-2"
                />
                <label
                  htmlFor="hatchback"
                  className="ml-2  font-semibold text-gray-600 "
                >
                  hatchback(هاچ بک)
                </label>
              </div>
            </div>
          </div>
          <div>
            <p className=" font-semibold text-xs text-slate-500"> ظرفیت</p>
            <div className="flexflex-col justify-center items-start p-2 mt-2">
              <div className="flex items-center mb-4">
                <input
                  id="2"
                  type="checkbox"
                  name="p2"
                  checked={check.p2}
                  value="2"
                  onChange={(e) => onCheck(e)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500  ml-2 focus:ring-2"
                />
                <label
                  htmlFor="2"
                  className="ml-2  font-semibold text-gray-600 "
                >
                  2نفره
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  id="4"
                  type="checkbox"
                  name="p4"
                  value="4"
                  checked={check.p4}
                  onChange={(e) => onCheck(e)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500  ml-2 focus:ring-2"
                />
                <label
                  htmlFor="4"
                  className="ml-2  font-semibold text-gray-600 "
                >
                  4نفره
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  id="6"
                  type="checkbox"
                  name="p6"
                  value="6"
                  checked={check.p6}
                  onChange={(e) => onCheck(e)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500  ml-2 focus:ring-2"
                />
                <label
                  htmlFor="6"
                  className="ml-2  font-semibold text-gray-600 "
                >
                  6نفره
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  id="8"
                  type="checkbox"
                  name="p8"
                  value="8"
                  checked={check.p8}
                  onChange={(e) => onCheck(e)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500  ml-2 focus:ring-2"
                />
                <label
                  htmlFor="8"
                  className="ml-2  font-semibold text-gray-600 "
                >
                  8نفره به بالا
                </label>
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="price"
              className="block mb-2 text-xs font-semibold text-slate-500 "
            >
              قیمت
            </label>
            <input
              id="price"
              type="range"
              min="1"
              max="100000"
              step="100"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              onMouseDown={(e) => {
                setDragStarted(true);
              }}
              onMouseUp={(e) => {
                setDragStarted(false);
                setDragging(false);
              }}
              className=" w-48 h-3 rounded-lg cursor-pointer ring-1 hover:bg-slate-600 outline-none form-range"
            />
            <p> {price} تومان</p>
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
            {filteredCar
              ? filteredCar?.map((item) => {
                  return (
                    <div key={item.id}>
                      <Catalogue {...item} />
                    </div>
                  );
                })
              : console.log(filteredCar)}
          </div>
          <Button title="   خودرو های بیشتر" />
        </section>
      </section>
    </Layout>
  );
};

export default FilterPage;
