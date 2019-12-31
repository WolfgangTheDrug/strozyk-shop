import React,{Component} from "react";
import logo from '../../../../logo.jpeg';
import {NavLink} from "react-router-dom";

class Logo extends Component{

    render(){
        return (<NavLink exact to={'/'} activeClassName={'logo'}>
            <img
               /* className={'small'}*/
                src={logo}
                alt="strozyk logo"/>
        </NavLink>)
    }
}
export default Logo;