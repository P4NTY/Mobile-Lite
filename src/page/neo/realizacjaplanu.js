import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import style from './realizacjaplanu.module.scss';
import 'c3/c3.css';

//import function
import { formatDate } from '../../utils/utils';
import { getDataMOBILE } from "../../utils/connection";

//import components
import Navbar from "../../components/Navbar/Navbar";
import InfoBox from '../../components/InfoBox/InfoBox';
import Switch from '../../components/Switch/Switch';
import Chart from '../../components/Charts/CatBarChart';

//set page URL for dbase query
const pageURL = 'neo/realizacja_planu';

//switch values
const arrSwitch = [
    {name: 'Sprzedaż', value: 'Elementy'},
    {name: 'DzNS', value: 'DzNS'},
    {name: 'Koszyki', value: 'Koszyki%20DzNS'}
];

const createChartArr = (items) => {
    const data = [['x'],['Realizacja Jednostki'],['Realizacja Banku']];
    items.forEach(({PRODUKT,REALIZACJA_JEDN,REALIZACJA_BANK})=>{
        data[0].push(PRODUKT.trim());
        data[1].push(Math.round(REALIZACJA_JEDN*100)/100);
        data[2].push(Math.round(REALIZACJA_BANK*100)/100);
    })
}

const RealizacjaPlanu = ({date, icbs}) => {
    const [DzNS_1, setDzNS_1] = useState(0);
    const [DzNS_2, setDzNS_2] = useState(0);
    const [chart, setChart] = useState(<></>);
    const [valSwitch, setValSwitch] = useState(arrSwitch[0].value);

    useEffect(()=>{
        getDataMOBILE(13, `$ICBS:${icbs},$DATE:${date}` , pageURL).then(
            (res) => res && setDzNS_1(res.data.items[0].REALIZACJA)
        )
        getDataMOBILE(29, `$ICBS:${icbs},$DATE:${date}` , pageURL).then(
            (res) => res && setDzNS_2(res.data.items[0].REALIZACJA)
        )
    }, [date, icbs])

    useEffect(()=>{
        getDataMOBILE(14, `$ICBS:${icbs},$DATE:${date},$MIARA:'${valSwitch}'`, pageURL).then(
            (res) => res ? (
                setChart(<Chart
                    items={createChartArr(res.data.items)}
                    timeline={res.data.items[0].LINIA_CZASU}
                    labels={['Realizacja Jednostki', 'Realizacja Banku']}
                />)
            ) : ''
        )
    }, [date, icbs, valSwitch])

    function changeSwitch(newValue){ setValSwitch(newValue); }

    return (
        <>
            <Navbar page="Realizacja Planu" isFilterBtnSee={true} />
            <p className={style.filter_value}>{date} , {icbs}</p>
            <div className={style.info_box_section}>
                <InfoBox title="DzNS Miesięczny" value={DzNS_1} unit="%"/>
                <InfoBox title="DzNS Kwartalny" value={DzNS_2} unit="%"/>
            </div>
            <Switch ArrValue={arrSwitch} startValue={valSwitch} fnChnage={changeSwitch}/>
            {chart}
        </>
    );
}

RealizacjaPlanu.propTypes = {
    date: PropTypes.string,
    icbs: PropTypes.string
}

RealizacjaPlanu.defaultProps = {
    date: formatDate('2020-01-31'),
    icbs: '1007'
}

export default RealizacjaPlanu;