import React, { useState } from 'react';
import Navbar from "./Navbar.js";
import Body from "./Body";
import Footer from "./Footer";
import './Api.js';
import menu from "./Api.js";


const uniuelist = [...new Set(menu.map((curElm) => {
    return curElm.catagory;
}))]
console.log(uniuelist);



function Restuarant() {
    const [menulist, setmenulist] = useState(menu);



    function filterItem(catagory) {
        const result = menu.filter(function (mark) {
            return mark.catagory == catagory;
        })
        setmenulist(result);
    }

    return (
        <div>
            <Navbar choose={filterItem} uq={uniuelist} />
            <Body menulist={menulist} />
            <Footer />

        </div>
    )
}
export default Restuarant;