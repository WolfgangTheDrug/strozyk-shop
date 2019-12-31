import React, {Component} from 'react';
import './Scissors.scss';

class Scissors extends Component{
    render() {
        return (
            <div className="scissors-container">
                <div className="scissors">
                    <div className="half">
                        <div className="blade"/>
                        <div className="handle"/>
                    </div>

                    <div className="half">
                        <div className="blade"/>
                        <div className="handle"/>
                    </div>

                    <div className="joint"/>
                </div>
            </div>
        )
    }
}

export default Scissors;