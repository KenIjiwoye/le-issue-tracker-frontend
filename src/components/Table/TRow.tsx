import React from 'react'
import { useNavigate } from "@reach/router"

export const TRow = ({issueName,priority,assignTo,date,id,status,description,createdBy}:any) => {
    const navigate = useNavigate()
    return (
        <tr onClick={(e) => {
            e.preventDefault();
            navigate(`/issue/${id}`, { state: { id,issueName,priority,assignTo,date,status,description,createdBy }})
        }} style ={{
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
