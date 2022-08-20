import React, { useContext } from "react";
import "./sidebar.scss";
import {Link} from 'react-router-dom'
import {
  Dashboard,
  Person,
  Store,
  CreditScore,
  Login,
  SettingsApplications,
  Logout,
  LocalShipping,
  Assessment,
  NotificationsNone,
} from "@mui/icons-material/";
import DarkContext from "../../Context/DarkContext";
const Sidebar = () => {
  const { setDark} = useContext(DarkContext)
  return (
    <div className="sidebar">
      <Link to='/' className="link" >
      <div className="top">
        
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          // style="fill:#000000;"
        >
          <path
            fill="#FFB300"
            d="M31.2,10.6l-6.6,2.3l-1.4-4.3c-0.6-1.8,0.3-3.8,2.2-4.4c1.8-0.6,3.8,0.3,4.4,2.2L31.2,10.6z M29.2,26.6l6.6-2.3l-2.3-7.1l-6.6,2.3L29.2,26.6z M32.6,36.8c0.5,1.4,1.9,2.4,3.3,2.4c0.4,0,0.8-0.1,1.1-0.2c1.8-0.6,2.8-2.6,2.2-4.4L38,31l-6.6,2.3L32.6,36.8z"
          ></path>
          <path
            fill="#00BFA5"
            d="M17.2,15.5l-6.6,2.3l-1.4-4.2c-0.6-1.8,0.3-3.8,2.2-4.4c1.8-0.6,3.8,0.3,4.4,2.2L17.2,15.5z M18.6,41.8c0.5,1.4,1.9,2.4,3.3,2.4c0.4,0,0.8-0.1,1.1-0.2c1.8-0.6,2.8-2.6,2.2-4.4l-1.2-3.7l-6.6,2.3L18.6,41.8z M19.4,22.2l-6.6,2.3l2.3,7.1l6.6-2.3L19.4,22.2z"
          ></path>
          <path
            fill="#00BCD4"
            d="M33.4,17.3l-2.2-6.6l4.1-1.4c1.8-0.6,3.8,0.3,4.4,2.2c0.6,1.8-0.3,3.8-2.2,4.4L33.4,17.3z M26.8,19.6l-2.2-6.6l-7.4,2.6l2.2,6.6L26.8,19.6z M6.4,19.3c-1.8,0.6-2.8,2.6-2.2,4.4c0.5,1.5,1.9,2.4,3.3,2.4c0.4,0,0.8-0.1,1.1-0.2l4.1-1.4l-2.2-6.6L6.4,19.3z"
          ></path>
          <path
            fill="#E91E63"
            d="M15.1,31.5l2.2,6.6l-4.7,1.6c-0.4,0.1-0.8,0.2-1.1,0.2c-1.5,0-2.8-0.9-3.3-2.4c-0.6-1.8,0.3-3.8,2.2-4.4L15.1,31.5z M43.7,25.3c-0.6-1.8-2.6-2.8-4.4-2.2l-3.5,1.2L38,31l3.6-1.2C43.4,29.1,44.4,27.1,43.7,25.3z M21.7,29.2l2.2,6.6l7.4-2.6l-2.2-6.6L21.7,29.2z"
          ></path>
          <path
            fill="#388E3C"
            d="M33.4 17.3L31.2 10.6 24.6 12.9 26.8 19.6z"
          ></path>
          <path
            fill="#00897B"
            d="M17.2 15.5L10.6 17.8 12.8 24.5 19.4 22.2z"
          ></path>
          <path fill="#BF360C" d="M29.2 26.6L31.4 33.3 38 31 35.8 24.3z"></path>
          <path
            fill="#4E342E"
            d="M15.1 31.5L17.3 38.2 23.9 35.9 21.7 29.2z"
          ></path>
        </svg>
        <p  >G-panel</p>
        
      </div></Link>
      <div className="mid">
        <ul>
          <p className="title">MAIN</p>
          <Link to='/' className="link" >
          <li>
            <span>
              <Dashboard className="icon" />
            </span>{" "}
            Dashboard{" "}
          </li></Link>

          <p className="title">LISTS</p>

          <Link to='/users' className="link" ><li>
            <span>
              <Person  className="icon" />
            </span>Users
            
          </li></Link>
          <Link to='/products' className="link" >
          <li>
            {" "}
            <span>
              <Store  className="icon"/>
            </span>{" "}
            Product
          </li></Link>
          <li>
            {" "}
            <span>
              <CreditScore  className="icon"/>
            </span>{" "}
            Service{" "}
          </li>
          <li>
            {" "}
            <span>
              <LocalShipping  className="icon"/>
            </span>
            Delivery{" "}
          </li>

          <p className="title">USEFUL</p>

          <li>
            {" "}
            <span>
              <Assessment  className="icon"/>
            </span>{" "}
            Stats{" "}
          </li>
          <li>
            {" "}
            <span>
              <NotificationsNone  className="icon"/>
            </span>{" "}
            Notification
          </li>
          <p className="title">SERVICES</p>

          <li>
            {" "}
            <span>
              <SettingsApplications  className="icon"/>
            </span>{" "}
            System Health{" "}
          </li>
          <li>
            {" "}
            <span>
              <SettingsApplications  className="icon" />
            </span>{" "}
            Logs
          </li>
          <li>
            {" "}
            <span>
              <SettingsApplications  className="icon"/>
            </span>{" "}
            Settings
          </li>
          <p className="title">USER</p>

          <li>
            {" "}
            <span>
              <Login  className="icon"/>
            </span>
            Login{" "}
          </li>
          <li>
            {" "}
            <span>
              <Logout  className="icon"/>
            </span>{" "}
            Logout
          </li>
        </ul>


      </div>
      <div >
        <p className="title">THEME</p>
        <div className="colorTheme">
        <div onClick={()=> setDark((dark) => false)}  className="colorOption">  </div>
        <div  onClick={()=> setDark((dark) => true)} className="colorOption">  </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
