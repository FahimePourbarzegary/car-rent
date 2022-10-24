import NavigationBar from "../Components/NavigationBar";

const Layout = ({ children }) => {
  return (
    <div>
      <NavigationBar />
      {children}
    </div>
  );
};

export default Layout;
