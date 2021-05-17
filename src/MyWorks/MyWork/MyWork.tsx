import React from 'react';
import style from './MyWork.module.scss'

type MyWorkType = {
    title: string
    description: string
    style: any
}

function MyWork(props: MyWorkType) {

    return (
        <div className={style.work}>
            <div  className={style.img} style={props.style}><a href='#'>Смотреть</a></div>
            <div className={style.workInfo}>
                <h3 className={style.workTitle}>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>
        </div>
    )
}

export default MyWork;
