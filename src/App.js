import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FilterPage from "./Pages/FilterPage";
import DetailPage from "./Pages/DetailPage";
import { useState } from "react";

function App() {
  const [searchValue,setSearchValue]=useState("");
  return (
    <>
      <ToastContainer />
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
      </Routes>
    </>
  );
}

export default App;
