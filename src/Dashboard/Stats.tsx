import React from 'react'
import { StatsBox } from '../components/StatsBox'

export const Stats = ({showIssues } :any) => {
    const completedIssues = () => {
        let issues =[]
        showIssues.map((issue:any) => {
            if(issue.status == 'closed'){
                issues.push(issue)
            }
        })

        return issues.length
    }
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
            <StatsBox title='Open Issues' statsVal={`${showIssues? (showIssues.length): ('--')}`} />
            <StatsBox title='Closed Issues' statsVal={`${showIssues? (completedIssues()):'--'}`} />
            <StatsBox title='% Completed' statsVal={`${showIssues? (completedIssues() /showIssues.length * 100): ('--')} %`} />
        </div>
        </div>
    )
}
