import React from 'react';
import style from './Title.module.scss'


type TitleType = {
    title: string
}
//123
function Title(props: TitleType) {
    return (
        <div className={style.title}>
            <h2>{props.title}</h2>
        </div>
    )
}

export default Title;
