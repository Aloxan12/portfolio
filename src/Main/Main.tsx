import React from 'react';
import style from './Main.module.css';
import styleContainer from './../Common/styles/Container.module.css';


function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Hi There</span>
                    <h1>I'm Alexey Shavel</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    )
}

export default Main;