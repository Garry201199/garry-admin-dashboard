import React from 'react'
import './widget.scss'
import {KeyboardArrowUp,AccountBalanceWalletOutlined,MonetizationOnOutlined,ShoppingCartOutlined,PersonOutlined} from '@mui/icons-material/';
const Widget = ({type}) => {

    let data ;

    switch (type) {
        case "user":
          data = {
            title: "USERS",
            amount :100,
            isMoney: false,
            increase: false,
            diff: 5,
            link: "See all users",
            linkIconBg: 'rgba(255, 0, 0, 0.2)' ,
            icon: (
              <PersonOutlined
                className="icon"
                style={{
                  color: "crimson",
                }}
              />
            ),
          };
          break;
        case "order":
          data = {
            title: "ORDERS",
            amount :1290,
            diff: 6,
            increase: true,
            isMoney: false,
            link: "View all orders",
            linkIconBg: 'rgba(218, 165, 32, 0.2)' ,
            icon: (
              <ShoppingCartOutlined
                className="icon"
                style={{
                  color: "goldenrod",
                }}
              />
            ),
          };
          break;
        case "earning":
          data = {
            title: "EARNINGS",
            amount :20,

            diff: 12,
            increase: false,
            isMoney: true,
            link: "View net earnings",
            linkIconBg: 'rgba(0, 128, 0, 0.2)' ,
            icon: (
              <MonetizationOnOutlined
                className="icon"
                style={{  color: "green" }}
              />
            ),
          };
          break;
        case "balance":
          data = {
            title: "BALANCE",
            amount :430,

            diff: 35,
            isMoney: true,
            increase: true,
            link: "See details",
            linkIconBg: 'rgba(128, 0, 128, 0.2)' ,
            icon: (
              <AccountBalanceWalletOutlined
                className="icon"
                style={{
                  color: "purple",
                }}
              />
            ),
          };
          break;
        default:
          break;
      }

  return (
    <> 

     <div className='widgetCard'>
        <div className="widgetTitle">
            <div className="title"> {data.title} </div>
            <div className={`percent ${data.increase ? 'positive' : 'negative' } `}> {data.diff} %
            <span><KeyboardArrowUp  /></span> </div>
        </div>

        <div className="figures">
            <p>{data.isMoney && '$' }{data.amount} </p>
        </div>

        <div className="options">
            <div className="link">
                {data.link}
            </div>
            <div className="linkIcon" style={{backgroundColor : data.linkIconBg }} >
            {data.icon}
            </div>
        </div>
      
    </div>
    </>
   
  )
}

export default Widget
