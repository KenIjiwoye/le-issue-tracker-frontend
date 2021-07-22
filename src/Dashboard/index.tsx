import React from 'react'
import { PrimaryBtn, SecondaryBtnOutline } from '../components/Button'
import { Table } from '../components/Table'
import { Navbar } from './Navbar'
import { Stats } from './Stats'
import { RouteComponentProps, Link } from '@reach/router'
import { MainContext, MainProvider } from '../Contexts/MainContext'

interface DashboardProps extends RouteComponentProps {}

export const Dashboard = (props: DashboardProps) => {
    return (
        <MainProvider>
            <MainContext.Consumer>
                {context => {
                    return(
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
                                    <Link to='/new' className='primary-btn' style={{ textDecoration:'none'}}>NEW ISSUE</Link>
                                </div>
                            </div>
                            <Table issues={context.allIssues} />
                        </div>
                    )
                }}
            </MainContext.Consumer>
        </MainProvider>
    )
}
