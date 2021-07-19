import React from 'react'

export const TRow = ({issueName,priority,assignTo,date}:any) => {
    return (
        <tr style ={{
            display: 'flex',
            justifyContent: 'space-around',
            backgroundColor: '#fff',        
            padding: '1em',
            color: 'black',
            borderBottom: '2px solid #c2c2c2',
        }} >
            <td>{issueName}</td>
            <td>{priority}</td>
            <td>{assignTo}</td>
            <td>{date}</td>
        </tr>
    )
}
