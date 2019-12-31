import React,{Component} from 'react';
import './Footer.scss'
import {Link} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <footer>
                <div style={{width: "100%", height:"25px", backgroundColor: "white"}}/>
                <div className="footer-sections">
                    <section className="footer-section">
                        <p>Kupuj</p>
                        <p><Link to="/shop/him">Dla Niego</Link></p>
                        <p><Link to="/shop/her">Dla Niej</Link></p>
                    </section>
                    <section className="footer-section">
                        <p>Pomoc</p>
                        <p><Link to="/contact">Kontakt</Link></p>
                        <p><Link to="/terms">Regulamin Zwrótów</Link></p>
                        <p><Link to="/FAQ">FAQ</Link></p>
                        <p><Link to="/about_me">O mnie</Link></p>
                    </section>
                </div>
                <div className="footer-social-media">
                    <div className="social-media"></div>
                    <div className="social-media"></div>
                    <div className="social-media"></div>
                    <div className="social-media"></div>
                </div>
            </footer>
        );
    }
}


export default Footer;