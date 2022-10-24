const HeroSection = () => {
  return (
    <div className="px-6 py-8 flex text-white overflow-auto gap-x-5">
      <div className=" w-80  h-60 bg-blue-700 rounded-lg px-9 pt-5 flex flex-col justify-between md:w-1/2 md:h-96">
        <div className=" w-60 h-20  grid  justify-center items-start gap-2 md:w-72 md:h-56">
          <h1 className=" font-semibold text-2xl md:text-3xl  ">
            روشی آسان برای اجاره ماشین با قیمت پایین
          </h1>
          <h6 className=" font-medium text-xs md:text-sm ">
            ارائه خدمات اجاره خودرو ارزان و امکانات امن و راحت.
          </h6>
          <button className=" px-4 py-2 bg-sky-500 rounded w-28 text-xs font-semibold md:text-base">
            حالا اجاره کن
          </button>
        </div>
        <div className="flex justify-center items-center p-1">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/car-rent-cada4.appspot.com/o/Nissan%20GT%20-%20R.svg?alt=media&token=64d0977d-84ee-476f-8ccd-54e51006d193"
            alt="car"
            className=" md:w-3/4 md:h-28"
          />
        </div>
      </div>
      <div className=" w-80  h-60 bg-sky-500 rounded-lg px-9 pt-5 flex flex-col justify-between md:w-1/2  md:h-96 d:w-1/2 ">
        <div className=" w-60 h-20  grid  justify-center items-start gap-2  md:w-72 md:h-56 m">
          <h1 className=" font-semibold text-2xl md:text-3xl  ">
            بهترین بستر برای خودرو اجاره ای
          </h1>
          <h6 className=" font-medium text-xs md:text-sm">
            سهولت در اجاره خودرو با خیال راحت و قابل اعتماد. البته با قیمت پایین
          </h6>
          <button className=" px-4 py-2 bg-blue-700 rounded w-28 text-xs font-semibold md:text-base">
            حالا اجاره کن
          </button>
        </div>
        <div className="flex justify-center items-center p-1">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/car-rent-cada4.appspot.com/o/Koenigsegg.svg?alt=media&token=af35cd23-c0ed-4e49-9448-8120779d9f74"
            alt="car"
            className=" md:w-3/4 md:h-28"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
