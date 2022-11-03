import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FilterPage from "./Pages/FilterPage";
import DetailPage from "./Pages/DetailPage";
function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/FilterPage" element={<FilterPage />} />
        <Route path="/DetailPage" element={<DetailPage />} />
      </Routes>
    </>
  );
}

export default App;
