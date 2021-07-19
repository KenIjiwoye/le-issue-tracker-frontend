import React from 'react'
import { RouteComponentProps, Link } from '@reach/router'

export const NotFound = (props:RouteComponentProps) => {
    return (
        <div>
            <h1>404</h1>
            <h2>Move along! There's nothing to see here!!</h2>
            <Link className='secondary-btn' to='/'>Return to sender</Link>
        </div>
    )
}
