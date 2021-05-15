import React from 'react';
import style from './MyWorks.module.css'
import styleContainer from "../Common/styles/Container.module.css";
import MyWork from "./MyWork/MyWork";
import Title from "../Common/components/title/Title";
//123
function MyWorks() {
    return (
        <div className={style.myWorksBlock}>
            <div className={`${styleContainer.container} ${style.myWorksContainer}`}>
                <Title title={'My Works'} />
                <div className={style.works}>
                    <MyWork title={'React'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}/>
                    <MyWork title={'JS'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}/>
                </div>
            </div>
        </div>
    )
}

export default MyWorks;
