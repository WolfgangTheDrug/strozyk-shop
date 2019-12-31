import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Slider.scss';

class Slider extends Component {
    render() {
        return (
            <a href={'https://www.instagram.com/strozykofficial/'} target="_blank" rel="noopener noreferrer">
                <Carousel
                    autoPlay={true}
                    infiniteLoop={true}
                    interval={3000}
                    transitionTime={600}
                    showArrows={false}
                    showIndicators={false}
                    showStatus={false}
                    showThumbs={false}
                    dynamicHeight={false}
                    className={"slideshow-container"}>

                    <div>
                        <img src={require('../../../../assets/images/slide1.jpg')} alt={'strozyk'}/>
                    </div>
                    <div>
                        <img src={require('../../../../assets/images/slide2.jpg')} alt={'strozyk'}/>
                    </div>
                    <div>
                        <img src={require('../../../../assets/images/slide3.jpg')} alt={'strozyk'}/>
                    </div>
                </Carousel>
            </a>
        );
    }
}

export default Slider;