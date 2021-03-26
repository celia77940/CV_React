import React from 'react';
import Navigation from '../components/Navigation';

const Contacts = () => {
    return (
        <div className="contact">
            <Navigation></Navigation>
            <div className="contactContent">
                <div className="header"></div>
                <div className="contactBox">
                    <h1>Contactez-moi</h1>
                    <ul>
                        <li>
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Ile de france</span>
                        </li>
                        <li>
                            <i className="fas fa-mobile-alt"></i>
                                <span className="clickInput" onClick={() => {alert('telephone copié !');}}> 06 42 75 78 66</span>
                        </li>
                        <li>
                            <i className="far fa-envelope"></i>
                                <span className="clickInput" onClick={() => {alert('Email copié !');}}> celiarameau@live.fr</span>
                        </li>
                    </ul>
                </div>
                <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/celia-rameau-7b238a18b/" target="blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/celia77940" target="blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/celia.rameau/" target="blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </li>
                </ul>
            </div>

            </div>
        </div>
    );
};

export default Contacts;