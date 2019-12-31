import React from "react";
import './nav.scss';
import ProductDropdown from './ProductDropdown/ProductDropdown';
import NavUpperPart from './NavUpperPart/NavUpperPart';
import {Link} from "react-router-dom";
/*import Dropdown from './Dropdown/Dropdown';*/

function Nav(){
    return (<>
        <NavUpperPart/>
        <nav>
            <div>
              <ProductDropdown category={"Niej"}/>
              <ProductDropdown category={"Niego"}/>
            </div>
            <div>
                <Link to={'/shop/cart'} title={'Koszyk'}>
                    <i className="fas fa-shopping-cart" style={{fontSize: "calc(0.8rem + 2vw)"}}/>
                </Link>
            </div>
        </nav>
    </>)
}

export default Nav;