import React from "react";
import "./Tab.css";
import { useSelector } from "react-redux";
import { Tabs, Tab } from "react-bootstrap";

const Boxs = () => {
  const products = useSelector((state) => state.allProducts.products);
  const { id, title } = products[0];
  return (
    <div className="container">
      <Tabs
        fill
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-5">
        <Tab eventKey="home" title="Home">
          <div className="four column wide">
            <div className="ui link cards">
              <div className="card">
                <div className="image"></div>
                <div className="content">
                  <div className="header">{title}</div>
                </div>
              </div>
            </div>
          </div>
        </Tab>
        <Tab eventKey="profile" title="Profile"></Tab>
      </Tabs>
    </div>
  );
};

export default Boxs;
