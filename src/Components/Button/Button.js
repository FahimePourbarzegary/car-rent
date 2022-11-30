const Button = ({ title }) => {
  return (
    <div className=" w-full flex justify-center items-center">
      <button
        type="submit"
        className="py-3 px-2 text-center bg-blue-700  rounded text-white font-semibold text-base hover:animate-pulse  hover:bg-blue-500  "
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
