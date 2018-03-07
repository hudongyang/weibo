import React from 'react'
import moment from 'moment'
import style from './status'
console.log(style)
export default class Status extends React.Component {
    render() {
        return (
            <li>
                <div className="desc">
                    <img className={style.avatar} src={this.user.profile_image_url} />
                    <div className="user-info">
                        <strong>{this.user.name}</strong>
                        <span className="timestamp">{moment(this.props.status.created_at).format('YYYY MM DD hh:mm:ss')}</span>
                    </div>
                </div>
            </li>
        )
    }

    get user() {
        return this.props.status.user
    }

    componentDidMount() {
        //console.log(this.user)
    }
}
