import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import CasinoIcon from '@mui/icons-material/Casino';
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div style={{display:'flex'}}>
          <CasinoIcon/>
          <span className="logo">Casino</span>
          </div>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">기본</p>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>계기반</span>
            </li>
          </Link>
          <p className="title">목록</p>
          <Link to="#" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>사용자</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span> 게임 내역 </span>
            </li>
          </Link>
          <li>
            <CreditCardIcon className="icon" />
            <span>명령</span>
          </li>
        </ul>
      </div>
      {/* <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div> */}
    </div>
  );
};

export default Sidebar;
