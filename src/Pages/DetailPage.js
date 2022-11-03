import Layout from "../Layout/Layout";
import stars from "../assets/images/stars.svg";
import Button from "../Components/Button/Button";
import Comments from "../Components/Comments/Comments";
import { useState } from "react";
const DetailPage = () => {
  const [urlImage, setUrlImage] = useState(
    "https://firebasestorage.googleapis.com/v0/b/car-rent-cada4.appspot.com/o/Nissan%20GT%20-%20R.svg?alt=media&token=64d0977d-84ee-476f-8ccd-54e51006d193"
  );
  //change image when user click it
  const changeimageHandler=(url)=>{
    setUrlImage(url);
  }
  return (
    <Layout>
      <section className=" p-6 flex flex-col justify-evenly items-center my-3">
        <div className="flex flex-col justify-center items-center lg:flex-row  lg:justify-between lg:items-start lg:gap-5 ">
          {/* Image section */}
          <div className="lg:w-3/6">
            <div className=" bg-blue-600  h-[232px] lg:w-[492]  rounded-lg ">
              <img
                src={urlImage}
                alt="car"
                className="w-full  h-[232px] rounded-lg"
              />
            </div>
            <div className="flex justify-between py-4 my-2">
              <button
                className="w-24 h-16 "
                onClick={() =>
                  changeimageHandler(
                    "https://firebasestorage.googleapis.com/v0/b/car-rent-cada4.appspot.com/o/View%203.svg?alt=media&token=3cf8eef3-ce84-4359-9bac-f90250419605"
                  )
                }
              >
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/car-rent-cada4.appspot.com/o/View%203.svg?alt=media&token=3cf8eef3-ce84-4359-9bac-f90250419605"
                  alt="car"
                  className="h-16 hover:border-2 hover:border-solid hover:border-blue-600 p-1  rounded-[10px] "
                />
              </button>
              <button
                className=" w-24 h-16  rounded-[10px] "
                onClick={() =>
                  changeimageHandler(
                    "https://firebasestorage.googleapis.com/v0/b/car-rent-cada4.appspot.com/o/View%202.svg?alt=media&token=b197ce00-1080-4013-9837-311b67990d0c"
                  )
                }
              >
                {" "}
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/car-rent-cada4.appspot.com/o/View%202.svg?alt=media&token=b197ce00-1080-4013-9837-311b67990d0c"
                  alt="car"
                  className="h-16 hover:border-2 hover:border-solid hover:border-blue-600 p-1  rounded-[10px] "
                />
              </button>
              <button
                className=" w-24 h-16 rounded-[10px] hover:border-2 hover:border-solid hover:border-blue-600 p-1 "
                onClick={() =>
                  changeimageHandler(
                    "https://firebasestorage.googleapis.com/v0/b/car-rent-cada4.appspot.com/o/Koenigsegg.svg?alt=media&token=af35cd23-c0ed-4e49-9448-8120779d9f74"
                  )
                }
              >
                {" "}
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/car-rent-cada4.appspot.com/o/Koenigsegg.svg?alt=media&token=af35cd23-c0ed-4e49-9448-8120779d9f74"
                  alt="car"
                  className=" rounded-[10px] "
                />
              </button>
            </div>
          </div>
          {/* Detail section */}
          <div className=" bg-white rounded-lg p-4 flex flex-col gap-y-4 justify-evenly lg:w-3/6">
            <div>
              {" "}
              <span>Nissan</span>
              <div>
                <div className="flex ">
                  <img src={stars} alt="stars-rank" />
                  <span className=" text-xs font-medium text-slate-500">
                    440+ بازدید
                  </span>
                </div>
              </div>
            </div>
            <span className=" text-xs font-normal text-slate-500">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد.
            </span>
            <div className="w-full grid grid-cols-2 gap-2 gap-x-4">
              <div className="flex justify-between items-center">
                <span className=" text-xs font-medium text-slate-500">
                  نوع خودرو{" "}
                </span>
                <span className=" font-semibold text-xs text-slate-800">
                  اسپورت{" "}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className=" text-xs font-medium text-slate-500">
                  نوع خودرو{" "}
                </span>
                <span className=" font-semibold text-xs text-slate-800">
                  اسپورت{" "}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className=" text-xs font-medium text-slate-500">
                  نوع خودرو{" "}
                </span>
                <span className=" font-semibold text-xs text-slate-800">
                  اسپورت{" "}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className=" text-xs font-medium text-slate-500">
                  نوع خودرو{" "}
                </span>
                <span className=" font-semibold text-xs text-slate-800">
                  اسپورت{" "}
                </span>
              </div>
            </div>
            <div className=" flex justify-between items-center gap-x-12">
              <div>
                <div className="flex font-bold text-slate-800">
                  <p className=" font-bold text-xs self-end text-slate-500">
                    روز
                  </p>
                  <p>/100000</p>
                  <p className="px-1">تومان </p>
                </div>
                <div>
                  <p className=" line-through">1000تومان</p>
                </div>
              </div>
              <Button title="حالا اجاره کن" className="self-end" />
            </div>
          </div>
        </div>
        {/* Comments section */}
        <div className="w-full bg-white rounded-lg p-4 flex flex-col gap-y-4 justify-evenly mt-6">
          <div>
            <span className=" font-semibold text-xl text-slate-900">نظرات</span>
            <span className=" px-3 py-[6px] bg-blue-600 rounded mr-3 text-white font-bold">
              13
            </span>
          </div>
          <div className="flex flex-col gap-y-6 ">
            <Comments />
            <Comments />
            <Comments />
            <div className="w-full flex justify-center items-center ">
              <button className="text-slate-600 text-xs">نمایش بیشتر</button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DetailPage;
