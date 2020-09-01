import React from 'react';
import PropTypes from 'prop-types';
import style from "./InfoBox.module.scss";

const InfoBox = ({ title, value, unit, change, chart_data, chart_type, avg}) => (
    <>
        <div className={`${style.box} ${value > avg ? style.good : style.bad}`}>
            {title ? <p className={style.title}>{title}</p> : ''}
            {value ? <p className={style.number}>{unit ? value.toLocaleString('fr-FR', {minimumFractionDigits: 0, maximumFractionDigits: 2}) + unit : value.toLocaleString('fr-FR', {minimumFractionDigits: 0, maximumFractionDigits: 2})}</p> : ''}
            {change ? <p className={style.change}>({change.toLocaleString('fr-FR', {minimumFractionDigits: 0, maximumFractionDigits: 2})})</p> : ''}
            {chart_data ? '' : ''}
        </div>
    </>
)

InfoBox.propTypes = {
    title: PropTypes.string,
    value: PropTypes.number.isRequired,
    unit: PropTypes.string,
    change: PropTypes.number,
    avg: PropTypes.number,
    chart_type: PropTypes.string,
    chart_data: PropTypes.array
}

InfoBox.defaultProps = {
    title: '',
    unit: '',
    change: 0,
    avg: 100,
    chart_type: 'bar',
    chart_data: []
}

export default InfoBox;