import React from 'react'
import "./Tab.css";
import {Tabs,Tab} from "react-bootstrap";


function Boxs() {
    return (
        <div className="container">
        <Tabs fill defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-5">
            <Tab eventKey="home" title="Home" >  
            </Tab>
            <Tab eventKey="profile" title="Profile">  
            </Tab>
        </Tabs>
        </div>
    )
}

export default Boxs
