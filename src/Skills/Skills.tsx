import React from 'react';
import style from './Skills.module.scss';
import styleContainer from './../Common/styles/Container.module.css';
import Skill from "./Skill/Skill";
import Title from "../Common/components/title/Title";

function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title='Skills' />
                <div className={style.skills}>
                    <Skill title={'HTML&CSS'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do .'}/>
                    <Skill title={'JS'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do .'}/>
                    <Skill title={'React'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do .'}/>
                </div>
            </div>
        </div>
    )
}

export default Skills;
