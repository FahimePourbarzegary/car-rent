const Footer = () => {
  return (
    <div className="p-6 md:bg-white md:flex md:flex-wrap md:justify-between md:h-24">
      <div className=" w-52 h-20  flex flex-col justify-between mb-4">
        <span className="font-bold text-2xl text-blue-600  md:text-3xl">
          MORENT
        </span>
        <p className=" text-xs text-slate-400 font-medium">
          چشم انداز ما ارائه راحتی و کمک به افزایش تجارت شماست.
        </p>
      </div>
      <div className="flex flex-wrap mb-3">
        <div className=" w-36 h-48 flex flex-col justify-evenly">
          <h1 className=" text-xl font-semibold text-slate-800 mb-2">
            درباره ما
          </h1>
          <p className=" text-base font-medium text-slate-400">چگونگی کار</p>
          <p className=" text-base font-medium text-slate-400">ویژگی ها</p>
          <p className=" text-base font-medium text-slate-400">شراکت</p>
          <p className=" text-base font-medium text-slate-400">رابطه تجاری</p>
        </div>
        <div className=" w-36 h-48 flex flex-col justify-evenly">
          <h1 className=" text-xl font-semibold text-slate-800 mb-2">
            درباره ما
          </h1>
          <p className=" text-base font-medium text-slate-400">چگونگی کار</p>
          <p className=" text-base font-medium text-slate-400">ویژگی ها</p>
          <p className=" text-base font-medium text-slate-400">شراکت</p>
          <p className=" text-base font-medium text-slate-400">رابطه تجاری</p>
        </div>
        <div className=" w-36 h-48 flex flex-col justify-evenly">
          <h1 className=" text-xl font-semibold text-slate-800 mb-2">
            درباره ما
          </h1>
          <p className=" text-base font-medium text-slate-400">چگونگی کار</p>
          <p className=" text-base font-medium text-slate-400">ویژگی ها</p>
          <p className=" text-base font-medium text-slate-400">شراکت</p>
          <p className=" text-base font-medium text-slate-400">رابطه تجاری</p>
        </div>
      </div>
      <div className="flex flex-wrap justify-between py-3 h-full md:border-t-2 w-full">
        <div className="flex justify-between w-96 gap-2 mb-3">
          <p>سیاست حفظ حریم خصوصی</p>
          <p>شرایط و ضوابط</p>
        </div>
        <p>© 2022 MORENT. تمامی حقوق محفوظ است</p>
      </div>
    </div>
  );
};

export default Footer;
