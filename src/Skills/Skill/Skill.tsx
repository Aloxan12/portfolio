import React from 'react';
import style from './Skill.module.scss';


export type SkillType = {
    title: string
    description: string
}

function Skill(props: SkillType) {
    return (
        <div className={style.skill}>
            <div className={style.icon}>D</div>
            <h3 className={style.title}>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    )
}

export default Skill;
