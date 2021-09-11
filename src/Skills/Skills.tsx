import React from 'react';
import style from './Skills.module.scss';
import styleContainer from './../Common/styles/Container.module.css';
import Skill from "./Skill/Skill";
import Title from "../Common/components/title/Title";
import photoHtmlCss from './../assets/image/htmlCss.jpg';
import photoJs from './../assets/image/js.jpg';
import photoReact from './../assets/image/react.png'

function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title='Skills' />
                <div className={style.skills}>
                    <Skill title={'HTML&CSS'} description={'HTML (from English HyperText Markup Language - "hypertext markup language") - a standardized markup language for viewing web pages in a browser.'}
                           photoSkill={photoHtmlCss}
                    />
                    <Skill title={'JS'} description={'JavaScript is a multi-paradigm programming language. Supports object oriented, imperative and functional styles.'}
                        photoSkill={photoJs}
                    />
                    <Skill title={'React'} description={'React is an open source JavaScript library for developing user interfaces.'}
                        photoSkill={photoReact}
                    />
                </div>
            </div>
        </div>
    )
}

export default Skills;
