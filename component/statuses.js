import React from 'react'
import Status from './status'

export default class Statuses extends React.Component {
    render() {
        return (
            <ul>
                {this.props.statuses.map((status) => <Status status={status} key={status.id}></Status>)}
            </ul>
        )
    }
}
