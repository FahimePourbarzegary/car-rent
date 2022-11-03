import stars from "../../assets/images/stars.svg";
import image from "../../assets/images/user.jpg";
const Comments = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <div className="flex gap-x-2">
          <div className=" w-11 h-11 rounded-full">
            <img
              src={image}
              alt="user-image"
              aria-hidden
              className=" w-full h-11 h-autoshadow rounded-full max-w-ful align-middle border-none object-cover object-fit "
            />
          </div>
          <div>
            <p className=" font-semibold text-base text-slate-900">نام</p>
            <p className=" font-medium text-xs text-slate-600">شغل</p>
          </div>
        </div>
        <div>
          <p className="text-xs text-slate-600">1401/2/2</p>
          <img src={stars} alt="stars-rank" />
        </div>
      </div>
      <div className=" font-normal text-xs text-slate-600 mr-11 mt-4">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است.
      </div>
    </div>
  );
};

export default Comments;
