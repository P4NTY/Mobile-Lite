import React from 'react';
import style from "./Button.module.scss";

const Button = ({children, onClick, hide}) => (
    <button onClick={onClick} className={`${style.btn} ${hide && 'no-see'}`}>
        {children}
    </button>
)

export default Button;