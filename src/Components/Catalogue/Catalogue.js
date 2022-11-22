import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGasPump, faUsers, faHeart } from "@fortawesome/free-solid-svg-icons";
import faSteeringWheel from "../../assets/images/steeringwheel.svg";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import {
  useAddFavoriteMutation,
  useDeleteFavoriteMutation,
  useGetFavoritesQuery,
} from "../../Services/favoritesApi";
import { useEffect, useState } from "react";
import { UserAuth } from "../../Context/AuthContext";
import { toast } from "react-toastify";
const Catalogue = ({
  id,
  name,
  capacity,
  type,
  gasoline,
  image,
  steering,
  off,
  price,
}) => {
  const [addFavorite] = useAddFavoriteMutation();
  const [deleteFavorite] = useDeleteFavoriteMutation();
  const { data, isLoading, isError } = useGetFavoritesQuery();
  const [favoriteSign, setFavoriteSign] = useState(false);
  const { user } = UserAuth();
  //when page loaded check car is favorite for user or not
  useEffect(() => {
    if (!isLoading && !isError && user) {
      let condition = data
        ?.map((fc) => user.uid === fc.uid && fc.carid === id)
        .includes(true);
      if (condition) {
        setFavoriteSign(true);
      } else {
        setFavoriteSign(false);
      }
    }
  }, [isLoading, data, user, isError, id]);
  //addToFavoriteHandler For Add and delete Favorites car from usersFavorite by Action user
  const addToFavoriteHandler = async () => {
    //selectId for get Id of favorite to remove from db
    let selectId;
    if (user) {
      if (!isLoading && !isError) {
        //check if car in usersFavorite add it or remove it
        const condition = data
          ?.map((fc) => {
            if (user.uid === fc.uid && fc.carid === id) {
              selectId = fc.id;
              return true;
            } else {
              return false;
            }
          })
          .includes(true);
        if (!condition) {
          setFavoriteSign(true);
          await addFavorite({
            carid: id,
            name,
            capacity,
            type,
            gasoline,
            image,
            steering,
            off,
            price,
            uid: user.uid,
          });
          toast.success(` به علاقه مندی ها اضافه شد${name}`);
        } else {
          setFavoriteSign(false);
          await deleteFavorite(selectId);
          toast.error(` از علاقه مندی ها حذف شد${name}`);
        }
        console.log(condition);
      } else {
        toast.info("مشکلی رخ داده صبور باشید.");
      }
    } else {
      toast.info("ابتدا وارد حسابتان شوید.");
    }
  };
  return (
    <div className="w-full flex justify-center items-center">
      <div className=" p-4 w-80 h-60 bg-white rounded-xl flex flex-col justify-between  text-slate-500 md:w-72 md:h-96 md:p-6 ">
        {/*header  section */}
        <div className="flex justify-between items-center">
          <div>
            <p className=" font-semibold text-base text-slate-800 md:text-xl md:font-bold">
              {name}
            </p>
            <p className="font-medium text-xs md:text-sm md:font-bold">
              {type}
            </p>
          </div>
          <div>
            <button onClick={addToFavoriteHandler}>
              <FontAwesomeIcon
                icon={faHeart}
                className={favoriteSign ? "text-rose-700" : ""}
              />
            </button>
          </div>
        </div>
        {/*summary  section */}
        <div className="flex justify-between items-center md:flex-col md:h-full md:justify-evenly">
          <div>
            <img src={image && image[0]} alt="car_image" />
          </div>
          <div className="flex flex-col items-start gap-1 w-16 md:flex-row md:w-64 md:items-center md:justify-evenly  font-medium text-xs md:text-sm">
            <div className="flex items-center justify-between gap-1">
              <FontAwesomeIcon
                icon={faGasPump}
                className="text-sm md:text-2xl"
              />
              <p>{gasoline} لیتر</p>
            </div>
            <div className="flex items-center justify-between gap-1">
              <img
                src={faSteeringWheel}
                alt="icon_steering"
                className="md:w-6 md:h-6"
              />
              <p> {steering}</p>
            </div>
            <div className="flex items-center justify-between gap-1">
              <FontAwesomeIcon icon={faUsers} className="text-sm md:text-2xl" />
              <p>{capacity} نفره</p>
            </div>
          </div>
        </div>
        {/*footer  section */}
        <div className="flex justify-between items-center">
          <div>
            <div className="flex font-bold text-slate-800">
              <p className=" font-bold text-xs self-end text-slate-500">روز</p>
              <p>/{price}</p>
              <p className="px-1">تومان </p>
            </div>
            <div className={off ? "" : "hidden"}>
              <p className=" line-through">{off}تومان</p>
            </div>
          </div>
          <Link to={`/DetailPage/${id}`}>
            <Button title="حالا اجاره کن" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
