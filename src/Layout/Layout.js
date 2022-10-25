import Footer from "../Components/Footer/Footer";
import NavigationBar from "../Components/NavigationBar/NavigationBar";

const Layout = ({ children }) => {
  return (
    <div>
      <NavigationBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
