import { useState, useEffect } from "react";
import StyleIconProfile from "../Components/StyleIconProfile/StyleIconProfile";
import axios from "axios";
import SideBar2 from "../Components/SideBar2";
import Chats from "../Components/Chats/Chats";
import Header from "../Components/Header";
import SideBar from "../Components/SideBar";
import { FaPersonWalkingDashedLineArrowRight } from "react-icons/fa6";
import Footer from "../Components/Footer";
const StyleIcon = () => {
  const styleIcon = {
    profileImage: "../../assets/styleIconProfileImg.jpg",
    name: "Kiara Advani",
    followers: "7.4M",
    description:
      "Passionate about fashion, turning trends into timeless statements. #FashionForward.",
    posts: [
      {
        image: "../../assets/productImage.jpg",
        newPrice: 221,
        oldPrice: 746,
        discount: 70,
      },
    ],
    recommended: [
      {
        image: "../../assets/productImage.jpg",
        newPrice: 249,
        oldPrice: 757,
        discount: 50,
      },
    ],
  };

  return (
    <>
      {" "}
      <Header />
      <SideBar />
      <div className="StyleIconProfileContainer">
        <StyleIconProfile icon={styleIcon} />
        <Footer />
      </div>
    </>
  );
};

export default StyleIcon;
