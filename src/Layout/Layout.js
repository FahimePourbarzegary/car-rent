import NavigationBar from "../Components/NavigationBar/NavigationBar";

const Layout = ({ children }) => {
  return (
    <div>
      <NavigationBar />
      {children}
    </div>
  );
};

export default Layout;
