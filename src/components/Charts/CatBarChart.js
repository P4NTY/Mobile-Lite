import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useUID } from 'react-uid';
import style from "./Charts.module.scss";

import 'c3/c3.css';
import c3 from 'c3';
import * as d3 from 'd3';

//import function
import { getCssVar, mapLabelColor } from '../../utils/utils';

const Chart = ({labels, items, timeline, colors}) => {
    const id = `chart_${useUID()}`

    useEffect(()=>{
        c3.generate({
            bindto: `#${id}`,
            size: {
                height: 600
            },
            data: {
                x: 'x',
                columns: items,
                type: 'bar',
                labels: true,
                order: null,
                colors: mapLabelColor(labels, colors),
                color: (color, d) => d.value < timeline ? d3.rgb(color).darker(0.8) : color
            },
            axis: {
                rotated: true,
                x: {
                    type: "category"
                },
                y: {
                    show: false
                }
            },
            grid: {
                y: {
                    lines: [{value: timeline, text: 'Plan', class: style.Line}]
                }
            }
        })
    }, [])

    return ( <div id={id}></div> )
}

Chart.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.arrayOf(
            PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
            ])
        )
    ).isRequired,
    labels: PropTypes.arrayOf( PropTypes.string ),
    timeline: PropTypes.number,
    colors: PropTypes.arrayOf( PropTypes.string )
}

Chart.defaultProps = {
    timeline: -Infinity,
    colors: [
        getCssVar('--Red'),
        getCssVar('--Light-Grey'),
        getCssVar('--Turquoise'),
        getCssVar('--Lime-Green'),
        getCssVar('--Purple'),
        getCssVar('--Yellow'),
        getCssVar('--Blue'),
    ]
}

export default Chart;