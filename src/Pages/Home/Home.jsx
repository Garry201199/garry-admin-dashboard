import React from "react";
import Sidebar from "../../Comp/Sidebar/Sidebar";
import Navbar from "../../Comp/Navbar/Navbar";
import "./home.scss";
import Widget from "../../Comp/Widget/Widget";
import Featured from "../../Comp/Featured/Featured";
import Chart from "../../Comp/Chart/Chart";
import ListsTable from "../../Comp/Table/ListsTable";
const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar  />

        <div className="widgetWrap">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>

        <div className="charts">
          <div className="featured">
            <Featured />
          </div>
          <div className="chart">
            <Chart height='fit-content' title='Last 6 months (Income)'  aspect={2/1} />
          </div>
        </div>

        <div className="listContainer">
          <div className="list">
          <p>Latest Transactions</p>
            <ListsTable   />
          </div>

        </div>
      </div>

    </div>
  );
};

export default Home;
