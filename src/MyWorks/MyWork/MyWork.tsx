import React from 'react';
import style from './MyWork.module.css'

type MyWorkType = {
    title: string
    description: string
}

function MyWork(props: MyWorkType) {
    return (
        <div className={style.work}>
            <div className={style.img}><button>Смотреть</button></div>
            <h3>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    )
}

export default MyWork;
