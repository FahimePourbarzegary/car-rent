import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Catalogue from "../Components/Catalogue/Catalogue";
import { UserAuth } from "../Context/AuthContext";
import { useGetCarsQuery } from "../Services/carsApi";

const CardPage = () => {
  const { data, isLoading, isError, error } = useGetCarsQuery();
  const { user } = UserAuth();
  const [filteredCarPay, setFilteredCarPay] = useState(null);
  useEffect(() => {
    isError && toast.error(error);
  }, [isError, error]);

  useEffect(() => {
    let filteredCar = data?.filter((car) =>
      car?.paymentinfo
        ? car?.paymentinfo.filter((p) => p.uid === user.uid)
        : null
    );
    setFilteredCarPay(filteredCar);
  }, [isLoading, data, user]);
  console.log(filteredCarPay);
  if (isLoading) {
    return <div>loading</div>;
  }
  return (
    <div>
      <p className="p-8 font-semibold text-slate-600 text-base md:text-xl">
        خودرو های اخیر اجاره شده توسط شما
      </p>
      <div
        className=" w-full p-6 grid gap-5
        md:grid-cols-2  xl:grid-cols-3"
      >
        {filteredCarPay ? (
          filteredCarPay?.map((item) => {
            return (
              <>
                {item?.paymentinfo.map((paymentInfo) => {
                  if (paymentInfo.uid === user.uid) {
                    return (
                      <div
                        className="bg-blue-200 rounded-lg p-4 px-9  w-full"
                        key={item.id}
                      >
                        <p className="p-3">فیش</p>
                        <Catalogue {...item} /> <p>جزئیات</p>
                        <p>
                          از تاریخ:
                          {paymentInfo.pickup.date}--{paymentInfo.pickup.time}{" "}
                        </p>
                        <p>
                          تا تاریخ:
                          {paymentInfo.dropoff.date}--
                          {paymentInfo.dropoff.time}{" "}
                        </p>
                        <p>دریافت:{paymentInfo.pickup.town}</p>
                        <p>تحویل:{paymentInfo.dropoff.town}</p>
                        <p>قیمت:{paymentInfo.price}</p>
                        <hr />
                      </div>
                    );
                  } else {
                    return null;
                  }
                })}
              </>
            );
          })
        ) : (
          <p>موردی یافت نشد</p>
        )}
      </div>
    </div>
  );
};

export default CardPage;
