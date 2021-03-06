import React from 'react';
import style from './Skill.module.scss';


export type SkillType = {
    title: string
    description: string
    photoSkill: string
}

function Skill(props: SkillType) {
    return (
        <div className={style.skill}>
            <div className={style.icon}>
                <img src={props.photoSkill}/>
            </div>
            <h3 className={style.title}>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    )
}

export default Skill;
