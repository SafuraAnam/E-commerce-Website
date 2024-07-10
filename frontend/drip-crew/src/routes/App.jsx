// import Header from "../Components/Header";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import SideBar from "../Components/SideBar";
// import ProductList from "../Components/ProductList";
// import { Outlet } from "react-router-dom";
// import Footer from "../Components/Footer";
// function App() {
//   return (
//     <>
//       <Header></Header>
//       <div className="center-style">
//         <SideBar></SideBar>
//         <main>
//           <ProductList></ProductList>
//           <Outlet></Outlet>
//         </main>
//       </div>
//       <Footer></Footer>
//     </>
//   );
// }

// export default App;

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
      <Header className="navbar" />
      <div className="main-content">
        <SideBar className="sidebar" />
        <div className="content-area">
          <main>
            <ProductList />
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
