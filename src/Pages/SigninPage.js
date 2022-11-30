import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../Components/Button/Button";
import { UserAuth } from "../Context/AuthContext";
import { GoogleButton } from "react-google-button";
const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signIn, user, googleSignIn } = UserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      navigate(-1);
      toast.info("وارد حساب شدید.");
    } catch (e) {
      setError(e.message);
      console.log(error);
    }
  };
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (e) {
      setError(e.message);
      console.log(error);
    }
  };
  useEffect(() => {
    if (user) {
      navigate(-1);
      toast.info("وارد حساب شدید.");
    }
  }, [user, navigate]);
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center py-20 "
      >
        <div className="w-96 py-24 bg-sky-200 flex flex-col justify-evenly items-center rounded-xl gap-4">
          <div className="flex flex-col items-start gap-2 justify-center m-3">
            <label htmlFor="email" className=" text-xs font-semibold ">
              ایمیل:
            </label>
            <input
              type="email"
              name="email"
              value={email}
              className=" p-1 rounded-md"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col items-start gap-2  justify-center m-3">
            <label htmlFor="password" className=" text-xs font-semibold ">
              {"      "} رمز:
            </label>
            <input
              type="password"
              name="password"
              value={password}
              className=" p-1 rounded-md"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <Button title="ثبت نام" />
          <p className=" text-xs text-slate-600 ">
            اگر از قبل حساب ندارید{" "}
            <Link
              to="/signup"
              className=" text-sm text-slate-800 font-semibold"
            >
              ثبت نام کنید{" "}
            </Link>
          </p>
          <GoogleButton onClick={handleGoogleSignIn} />
          <p className="invisible">error</p>
        </div>
      </form>
    </>
  );
};

export default SigninPage;
