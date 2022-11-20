import {
  faArrowRightFromBracket,
  faBell,
  faGear,
  faHeart,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { toast } from "react-toastify";
import { UserAuth } from "../Context/AuthContext";
import Layout from "../Layout/Layout";
import FavoritePage from "./FavoritePage";
import NwesUser from "./NewsUser";

const UserPage = () => {
  const { user, logOut } = UserAuth();

  if (!user) {
    toast.info("ابتدا باید وارد حساب کاربری بشوید");
    return <Navigate to="/" />;
  }
  return (
    <Layout>
      <section className=" relative flex flex-col md:flex-row ">
        <div className=" w-full flex flex-col bg-white p-4 pr-8 md:w-60 lg:w-96">
          {/* nav link dashboard user */}
          <NavLink
            to="/"
            className=" bg-sky-50 p-3 rounded-3xl text-slate-500 text-sm flex items-center justify-start gap-3 md:text-base font-semibold cursor-pointer hover:bg-white transition-all"
          >
            <FontAwesomeIcon icon={faHouse} />
            <span> خانه</span>
          </NavLink>
          <NavLink
            to="/userpage"
            className=" bg-sky-100 p-3 rounded-3xl text-slate-500 text-sm flex items-center justify-start gap-3 md:text-base font-semibold cursor-pointer hover:bg-sky-50 transition-all"
          >
            <FontAwesomeIcon icon={faGear} />
            <span> داشبورد</span>
          </NavLink>

          <NavLink
            to="/userpage/favorites"
            className={({ isActive }) =>
              isActive
                ? " bg-slate-100 p-3 rounded-3xl text-slate-500 text-sm flex items-center justify-start gap-3 md:text-base font-semibold cursor-pointer hover:bg-slate-50 transition-all"
                : "  p-3 rounded-3xl text-slate-400 text-sm flex items-center justify-start gap-3 md:text-base font-semibold cursor-pointer hover:bg-slate-50"
            }
          >
            <FontAwesomeIcon icon={faHeart} />
            <span>علاقمندی ها</span>
          </NavLink>
          <NavLink
            to="/userpage/usercard"
            className={({ isActive }) =>
              isActive
                ? " bg-slate-100 p-3 rounded-3xl text-slate-500 text-sm flex items-center justify-start gap-3 md:text-base font-semibold cursor-pointer hover:bg-slate-50 transition-all"
                : "  p-3 rounded-3xl text-slate-400 text-sm flex items-center justify-start gap-3 md:text-base font-semibold cursor-pointer hover:bg-slate-50"
            }
          >
            <FontAwesomeIcon icon={faHeart} />
            <span> کارت</span>
          </NavLink>
          <NavLink
            to="/userpage/newsuser"
            className={({ isActive }) =>
              isActive
                ? " bg-slate-100 p-3 rounded-3xl text-slate-500 text-sm flex items-center justify-start gap-3 md:text-base font-semibold cursor-pointer hover:bg-slate-50 transition-all"
                : "  p-3 rounded-3xl text-slate-400 text-sm flex items-center justify-start gap-3 md:text-base font-semibold cursor-pointer hover:bg-slate-50"
            }
          >
            <FontAwesomeIcon icon={faBell} />
            <span> اطلاعیه ها</span>
          </NavLink>
          <button
            onClick={() => {
              logOut();
            }}
            className=" p-3 rounded-3xl text-slate-500 text-sm flex items-center justify-start gap-3 md:text-base font-semibold cursor-pointer hover:bg-slate-50 transition-all"
          >
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
            خروج
          </button>
        </div>
        <Routes>
          <Route path="favorites" element={<FavoritePage />} />
          <Route path="newsuser" element={<NwesUser />} />
        </Routes>
      </section>
    </Layout>
  );
};

export default UserPage;
