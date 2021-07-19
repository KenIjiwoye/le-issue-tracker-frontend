import React from 'react'
import { StatsBox } from '../components/StatsBox'

export const Stats = () => {
    return (
        <div style={{
            display:'flex',
            justifyContent: 'center',
            marginBottom: '2em'
        }} >
            <div style={{
            display: 'flex',
            maxWidth: '768px'
        }} >
            <StatsBox title='Open Issues' statsVal='12' />
            <StatsBox title='Closed Issues' statsVal='36' />
            <StatsBox title='% Completed' statsVal='66%' />
        </div>
        </div>
    )
}
