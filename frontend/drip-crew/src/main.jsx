import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./routes/App.jsx";
import Chats from "./Components/Chats/Chats.jsx";
import Chat from "./routes/Chat.jsx";
import "./index.css";
import StyleIcon from "./routes/StyleIcon.jsx";
import WishList from "./routes/WishList.jsx";
import { ShareProvider } from "./Components/ShareContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/users",
    element: <Chat />,
  },

  {
    path: "/styleIcon",
    element: <StyleIcon />,
  },

  {
    path: "/wishlist",
    element: <WishList />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>

  <ShareProvider>
    <RouterProvider router={router}></RouterProvider>
  </ShareProvider>
  //  </React.StrictMode>
);
