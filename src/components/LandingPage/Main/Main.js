import React,{Component} from "react";
import Slider from './Slider/Slider';
import './Main.scss';

class Main extends Component {
    render() {
        return (<div className={'slideshow-flex'}>
            <Slider />
        </div>)
    }
}

export default Main;