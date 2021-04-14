import React from 'react';
import style from './Contacts.module.css';
import styleContainer from "../Common/styles/Container.module.css";



function Contacts() {
    return (
        <div className={style.contacts}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h3 className={style.title}>Contacts</h3>
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
