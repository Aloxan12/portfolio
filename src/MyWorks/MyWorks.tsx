import React from 'react';
import style from './MyWorks.module.scss'
import styleContainer from "../Common/styles/Container.module.css";
import MyWork from "./MyWork/MyWork";
import Title from "../Common/components/title/Title";
import socialImage from "../assets/image/social.jpg";
//123
function MyWorks() {
    const social = {
        backgroundImage: `url(${socialImage})`,
    };
    return (
        <div className={style.myWorksBlock}>
            <div className={`${styleContainer.container} ${style.myWorksContainer}`}>
                <Title title={'My Works'} />
                <div className={style.works}>
                    <MyWork style={social} title={'React'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}/>
                    <MyWork style={social} title={'JS'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}/>
                </div>
            </div>
        </div>
    )
}

export default MyWorks;
