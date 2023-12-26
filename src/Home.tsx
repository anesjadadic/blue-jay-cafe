import Navbar from "./Navbar"
import Footer from "./Footer"

import promoImg from "./assets/pictures/promo-image.jpeg"
import cup from "./assets/pictures/cup.png"
import handshake from "./assets/pictures/handshake.png"
import checkmark from "./assets/pictures/checkmark.png"
import location1 from "./assets/pictures/location1.jpeg"
import location2 from "./assets/pictures/location2.jpeg"
import location3 from "./assets/pictures/location3.jpeg"
import aponte from "./assets/pictures/aponte-bag.png"
import lorimer from "./assets/pictures/lorimer-bag.png"
import tote from "./assets/pictures/tote-bag.png"
import mug from "./assets/pictures/mug.png"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="promotion">
                <div className="promo-text-section">
                    <h2>
                    NEW VARIETAL
                    </h2>
                    <h1>
                    try our new blend, lorimer.<br/>
                    it's sweet, dark, and delicious.
                    </h1>
                    <h2>
                    THIS UNIQUE BLEND IS SURE TO DELIGHT ANY
                    COFFEE ENTHUSIAST.
                    FROM THE FERTILE FARMS OF INDONESIA, 
                    IT IS OUR LATEST AND GREATEST.
                    </h2>
                    <Link to="/shop">Go to Shop</Link>
                </div>
                <div className="promo-image-section">
                    <img 
                    className="promo-image"
                    src={promoImg}
                    alt="Promo Image"
                    />
                </div>
            </div>

            <div className="about-us">
                <div className="quote">
                    <h1>“COFFEE TASTES BETTER WHEN THE PEOPLE WHO GROW IT ARE TREATED WELL. 
                    WE WERE FOUNDED ON THIS SIMPLE IDEA IN 2007. TODAY, OUR COMMUNITY TASTES 
                    THE DIFFERENCE, AND WE HOPE YOU DO TOO.”</h1>
                    <h2>John Coffee, Founder</h2>
                </div>
                <div className="about-us-images">
                    <div className="image-info">
                        <img src={handshake}/>
                        <h2>DIRECT & PERSONAL RELATIONSHIPS WITH COFFEE PRODUCERS</h2>
                    </div>
                    <div className="image-info">
                        <img src={cup}/>
                        <h2>DEFTLY ROASTED IN BROOKLYN WITH LOVE AND CARE</h2>
                    </div>
                    <div className="image-info">
                        <img src={checkmark}/>
                        <h2>VERIFIED LIVABLE WAGE FOR FARMWORKERS</h2>
                    </div>
                </div>
            </div>

            <div className="locations">
                <h2>VISIT US AT ONE OF OUR LOCATIONS</h2>
                <h1>we're all around new york</h1>
                <div className="location">
                    <img className="location-image" src={location1} width={600} height={450}/>
                    <div className="overlay">
                        come visit our newest location
                        in the heart of nyc.
                    </div>
                    <span className="caption">
                        <h2>138 East 24th St, New York, NY 10014</h2>
                        <h1>manhattan</h1>
                    </span>
                </div>
                <div className="location">
                    <img className="location-image" src={location2} width={600} height={450}/>
                    <div className="overlay">
                        see what the greatest cafe
                        in queens has to offer.
                    </div>
                    <span className="caption">
                        <h2>36-12 Broadway, Queens, NY 11106</h2>
                        <h1>queens</h1>
                    </span>
                </div>
                <div className="location">
                    <img className="location-image" src={location3} width={600} height={450}/>
                    <div className="overlay">
                        our first location, still
                        as good as the day it opened.
                    </div>
                    <span className="caption">
                        <h2>62 Clinton Pl, New Rochelle, NY 10801</h2>
                        <h1>new rochelle</h1>
                    </span>
                </div>
            </div>

            <div className="shop">
                <h2>COME BROWSE OUR ONLINE SHOP</h2>
                <h1>coffee or merch, we have what you want</h1>
                <a href="/shop">
                    <button>SHOP NOW</button>
                </a>
                <div className="scroll-parent">
                    <div className="scroll-element primary">
                    <div className="image-info">
                        <img src={aponte}/>
                        <h2>aponte</h2>
                        <h1>$15.99</h1>
                    </div>
                    <div className="image-info">
                        <img src={lorimer}/>
                        <h2>lorimer</h2>
                        <h1>$15.99</h1>
                    </div>
                    <div className="image-info">
                        <img src={tote}/>
                        <h2>tote bag</h2>
                        <h1>$20.99</h1>
                    </div>
                    <div className="image-info">
                        <img src={mug}/>
                        <h2>mug</h2>
                        <h1>$11.99</h1>
                    </div>
                    </div>
                    <div className="scroll-element secondary">
                    <div className="image-info">
                        <img src={aponte}/>
                        <h2>aponte</h2>
                        <h1>$15.99</h1>
                    </div>
                    <div className="image-info">
                        <img src={lorimer}/>
                        <h2>lorimer</h2>
                        <h1>$15.99</h1>
                    </div>
                    <div className="image-info">
                        <img src={tote}/>
                        <h2>tote bag</h2>
                        <h1>$20.99</h1>
                    </div>
                    <div className="image-info">
                        <img src={mug}/>
                        <h2>mug</h2>
                        <h1>$11.99</h1>
                    </div>
                    </div>
                </div>
            </div>

            <div className="menu-link">
                <h2>thinking about stopping by?</h2><br/>
                <h1>why not have a look at our <a href="http://localhost:5173/menu">menu</a>
                </h1>
            </div>
            <Footer />
        </>
    )
}