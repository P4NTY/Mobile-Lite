import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import style from "./Switch.module.scss";

//import Utils function
import { log } from "../../utils/utils";

const Switch = ({ArrValue, startValue, fnChnage}) => {
    const bag = useRef(null);

    function selector_change(elem) {
        fnChnage( document.getElementById(elem.target.getAttribute('for')).value );
        bag.current.style.width = elem.target.offsetWidth + 'px';
        bag.current.style.left = elem.target.offsetLeft + 'px';
    }

    return (
        <div className={style.custom_selector}>
            <span className={style.item_selector} ref={bag}></span>
            {
                ArrValue.map(({value, name}, key)=>(
                    <span key={key}>
                        <input name="miara" type="radio" id={`${name}_${key}`} value={value} checked={value === startValue} readOnly/>
                        <label htmlFor={`${name}_${key}`} onClick={(e)=>(selector_change(e))}> {name} </label>
                    </span>
                ))
            }
        </div>
    )
}

Switch.propTypes = {
    ArrValue: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.shape({
                value: PropTypes.string,
                name: PropTypes.string
            })
        ])
    ),
    startValue: PropTypes.string,
    fnChnage: PropTypes.func
}

Switch.defaultProps = {
    ArrValue: [{value: '1', name: 'Value 1'},{value: '2', name: 'Value 2'}],
    startValue: '1',
    fnChnage: (e)=>{log(e)}
}

export default Switch;