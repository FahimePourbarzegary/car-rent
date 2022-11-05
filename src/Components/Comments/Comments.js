import stars from "../../assets/images/stars.svg";
import image from "../../assets/images/user.jpg";
const Comments = ({ name, work, review, date }) => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <div className="flex gap-x-2">
          {/*Image section */}
          <div className=" w-11 h-11 rounded-full">
            <img
              src={image}
              alt="user-image"
              aria-hidden
              className=" w-full h-11 h-autoshadow rounded-full max-w-ful align-middle border-none object-cover object-fit "
            />
          </div>
          {/*name section */}
          <div>
            <p className=" font-semibold text-base text-slate-900">{name}</p>
            <p className=" font-medium text-xs text-slate-600">{work}</p>
          </div>
        </div>
        {/*date rate section */}
        <div>
          <p className="text-xs text-slate-600">{date}</p>
          <img src={stars} alt="stars-rank" />
        </div>
      </div>
      {/*review section */}
      <div className=" font-normal text-xs text-slate-600 mr-11 mt-4">
        {review}
      </div>
    </div>
  );
};

export default Comments;
