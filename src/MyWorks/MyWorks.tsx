import React from 'react';
import style from './MyWorks.module.css'
import styleContainer from "../Common/styles/Container.module.css";
import MyWork from "./MyWork/MyWork";
//123
function MyWorks() {
    return (
        <div className={style.myWorksBlock}>
            <div className={`${styleContainer.container} ${style.myWorksContainer}`}>
                <div className={style.title}>
                    <h2>My Works</h2>
                </div>
                <div className={style.works}>
                    <MyWork title={'React'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}/>
                    <MyWork title={'JS'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}/>
                </div>
            </div>
        </div>
    )
}

export default MyWorks;
