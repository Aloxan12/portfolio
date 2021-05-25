import React from 'react';
import style from './Contacts.module.scss';
import styleContainer from "../Common/styles/Container.module.css";
import Title from "../Common/components/title/Title";



function Contacts() {
    return (
        <div className={style.contacts}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title title='Contacts' />
                <form className={style.form}>
                    <input placeholder='Name'/>
                    <input placeholder='Email'/>
                    <textarea></textarea>
                </form>
                <button className={style.contBtn}>Отправить</button>
            </div>
        </div>
    )
}
export default Contacts;
