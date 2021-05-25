import React from 'react';
import style from './Footer.module.scss';
import styleContainer from "../Common/styles/Container.module.css";


function Footer() {
    return (
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <span>Alexey Shavel</span>
                <div className={style.footerBlock}>
                    <a href='#'>vk</a>
                    <a href='#'>instagram</a>
                    <a href='#'>facebook</a>
                    <a href='#'>twitter</a>
                    <a href='#'>Linkedin</a>
                </div>
                <p>© 2021 beingeorge, All Rights Reserved.</p>
            </div>

        </div>
    )
}
export default Footer;
