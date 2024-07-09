import { LiaShoppingBagSolid } from "react-icons/lia";
import { GiClothes } from "react-icons/gi"; // Custom icon for Myntra fwd
import { FaRegCircleUser } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa"; // For Drip Crew icon
import { FaUserCircle } from "react-icons/fa"; // For User icon
import { HiHashtag } from "react-icons/hi2";

const SideBar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-option">
          <img src="" alt="" />
          <GiClothes size={24} />
          <span>fwd</span>
        </div>
        <div className="sidebar-option">
          <HiHashtag size={24} />
          <span>Trends</span>
        </div>
        <div className="sidebar-option">
          <FaUsers size={24} />
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
