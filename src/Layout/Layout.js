import Footer from "../Components/Footer/Footer";
import NavigationBar from "../Components/NavigationBar/NavigationBar";

const Layout = ({ children, searchValue = "", setSearchValue }) => {
  return (
    <div>
      <NavigationBar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
