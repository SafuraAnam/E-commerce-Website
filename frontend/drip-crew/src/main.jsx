import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./routes/App.jsx";
import Chats from "./Components/Chats/Chats.jsx";
import Chat from "./routes/Chat.jsx";
import "./index.css";
import StyleIcon from "./routes/StyleIcon.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    //  children:[
    //   {path:"/",element:<Home/> /*,loader:postLoader*/},
    //   {path:"/bag",element:<Bag></Bag>/*,action:createPostAction*/},
    //  ],
  },

  {
    path: "/users",
    element: <Chat />,
  },

  {
    path: "/styleIcon",
    element: <StyleIcon/>,
  },


]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
