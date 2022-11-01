import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FilterPage from "./Pages/FilterPage";
function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/FilterPage" element={<FilterPage />} />
      </Routes>
    </>
  );
}

export default App;
