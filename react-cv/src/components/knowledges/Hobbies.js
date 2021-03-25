import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Intérêts</h3>
            <ul>
                <li className="hobby">
                    <i className="fas fa-futbol"></i>
                    <span>Football</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-palette"></i>
                    <span>Créativité</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-camera-retro"></i>
                    <span>Photo</span>
                </li>
            </ul>      
        </div>
    );
};

export default Hobbies;