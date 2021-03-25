import React, {Component} from 'react';
import ProgressBar from './ProgressBar'

class Language extends Component{
    state = {
        languages: [
            {id: 1, value: "Html", xp:0.6},
            {id: 2, value: "Css", xp:0.6},
            {id: 3, value: "Javascript", xp:0.2},
            {id: 4, value: "Php/Mysql", xp:0.4},
        ],
        frameworks: [
            {id: 1, value: "React", xp:0.1},
            {id: 2, value: "Bootstrap", xp:0.5},
            {id: 3, value: "Sass", xp:0.1},
            {id: 4, value: "Wordpress", xp:0.1},
        ]
    }

    render (){
        let{languages, frameworks} = this.state;

        return(
            <div className="languagesFrameworks">
                <ProgressBar
                languages={languages}
                className="languagesDisplay"
                title="languages"
                />
                <ProgressBar
                    languages={frameworks}
                    className="frameworksDisplay"
                    title="frameworks & bibliothèques"
                />             
            </div>
        )
    }
};

export default Language;