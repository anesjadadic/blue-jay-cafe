import Navbar from "./Navbar"
import Footer from "./Footer"
import { foods } from "./MenuList";
import { useState } from 'react';
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";

export default function Menu() {
    const [showDrinks, setShowDrinks] = useState(true);
    const [showPastries, setShowPastries] = useState(true);
    const [showLunches, setShowLunches] = useState(true);

    const drinks = foods.filter(food =>
        food.type === 'drink'
    );
    const pastries = foods.filter(food =>
        food.type === 'pastry'
    );
    const lunches = foods.filter(food =>
        food.type === 'lunch'
    );

    const listDrinks = drinks.map(drink =>
        <div key={drink.id} className="list">
            <div className="menu-section">
                <div className="left-of-section" style={{display: "flex"}}>
                    <h2>{drink.name}</h2> 
                </div>
                <div className="right-of-section">
                    <h3>S ${drink.price - 0.5}</h3>
                    <h3>M ${drink.price}</h3>
                    <h3>L ${drink.price + 0.5}</h3>
                </div>
            </div>
        </div>
    );
    const listPastries = pastries.map(pastry =>
        <div key={pastry.id} className="list">
            <div className="menu-section">
                <div className="left-of-section">
                    <h2>{pastry.name}</h2>
                    <p>{pastry.description}</p> 
                </div>
                <div className="right-of-section" style={{display: "flex"}}>
                    <h3>${pastry.price}</h3>
                </div>
            </div>
        </div>
    );
    const listLunches = lunches.map(lunch =>
        <div key={lunch.id} className="list">
            <div className="menu-section">
                <div className="left-of-section">
                    <h2>{lunch.name}</h2>
                    <p>{lunch.description}</p> 
                </div>
                <div className="right-of-section" style={{display: "flex"}}>
                    <h3>${lunch.price}</h3>
                </div>
            </div>
        </div> 
    );

    return (
        <>
            <Navbar />
            <div className="menu">
                <h1 className="main-header">OUR MENU</h1>
                <div className="filter-buttons">
                    <label>
                        <input
                            type="checkbox"
                            onChange={() => setShowDrinks(!showDrinks)}
                            checked={showDrinks}/>
                            <span className="checkmark"> {showDrinks ? <ImCheckboxChecked/> : <ImCheckboxUnchecked/>}drinks</span>
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                            onChange={() => setShowPastries(!showPastries)}
                            checked={showPastries}/>
                            <span className="checkmark">{showPastries ? <ImCheckboxChecked/> : <ImCheckboxUnchecked/>}pastries</span>
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                            onChange={() => setShowLunches(!showLunches)}
                            checked={showLunches}/>
                            <span className="checkmark">{showLunches ? <ImCheckboxChecked/> : <ImCheckboxUnchecked/>}lunch</span>
                    </label>
                </div>

                {showDrinks && 
                    <div>
                        <h1 className="menu-section-header">drinks</h1>
                        {listDrinks}
                    </div>
                }
                {showPastries && 
                    <div>
                        <h1 className="menu-section-header" 
                            style={{clear: "both", backgroundColor: "rgb(26, 112, 169)"}}>
                            pastries
                        </h1>
                        {listPastries}
                    </div>
                }
                {showLunches && 
                <div>
                    <h1 className="menu-section-header" 
                        style={{clear: "both", backgroundColor: "rgb(17, 81, 123)"}}>
                        lunch
                    </h1>
                    {listLunches}
                </div>
                }
            </div>
            <div className="gap"/>
            {!showDrinks && !showPastries && !showLunches ? <div className="button-message"><h1>search for menu items using the filter buttons above</h1></div> : null}
            <Footer />
        </>
    )
}