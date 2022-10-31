import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
