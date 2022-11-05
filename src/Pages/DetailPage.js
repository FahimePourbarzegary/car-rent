import Layout from "../Layout/Layout";
import stars from "../assets/images/stars.svg";
import Button from "../Components/Button/Button";
import Comments from "../Components/Comments/Comments";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetCarQuery } from "../Services/carsApi";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import { toast } from "react-toastify";
const DetailPage = () => {
  const { id } = useParams();
  const {
    data: car,
    error,
    isError,
    isLoading,
  } = useGetCarQuery(id ? id : skipToken);
  useEffect(() => {
    isError && toast.error(error);
  }, [isError, error]);
  useEffect(() => {
    if (!isLoading) {
      setUrlImage(car?.image[0]);
    }
  }, [isLoading, car]);
  const [urlImage, setUrlImage] = useState(car?.image[0]);
  const [showAllComments, setShowAllComments] = useState(false);
  //change image when user click it
  const changeimageHandler = (url) => {
    setUrlImage(url);
  };
  const changeCommentHandler = () => {
    setShowAllComments(!showAllComments);
  };
  if (isLoading) {
    return <div>loading</div>;
  }
  return (
    <Layout>
      <section className=" p-6 flex flex-col justify-evenly items-center my-3">
        <div className="flex flex-col justify-center items-center lg:flex-row  lg:justify-between lg:items-start lg:gap-5 ">
          {/* Image section */}
          <div className="lg:w-3/6">
            <div className=" bg-blue-600  h-[232px] lg:w-[492] lg:h-[272px] rounded-lg flex justify-center items-center  ">
              <img
                src={urlImage}
                alt="car"
                className=" w-full rounded-lg  lg:w-[492] lg:h-[272px]"
              />
            </div>
            <div className="flex justify-between py-4 my-2">
              <button
                className="w-24 h-16 "
                onClick={() => changeimageHandler(car?.image[0])}
              >
                <img
                  src={car?.image[0]}
                  alt="car"
                  className="h-16 hover:border-2 hover:border-solid hover:border-blue-600 p-1  rounded-[10px] lg:w-full"
                />
              </button>
              <button
                className=" w-24 h-16  rounded-[10px] "
                onClick={() => changeimageHandler(car?.image[1])}
              >
                {" "}
                <img
                  src={car?.image[1]}
                  alt="car"
                  className="h-16 hover:border-2 hover:border-solid hover:border-blue-600 p-1  rounded-[10px]"
                />
              </button>
              <button
                className=" w-24 h-16 rounded-[10px] "
                onClick={() => changeimageHandler(car?.image[2])}
              >
                {" "}
                <img
                  src={car?.image[2]}
                  alt="car"
                  className=" rounded-[10px] h-16 hover:border-2 hover:border-solid hover:border-blue-600 p-1  "
                />
              </button>
            </div>
          </div>
          {/* Detail section */}
          <div className=" bg-white rounded-lg p-4 flex flex-col gap-y-4 justify-evenly lg:w-3/6">
            <div>
              {" "}
              <span>{car?.name}</span>
              <div>
                <div className="flex ">
                  <img src={stars} alt="stars-rank" />
                  <span className=" text-xs font-medium text-slate-500">
                    {car?.reviewer} بازدید
                  </span>
                </div>
              </div>
            </div>
            <span className=" text-xs font-normal text-slate-500">
              {car?.description}
            </span>
            <div className="w-full grid grid-cols-2 gap-2 gap-x-4">
              <div className="flex justify-evenly items-center">
                <span className=" text-xs font-medium text-slate-500">
                  نوع خودرو{" "}
                </span>
                <span className=" font-semibold text-xs text-slate-800">
                  {car?.type}
                </span>
              </div>
              <div className="flex justify-evenly items-center">
                <span className=" text-xs font-medium text-slate-500">
                  نوع فرمان{" "}
                </span>
                <span className=" font-semibold text-xs text-slate-800">
                  {car?.steering}
                </span>
              </div>
              <div className="flex justify-evenly items-center">
                <span className=" text-xs font-medium text-slate-500">
                  ظرفیت{" "}
                </span>
                <span className=" font-semibold text-xs text-slate-800">
                  {car?.capacity} نفره
                </span>
              </div>
              <div className="flex justify-evenly items-center">
                <span className=" text-xs font-medium text-slate-500">
                  بنزین
                </span>
                <span className=" font-semibold text-xs text-slate-800">
                  {car?.gasoline} لیتر
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <div className="flex font-bold text-slate-800">
                  <p className=" font-bold text-xs self-end text-slate-500">
                    روز
                  </p>
                  <p>/{car?.price}</p>
                  <p className="px-1">تومان </p>
                </div>
                <div className={car?.off ? "" : "hidden"}>
                  <p className=" line-through">{car?.off}تومان</p>
                </div>
              </div>

              <Button title="حالا اجاره کن" />
            </div>
          </div>
        </div>
        {/* Comments section */}
        <div className="w-full bg-white rounded-lg p-4 flex flex-col gap-y-4 justify-evenly mt-6">
          <div>
            <span className=" font-semibold text-xl text-slate-900">نظرات</span>
            <span className=" px-3 py-[6px] bg-blue-600 rounded mr-3 text-white font-bold">
              {car?.reviews.length}
            </span>
          </div>
          <div className="flex flex-col gap-y-6 ">
            {/* Comments */}
            {showAllComments
              ? car?.reviews.length
                ? car?.reviews.map((c) => {
                    return <Comments {...c} />;
                  })
                : ""
              : car?.reviews.length
              ? car?.reviews
                  .slice(0, car?.reviews.length - 1)
                  .map((c) => <Comments {...c} />)
              : ""}
            <div className="w-full flex justify-center items-center ">
              <button
                className="text-slate-600 text-xs"
                onClick={() => changeCommentHandler()}
              >
                {car?.reviews.length
                  ? showAllComments
                    ? "نمایش کمتر"
                    : "نمایش بیشتر"
                  : ""}
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DetailPage;
