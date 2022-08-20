import React, { useContext } from "react";
import "../Navbar/Navbar.scss";
import {
  NotificationsNone,
  DarkModeOutlined,
  LanguageOutlined,
  ChatBubbleOutlineOutlined,
} from "@mui/icons-material/";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Avatar } from "@mui/material";
import DarkContext from "../../Context/DarkContext";

const Navbar = () => {
  const {dark , setDark}  = useContext(DarkContext)

  return (
    <div className="navbar">
      <div className="navbarWrap">
        <div className="left">
          <input
            type="text"
            placeholder="Search here..."
            className={`navinput ${dark ?'dark' :''}`}
          />
          <SearchOutlinedIcon  className="searchIcon" />
        </div>

        <div className="right">

          <div className="notification">
            <span className="notibadge"> 4 </span>
            <NotificationsNone  />
          </div>

          <div className="lang">
            <LanguageOutlined  />
            <p className="langText">English</p>
          </div>
          <div
           onClick={()=> { setDark(() =>   !dark)
            console.log('changing mode' + dark.toString() );}} 
          >
            <DarkModeOutlined 
              />
          </div>
          <div className="notification">
          <span className="notibadge"> 4 </span>
            <ChatBubbleOutlineOutlined  />
          </div>
          <div>
            <Avatar
              alt="Remy Sharp"
              src='https://picsum.photos/id/1027/200/300'
              sx={{ width: 40, height: 40 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
