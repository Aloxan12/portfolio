import React from 'react';
import style from './Main.module.scss';
import styleContainer from './../Common/styles/Container.module.css';
import myPhoto from '../assets/image/photo_2020-02-09_17-19-28.jpg'


function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={`${styleContainer.container} + '' + ${style.container}`}>
                <div className={style.text}>
                    <span>Welcome</span>
                    <h1>I'm Alexey Shavel</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={style.photoContainer}>
                    <img className={style.photo} src={myPhoto}/>
                </div>
            </div>
        </div>
    )
}

export default Main;
