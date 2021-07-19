import React from 'react'
import { TFooter } from './TFooter'
import { THeader } from './THeader'
import { TRow } from './TRow'

export const Table = () => {
    return (
        <table style={{
            width: '100%'
        }} >
            <THeader />
            <TRow issueName='Fix Colors on Landing Page' priority='Low' assignTo='Ken I.' date='July 18,2021' />
            <TRow issueName='Fix Colors on Landing Page' priority='Low' assignTo='Ken I.' date='July 18,2021' />
            <TFooter />
        </table>
    )
}
