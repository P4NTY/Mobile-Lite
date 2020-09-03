import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const CountSort = (data) => {
    const result = [], rowCount = data.length, columnCount = data[0].length;

    for (let column = 0; column < data[0].length; column++) {
        
    }

    return result;
}

const Table = ({header, data}) => {

    const [items] = useState(CountSort(data));

    return (
        <table>
            <thead>
                <tr>
                    { header.map( (head, index) => <th key={index}> head </th>) }
                </tr>
            </thead>
            <tbody>
                { items.map( (row, index) => (
                    <tr key={index}>
                        { row.map( val => ( <td key={`${index}_${val}`}> val </td> )) }
                    </tr>
                )) }
            </tbody>
        </table>
    )
}

Table.propTypes = {
    header: PropTypes.arrayOf( PropTypes.string ),
    data : PropTypes.arrayOf(
        PropTypes.arrayOf(
            PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
            ])
        )
    )
}

Table.defaultProps = {
    header: [ 'Header','Header','Header','Header','Header' ],
    data: [
        ['Value 1','Value 2','Value 3','Value 4','Value 5'],
        ['Value 6','Value 7','Value 8','Value 9','Value 10'],
    ]
}

export default Table;