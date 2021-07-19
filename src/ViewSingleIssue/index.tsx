import { RouteComponentProps } from '@reach/router'
import React from 'react'
import { DangerBtn, PrimaryBtn, SecondaryBtn, SecondaryBtnOutline } from '../components/Button'
import './index.css'

interface ViewSingleIssueProps extends RouteComponentProps {
    issueID?:string
}

export const ViewSingleIssue = (props:ViewSingleIssueProps) => {
    return (
        <div className='view-single-issue'>
            <div style={{ maxWidth: 768}} >
                <div>
                <p>Issue Name with ID# {props.issueID} </p>
                <h1>Update landing page colors</h1>
                </div>
                <div>
                <p>Priority</p>
                <h1>Low</h1>
                </div>
                <div>
                <p>Assigned To</p>
                <h1>Ken Ijiwoye</h1>
                </div>
                <div>
                <p>Status</p>
                <h1>Open</h1>
                </div>
                <div>
                <h2>Description</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos magnam eaque corrupti at, ipsum, consectetur perferendis laboriosam cumque dolore pariatur ipsa. Ullam aspernatur non tempore magnam dolor rerum facilis nostrum.</p>
                </div>
            </div>
            <div>
                <div style ={{ textAlign: 'right'}}>
                    <p>Created by</p>
                    <h1>Someone</h1>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
                    <SecondaryBtnOutline text='GO BACK' />
                    <PrimaryBtn text='CLOSE ISSUE' />
                </div>
                <div>
                <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
                    <SecondaryBtn text='EDIT' />
                    <DangerBtn text='DELETE' />
                </div>
            </div>
            </div>
            
        </div>
    )
}
