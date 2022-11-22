import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faMagnifyingGlass,
  faBell,
  faHeart,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import image from "../../assets/images/user.jpg";
import { Link } from "react-router-dom";
import { UserAuth } from "../../Context/AuthContext";
const NavigationBar = ({ searchValue, setSearchValue }) => {
  const { user } = UserAuth();

  return (
    <div className="bg-white px-6 pt-2 grid grid-rows-2 grid-cols-2 h-40 md:h-20 md:grid-cols-4 md:grid-rows-1 md:items-center text-gray-500 border-gray-100 border-1  border-solid border-b-2">
      <span className="font-bold text-2xl text-blue-600 self-center md:text-3xl">
        MORENT
      </span>
      <div className=" border-gray-100 border-2  border-solid w-full flex justify-between px-6 py-1 rounded-2xl items-center  col-span-2  order-2 md:order-1 md:col-span-2 md:w-9/12 md:rounded-3xl self-center md:mt-0 ">
        <Link to="/FilterPage" state={{ carName: searchValue }}>
          {" "}
          <FontAwesomeIcon icon={faFilter} className="cursor-pointer " />
        </Link>
        <input
          type="search"
          name="search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value.trim())}
          className=" w-full  px-3 text-xs py-3 focus:outline-none"
          placeholder="چیزی را جستجو کنید..."
        />
        <Link to="/FilterPage" state={{ carName: searchValue }}>
          {" "}
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="cursor-pointer"
          />
        </Link>
      </div>
      <div
        className="order-1 md:order-2  items-center flex w-full justify-end
       md:items-center md:justify-evenly h-full"
      >
        <Link to="/userpage/newsuser">
          <div className=" w-7 h-7 rounded-full invisible flex items-center justify-center border-gray-100 border-2  border-solid md:visible relative">
            <FontAwesomeIcon icon={faBell} />
            <div className=" w-2 h-2 bg-red-600 rounded-full absolute top-0 right-0 "></div>
          </div>
        </Link>
        <Link to="/userpage/favorites">
          <div className="w-7 h-7 rounded-full invisible flex items-center justify-center border-gray-100 border-2  border-solid md:visible relative">
            <FontAwesomeIcon icon={faHeart} />
            <div className=" w-2 h-2 bg-red-600 rounded-full absolute top-0 right-0 invisible"></div>
          </div>
        </Link>
        <Link to="/userpage">
          <div className="w-7 h-7 rounded-full invisible flex items-center justify-center border-gray-100 border-2  border-solid md:visible relative">
            <FontAwesomeIcon icon={faGear} />
            <div className=" w-2 h-2 bg-red-600 rounded-full absolute top-0 right-0 invisible"></div>
          </div>
        </Link>
        {user ? (
          <>
            <div className=" w-7 h-7 rounded-full">
              <img
                src={user.photoURL || image}
                alt="user-image"
                aria-hidden
                className=" w-full h-7 h-autoshadow rounded-full max-w-ful align-middle border-none object-cover object-fit "
              />
            </div>{" "}
          </>
        ) : (
          <Link to="/signup">ورود/ثبت نام</Link>
        )}
      </div>
    </div>
  );
};

export default NavigationBar;
