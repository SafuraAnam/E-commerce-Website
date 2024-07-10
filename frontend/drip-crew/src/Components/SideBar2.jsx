import { LiaShoppingBagSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";

import { HiHashtag } from "react-icons/hi2";
import productSource from "../assets/add-friend-icon.svg";
import productSource2 from "../assets/myntra.svg";
import productSource3 from "../assets/lightning-icon.svg";
import { IoPlayCircleOutline } from "react-icons/io5";

const SideBar2 = () => {
  const navigate = useNavigate();

  const handleRedirect = (path) => {
    navigate(path);
  };

  return (
    <>
      <div className="sidebar2">
        <div className="sidebar2-option" onClick={() => handleRedirect("/")}>
          <img src={productSource2} size={24} />
          {/* <GiClothes size={24} /> */}
          <span>fwd</span>
        </div>
        <div className="sidebar2-option">
          <IoPlayCircleOutline size={24} />
          <span>Minis</span>
        </div>
        <div
          className="sidebar2-option"
          type="button"
          onClick={() => {
            handleRedirect("/");
          }}
        >
          <img src={productSource3} size={24} />
          {/* <FaUsers size={24} /> */}
          <span>Streak</span>
        </div>

        <div className="sidebar2-option">
          <LiaShoppingBagSolid size={24} />
          <span>Bag</span>
        </div>
        <div className="sidebar2-option">
          <FaRegCircleUser size={24} />
          <span>Sophia</span>
        </div>
      </div>
    </>
  );
};

export default SideBar2;
