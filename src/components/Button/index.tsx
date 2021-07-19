import React, { FunctionComponent } from 'react'
import './index.css'

export const PrimaryBtn = ({text}:any) => {
    return (
        <button className='primary-btn' >
            {text}
        </button>
    )
}
export const SecondaryBtn = ({text}:any) => {
    return (
        <button className='secondary-btn' >
            {text}
        </button>
    )
}
export const DangerBtn = ({text}:any) => {
    return (
        <button className='danger-btn' >
            {text}
        </button>
    )
}
export const SecondaryBtnOutline = ({text}:any) => {
    return (
        <button className='secondary-outline-btn' >
            {text}
        </button>
    )
}
export const EditBtn = ({text}:any) => {
    return (
        <button>
            {text}
        </button>
    )
}
export const DeleteBtn = ({text}:any) => {
    return (
        <button>
            {text}
        </button>
    )
}
