import React from "react";
import "./featured.scss";
import {
  KeyboardArrowUp,
  KeyboardArrowDown,
  MoreVert,
} from "@mui/icons-material/";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Featured = () => {
  const gain = 12.4;
  const TargetData = [{ id: 1, name: "Target" , 
  icon:(<KeyboardArrowUp fontSize='large' /> ) , increase:true }
,{ id: 2, name: "Last Week" , 
icon:(<KeyboardArrowDown fontSize='large' /> ) , increase:false },
{ id: 3, name: "Last Month" , 
  icon:(<KeyboardArrowUp fontSize='large' /> ) , increase:true }
];

  return (
    <div className="featuredWrap">
      <div className="titleWrap">
        <p>Total Revenue</p>
        <MoreVert  />
      </div>

      <div className=" progress ">
        <div style={{ width: 130, height: 130 }}>
          <CircularProgressbar
            strokeWidth={6}
            styles={buildStyles({
              pathColor: `#8338ec`,
              textColor: "#9d4edd",
            })}
            value={70}
            text={"70 %"}
          />
        </div>
        <p>Total sales made today</p>
        <p className="figures">$ 650 </p>
        <p className="msg">
          Previous transactions processing. Last payments may not be included.{" "}
        </p>
      </div>

      <div className="stats">
        {TargetData && TargetData.map((i) =>(
          <div key={i.id} className="target">
          <p>{i.name}</p>
          <div className="stat" style={{color: i.increase? 'green': 'red' }} >
            {i.icon}<span  > $ {gain} K</span>
          </div>
        </div>
        )) }
      </div>
    </div>
  );
};

export default Featured;
