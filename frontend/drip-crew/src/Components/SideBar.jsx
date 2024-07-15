import { LiaShoppingBagSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";

import { HiHashtag } from "react-icons/hi2";
import productSource from "../assets/add-friend-icon.svg";
import productSource2 from "../assets/myntra.svg";

const SideBar = () => {
  const navigate = useNavigate();

  const handleRedirect = (path) => {
    navigate(path);
  };

  return (
    <>
      <div className="sidebar">
        <div className="sidebar-option" onClick={() => handleRedirect("/")}>
          <img src={productSource2} size={24} />
          <span>fwd</span>
        </div>
        <div className="sidebar-option">
          <HiHashtag size={24} />
          <span>Trends</span>
        </div>
        <div
          className="sidebar-option"
          type="button"
          onClick={() => {
            handleRedirect("/users");
          }}
        >
          <img src={productSource} size={24} />
          <span>DripCrew</span>
        </div>

        <div className="sidebar-option">
          <LiaShoppingBagSolid size={24} />
          <span>Bag</span>
        </div>
        <div className="sidebar-option">
          <FaRegCircleUser size={24} />
          <span>Sophia</span>
        </div>
      </div>
    </>
  );
};

export default SideBar;
