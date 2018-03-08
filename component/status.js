import React from 'react'
import moment from 'moment'
import style from './status.css'

export default class Status extends React.Component {
    render() {
        return (
            <li className={style.status_item}>
                <div className={style.desc}>
                    <img className={style.avatar} src={this.user.profile_image_url} />
                    <div className={style.user_info}>
                        <strong>{this.user.name}</strong>
                        <span className={style.timestamp}>{moment(this.props.status.created_at).format('YYYY MM DD hh:mm:ss')}</span>
                    </div>
                </div>

                <div className={style.content}>{this.props.status.text}</div>
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
