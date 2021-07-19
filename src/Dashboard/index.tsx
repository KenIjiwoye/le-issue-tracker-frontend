import React from 'react'
import { PrimaryBtn, SecondaryBtnOutline } from '../components/Button'
import { Table } from '../components/Table'
import { Navbar } from './Navbar'
import { Stats } from './Stats'
import { RouteComponentProps } from '@reach/router'

interface DashboardProps extends RouteComponentProps {}

export const Dashboard = (props: DashboardProps) => {
    return (
        <div style ={{
            // paddingTop: '1em',
            // paddingBottom: '1em',
            // paddingLeft: '4em',
            // paddingRight: '4em'
        }} >
            {/* <Navbar /> */}
            <h1>Dashboard</h1>
            <Stats />
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }} >
                <h2>Open Issues</h2>
                <div>
                    <SecondaryBtnOutline text='ALL ISSUES' />
                    <SecondaryBtnOutline text='MY ISSUES' />
                    <PrimaryBtn text='NEW ISSUE' />
                </div>
            </div>
            <Table />
        </div>
    )
}
