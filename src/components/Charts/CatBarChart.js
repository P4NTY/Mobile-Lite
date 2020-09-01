import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import 'c3/c3.css';
import c3 from 'c3';
import * as d3 from 'd3';

//import function
import { getCssVar, createLabelColor } from '../../utils/utils';

const Chart = ({labels, items, timeline, colors}) => {
    const id = `chart_${Math.round(Math.random()*100)}`

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
                order: null,
                colors: createLabelColor(labels, colors),
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
            }
        })
    }, [items, colors, labels, id, timeline])

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
    timeline: 0,
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