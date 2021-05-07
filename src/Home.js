import React from 'react'
import "./Home.css"
import Product from './Product'



function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src ="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt ="" />
                                
                <div className="home__row">
                <Product
                id="1001"
                title="2020 Apple MacBook Air with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray"
                price={402.99}
                image="https://images-na.ssl-images-amazon.com/images/I/71jG%2Be7roXL._AC_SL1500_.jpg"
                rating={5}
                />
                
                <Product
                id="1002"
                title="Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PS4, & Xbox - 1-Year Rescue Service (STGX2000400)"
                price={59.99}
                image="https://images-na.ssl-images-amazon.com/images/I/81tjLksKixL._AC_SL1500_.jpg"
                rating={5}
                />

                <Product
                id="1003"
                title="Good Company: A Novel"
                price={37.99}
                image="https://images-na.ssl-images-amazon.com/images/I/51jOntVtFaL._SX329_BO1,204,203,200_.jpg"
                rating={5}
                />
                </div>
            
                <div className="home__row">
                <Product
                id="1004"
                title="Bluetooth Tracker, Bluetooth Keys Tracker, Bari Key Finder Tracking Wallet Key Bag Pet Dog Tracer Locator Alarm Patch GPS"
                price={6.99}
                image="https://images-na.ssl-images-amazon.com/images/I/51VTG41Le8L._AC_SL1000_.jpg"
                rating={3} 
                />

                <Product 
                id="1005"
                title="Samsung Electronics UN32N5300AFXZA 32-inch 1080p Smart LED TV (2018), Black"
                price={237.99}
                image="https://images-na.ssl-images-amazon.com/images/I/91UsHjAPTlL._AC_SL1500_.jpg"
                rating={4} 
                />
                
                </div>

                <div className="home__row">

                <Product
                id="1006"
                title="POLAR IGNITE - Advanced Waterproof Fitness Watch (Includes Polar Precision Heart Rate Integrated GPS and Sleep Plus Tracking)"
                price={214.99}
                image="https://images-na.ssl-images-amazon.com/images/I/51VvrsSf8HL._AC_SL1080_.jpg"
                rating={4}
                />

                <Product
                id="1007"
                title="adidas Women's Cloudfoam Pure Running Shoe"
                price={52.99}
                image="https://m.media-amazon.com/images/I/81zc8i+8qfL._AC_UL320_.jpg"
                rating={5}
                />
               
                </div>
            </div>
        </div>
    )
}




export default Home
