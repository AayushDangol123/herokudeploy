import React from 'react';
import "./home.css"
import Carousel from "../../utils/carousel/Carousel";
const Home = () => {
    return (
        <main>      
            <Carousel/>  
           <h1 className="home">TOP SELLING PRODUCTS</h1>
        </main>
       
    );
};
export default Home;