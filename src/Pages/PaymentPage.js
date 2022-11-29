import { skipToken } from "@reduxjs/toolkit/dist/query";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Layout from "../Layout/Layout";
import {
  useGetCarQuery,
  useUpdatePaymentCarMutation,
} from "../Services/carsApi";
import stars from "../assets/images/stars.svg";
import DatePicker from "../Components/DatePicker/DatePicker";
import parsian from "../assets/images/parsian.png";
import meli from "../assets/images/bank meli.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { UserAuth } from "../Context/AuthContext";
const PaymentPage = () => {
  const { user } = UserAuth();
  const [updatePaymentCar] = useUpdatePaymentCarMutation();
  const { id } = useParams();
  const {
    data: car,
    error,
    isError,
    isLoading,
  } = useGetCarQuery(id ? id : skipToken);
  const navigate = useNavigate();
  const checkRef = useRef(null);
  const [isRentShow, setIsRentShow] = useState(false);
  const [pickUp, setPickUp] = useState({
    town: "تهران",
    date: null,
    time: null,
  });
  const [dropOff, setDropOff] = useState({
    town: "تهران",
    date: null,
    time: null,
  });
  const [paymentMethod, setPaymentMethod] = useState("meli");
  const rentCarHandler = async (e) => {
    //check input and checkbox
    e.preventDefault();
    if (
      checkRef.current.checked &&
      pickUp.date &&
      pickUp.time &&
      dropOff.date &&
      dropOff.time
    ) {
      //set value to send
      const paymentCarInf = {
        ...car,
        paymentinfo: car?.paymentinfo
          ? [
              ...car?.paymentinfo,
              {
                uid: user.uid,
                pickup: {
                  town: pickUp.town,
                  date: new Date(pickUp.date).toLocaleDateString(),
                  time: new Date(pickUp.time).toLocaleTimeString(),
                },
                dropoff: {
                  town: dropOff.town,
                  date: new Date(dropOff.date).toLocaleDateString(),
                  time: new Date(dropOff.time).toLocaleTimeString(),
                },
                price:
                  ((dropOff.date - pickUp.date) / (1000 * 3600 * 24)) *
                  car?.price,
              },
            ]
          : [
              {
                uid: user.uid,
                pickup: {
                  town: pickUp.town,
                  date: new Date(pickUp.date).toLocaleDateString(),
                  time: new Date(pickUp.time).toLocaleTimeString(),
                },
                dropoff: {
                  town: dropOff.town,
                  date: new Date(dropOff.date).toLocaleDateString(),
                  time: new Date(dropOff.time).toLocaleTimeString(),
                },
                price:
                  ((dropOff.date - pickUp.date) / (1000 * 3600 * 24)) *
                  car?.price,
              },
            ],
      };

      //if car isnt rent
      if (!car?.paymentinfo) {
        await updatePaymentCar({ id, paymentCarInf });
        toast.success(`اجاره شد${car?.name}`);
        navigate("/");
      } else {
        // car is rent before so check dates
        //check payment car date and compare with date that user set
        const filteredDates = car?.paymentinfo
          .map((dbpay) => {
            console.log(car?.paymentinfo);
            if (
              (new Date(pickUp.date) < new Date(dbpay.pickup.date) ||
                new Date(pickUp.date) > new Date(dbpay.dropoff.date)) &&
              (new Date(dbpay.dropoff.date) < new Date(dropOff.date) ||
                new Date(dropOff.date) < new Date(dbpay.pickup.date))
            ) {
              return true;
            } else {
              return false;
            }
          })
          .includes(false);
        //if filteredDates have false so date isnt good and car rent before it
        if (filteredDates) {
          toast.error("این ماشین قبلا در این تاریخ اجاره شده است ");
        } else {
          await updatePaymentCar({ id, paymentCarInf });
          toast.success(`اجاره شد${car?.name}`);
          navigate("/");
        }
      }
    } else {
      toast.error("ورودی ها رو چک کن");
    }
  };
  useEffect(() => {
    isError && toast.error(error.message);
  }, [isError, error]);
  if (isLoading) {
    return <div>loading</div>;
  }
  return (
    <Layout>
      <section className=" px-6 py-8 grid gap-3 lg:grid-cols-2  lg:gap-x-3 ">
        {/*Rental summary */}
        <div className=" p-6 bg-white rounded-lg lg:h-96 ">
          <button
            className="flex self-start text-slate-500"
            onClick={() => navigate(-1)}
          >
            <FontAwesomeIcon icon={faLeftLong} />
          </button>
          <p className=" font-bold text-slate-800 my-2"> اجاره خودرو</p>
          <div className="flex items-center justify-start ">
            <div className=" bg-blue-700 w-28 flex items-center justify-center py-6 px-2 rounded-lg ml-6">
              <img src={car?.image[0]} alt="car-img" className=" w-24" />
            </div>
            <div>
              {" "}
              <span className=" font-bold text-xl">{car?.name}</span>
              <div>
                <div className=" lg:flex">
                  <img src={stars} alt="stars-rank" />
                  <span className=" text-xs font-medium text-slate-500">
                    {car?.reviewer} بازدید
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center py-2">
              <p className=" font-semibold text-slate-500 text-xs  lg:text-base lg:font-medium">
                قیمت
              </p>{" "}
              <p className=" font-semibold">
                {/*calculate number of day */}
                {pickUp.date && dropOff.date
                  ? (dropOff.date - pickUp.date) / (1000 * 3600 * 24)
                  : "1"}
                *{car?.price} تومان
              </p>
            </div>
            <div className="flex justify-between items-center py-2">
              <p className=" font-semibold text-slate-500 text-xs lg:text-base lg:font-medium">
                مالیات
              </p>{" "}
              <p className=" font-semibold">0 تومان </p>
            </div>
          </div>
          <div className="flex items-center justify-center ">
            <input
              type="text"
              name="promo"
              placeholder="کد تخفیف"
              className=" bg-slate-100 rounded-r-xl w-full p-4 text-xs font-bold outline-none "
            />
            <button className=" bg-slate-100 rounded-l-xl p-4 text-xs font-bold">
              اعمال
            </button>
          </div>
          <div className="flex justify-between items-center py-4">
            <p className=" text-xl font-bold">قیمت نهایی</p>
            <p className=" font-bold">
              {pickUp.date && dropOff.date
                ? ((dropOff.date - pickUp.date) / (1000 * 3600 * 24)) *
                  car?.price
                : car?.price}
            </p>
          </div>
        </div>
        {/*3 section */}
        <div className="grid gap-3 lg:row-start-1">
          {" "}
          {/*rental info */}
          <div className=" p-6 bg-white rounded-lg ">
            <DatePicker
              title="دریافت خودرو"
              data={pickUp}
              setData={setPickUp}
            />
            <DatePicker
              title="تحویل خودرو"
              data={dropOff}
              setData={setDropOff}
            />
            <div className=" w-full p-2 border-2 border-blue-400 bg-blue-100 rounded-xl text-sm">
              {" "}
              <div
                onClick={() => {
                  setIsRentShow(!isRentShow);
                }}
              >
                {" "}
                <FontAwesomeIcon
                  icon={faCircleInfo}
                  className=" text-blue-500 px-2"
                />
                <span>وضعیت اجاره ماشین</span>
              </div>
              <div className={isRentShow ? "visible" : "hidden"}>
                {car?.paymentinfo
                  ? car?.paymentinfo.map((p, index) => {
                      return (
                        <p key={index} className="p-3">
                          {p.pickup.date} تا {p.dropoff.date}
                        </p>
                      );
                    })
                  : "تا به حال اجاره نشده"}
              </div>
            </div>
          </div>
          {/*method payment */}
          <div className=" p-6 bg-white rounded-lg">
            <p>روش پرداخت</p>
            <div className="flex  justify-evenly items-start p-4">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="radio"
                  name="paymentmethodradio"
                  id="parsian"
                  value="parsian"
                  checked={paymentMethod === "parsian"}
                  onChange={() => setPaymentMethod("parsian")}
                />
                <label
                  className="form-check-label inline-block text-gray-800"
                  htmlFor="parsian"
                >
                  <img src={parsian} alt="پارسیان" className="w-28" />
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="radio"
                  name="paymentmethodradio"
                  id="meli"
                  value="meli"
                  checked={paymentMethod === "meli"}
                  onChange={() => setPaymentMethod("meli")}
                />
                <label
                  className="form-check-label inline-block text-gray-800"
                  htmlFor="meli"
                >
                  <img src={meli} alt="ملی" className="w-28" />
                </label>
              </div>
            </div>
          </div>
          {/*confirm  */}
          <div className=" p-6 bg-white rounded-lg flex flex-col gap-2 items-start">
            <div className=" p-3 bg-slate-100 rounded-xl">
              {" "}
              <input
                type="checkbox"
                id="confirm"
                ref={checkRef}
                className="ml-4"
                required=""
              />
              <label htmlFor="confirm">
                {" "}
                من با تمامی{" "}
                <a href={`/payment/${id}`} className=" underline">
                  قوانین وشرایط سایت{" "}
                </a>
                و
                <a href={`/payment/${id}`} className=" underline">
                  سیاست حفظ حریم خصوصی{" "}
                </a>
                موافقم.
              </label>
            </div>
            <div className=" flex items-start">
              <div className=" w-full flex justify-center items-center">
                <button
                  type="submit"
                  className=" py-3 px-2 text-center bg-blue-700  rounded text-white font-semibold text-base hover:bg-blue-500  "
                  onClick={rentCarHandler}
                >
                  اجاره خودرو
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PaymentPage;
