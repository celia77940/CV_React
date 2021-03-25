import React from 'react';
import Navigation from '../components/Navigation';
import Language from '../components/knowledges/Language'
import Experience from '../components/knowledges/Experience';
import OtherSkills from '../components/knowledges/OtherSkills';
import Hobbies from '../components/knowledges/Hobbies';

const Knowledges = () => {
    return (
        <div className="knowledges">
            <Navigation/>
            <div className="knowledgesContent">
                <Language></Language>
                <Experience></Experience>
                <OtherSkills></OtherSkills>
                <Hobbies></Hobbies>
            </div>
        </div>
    );
};

export default Knowledges;