import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FilterPage from "./Pages/FilterPage";
import DetailPage from "./Pages/DetailPage";
import { useState } from "react";
import SignupPage from "./Pages/SignupPage";
import { AuthContextProvider } from "./Context/AuthContext";
import SigninPage from "./Pages/SigninPage";
import UserPage from "./Pages/UserPage";
import PaymentPage from "./Pages/PaymentPage";

function App() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <>
      <ToastContainer />
      <AuthContextProvider>
        {" "}
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                searchValue={searchValue}
                setSearchValue={setSearchValue}
              />
            }
          />
          <Route
            path="/FilterPage"
            element={
              <FilterPage
                searchValue={searchValue}
                setSearchValue={setSearchValue}
              />
            }
          />
          <Route
            path="/DetailPage/:id"
            element={
              <DetailPage
                searchValue={searchValue}
                setSearchValue={setSearchValue}
              />
            }
          />
          <Route path="/Signup" element={<SignupPage />} />
          <Route path="/Signin" element={<SigninPage />} />
          <Route path="/userpage/*" element={<UserPage />} />
          <Route path="/payment/:id" element={<PaymentPage />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
