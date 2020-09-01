import React from 'react';
import PropTypes from 'prop-types';

import 'c3/c3.css';
import c3 from 'c3';
import * as d3 from 'd3';

//import function
import { getCssVar } from '../../utils/utils';

const Chart = ({labels, items, timeline}) => {
    c3.generate({
        bindto: "#chart1",
        size: {
            height: 600
        },
        data: {
            x: 'x',
            columns: items,
            type: 'bar',
            order: null,
            colors: {
                'Realizacja Jednostki': getCssVar('--Red'),
                'Realizacja Banku': getCssVar('--Light-Grey')
            },
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

    return ( <div id="chart1"></div> )
}

Chart.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.arrayOf(
            PropTypes.oneOfType(
                PropTypes.string,
                PropTypes.number
            )
        )
    ).isRequired,
    labels: PropTypes.arrayOf( PropTypes.string ).isRequired,
    timeline: PropTypes.number
}

Chart.defaultProps = {
    timeline: 0
}

export default Chart;