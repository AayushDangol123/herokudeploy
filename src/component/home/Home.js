import React from 'react';
import "./home.css"
import Carousel from "../../utils/carousel/Carousel";
import SecondCaro from '../../utils/secondCarousel/SecondCaro';
import Boxs from "../../utils/tabs/Tabs"
const Home = () => {
    return (
        <main>      
            <Carousel/>  
           <h1 className="home">TOP SELLING PRODUCTS</h1>
           <Boxs/>
           <SecondCaro/>
        </main>
       
    );
};
export default Home;