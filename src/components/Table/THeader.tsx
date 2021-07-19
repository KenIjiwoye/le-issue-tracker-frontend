import React from 'react'

export const THeader = () => {
    return (
        <tr style ={{
            display: 'flex',
            justifyContent: 'space-around',
            backgroundColor: '#122758',
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            padding: '1em',
            color: 'white'
        }} >
            <th>Issue Name</th>
            <th>Priority</th>
            <th>Assigned To</th>
            <th>Date</th>
        </tr>
    )
}
