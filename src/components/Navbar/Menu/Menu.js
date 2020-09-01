import React from 'react';
import style from "./Menu.module.scss";


const Menu = ({user = 'User', fnHide}) => (
    <div className={style.menu} onClick={(e) =>{
        if(e.target.classList.value === style.menu) {
          document.querySelector(`.${style.menu_content}`).style.animation = `${style.hide_menu} 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both`;
          setTimeout(() => {
            fnHide();
          }, 500);
        };
    }}>
      <div className={style.menu_content}>
        <div className={style.title}>
          <h2> {user} </h2>
        </div>
        <ul className={style.menu_list}>
          <li> Home </li>
          <li> NEO </li>
          <li> Agile </li>
          <li> Koszty </li>
          <li> Kontrole </li>
          <li> W [MIS] </li>
          <li> Info </li>
        </ul>
        <h2>MIS Mobile</h2>
      </div>
    </div>
)

export default Menu;