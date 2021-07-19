import React from 'react'
import './index.css'

export const StatsBox = ({title, statsVal}:any) => {
    return (
        <div className='stats-box' >
            <p>{title}</p>
            <h1>{statsVal}</h1>
        </div>
    )
}
