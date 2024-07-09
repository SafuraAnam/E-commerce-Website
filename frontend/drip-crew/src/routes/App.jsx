import Header from "../Components/Header";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import SideBar from "../Components/SideBar";
import ProductList from "../Components/ProductList";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <Header></Header>
      <div className="center-style">
        <SideBar></SideBar>
        <main>
          <ProductList></ProductList>
          <Outlet></Outlet>
        </main>
      </div>
    </>
  );
}

export default App;
