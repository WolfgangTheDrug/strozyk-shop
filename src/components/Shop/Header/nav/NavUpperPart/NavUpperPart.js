import React,{Component} from 'react';
import {Link} from "react-router-dom";
import './NavUpperPart.scss';
import PlFLag from '../poland-flag-icon-32.png'
import UKFlag from '../united-kingdom-flag-icon-32.png'

class NavUpperPart extends Component{
    render() {
        return <div className={'nup'}>
            <p>
                <Link to="/contact" title={'Kontakt'}>Kontakt</Link>
            </p>
            <p>
                <Link to="/about_me" title={'O mnie'}>O mnie</Link>
            </p>
            <div className={'flags'}>
                <div style={{backgroundImage: `url(${PlFLag})`, height: "18px", width: "34px", border: "1px solid black"}}/>
                <div style={{backgroundImage: `url(${UKFlag})`, height: "18px", width: "34px", border: "1px solid black"}}/>
            </div>
        </div>/*nup=NavUpperPart*/
    }
}

export default NavUpperPart;