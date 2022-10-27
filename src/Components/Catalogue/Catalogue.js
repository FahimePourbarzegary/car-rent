import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faGasPump, faUsers } from "@fortawesome/free-solid-svg-icons";
import faSteeringWheel from "../../assets/images/steeringwheel.svg";
import Button from "../Button/Button";
const Catalogue = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className=" p-4 w-80 h-60 bg-white rounded-xl flex flex-col justify-between  text-slate-500 md:w-72 md:h-96 md:p-6 ">
        <div className="flex justify-between items-center">
          <div>
            <p className=" font-semibold text-base text-slate-800 md:text-xl md:font-bold">
              All New Rush
            </p>
            <p className="font-medium text-xs md:text-sm md:font-bold">
              اسپورت
            </p>
          </div>
          <div>
            <FontAwesomeIcon icon={faHeart} />
          </div>
        </div>
        <div className="flex justify-between items-center md:flex-col md:h-full md:justify-evenly">
          <div>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/car-rent-cada4.appspot.com/o/Nissan%20GT%20-%20R.svg?alt=media&token=64d0977d-84ee-476f-8ccd-54e51006d193"
              alt="car_image"
            />
          </div>
          <div className="flex flex-col items-start gap-1 w-16 md:flex-row md:w-64 md:items-center md:justify-evenly  font-medium text-xs md:text-sm">
            <div className="flex items-center justify-between gap-1">
              <FontAwesomeIcon
                icon={faGasPump}
                className="text-sm md:text-2xl"
              />
              <p>2 لیتر</p>
            </div>
            <div className="flex items-center justify-between gap-1">
              <img
                src={faSteeringWheel}
                alt="icon_steering"
                className="md:w-6 md:h-6"
              />
              <p> دستی</p>
            </div>
            <div className="flex items-center justify-between gap-1">
              <FontAwesomeIcon icon={faUsers} className="text-sm md:text-2xl" />
              <p>2 نفره</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <div className="flex font-bold text-slate-800">
              <p className=" font-bold text-xs self-end text-slate-500">روز</p>
              <p>/70000</p>
              <p className="px-1">تومان </p>
            </div>
            <div className="hidden">
              <p className=" line-through invisible">11000تومان</p>
            </div>
          </div>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
