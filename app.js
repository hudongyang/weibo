import "babel-polyfill"
import React from 'react'
import qs from 'qs'
import url from 'url'
import axios from 'axios'
import _ from 'lodash'
import weibo from './config/weibo'
import Statuses from './component/statuses'

import timeline from './data/timeline'

import './css/common'

export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            statuses: []
        }
    }

    render() {
        return (
            <Statuses statuses={this.state.statuses}></Statuses>
        )
    }

    async componentDidMount() {
        const query = qs.parse(url.parse(location.href).query)

        if(query.code) {
            return
        }

        //let resp = await axios.get('/weibo/2/statuses/home_timeline.json')
        //resp = resp.data

        this.setState(_.pick(timeline, 'statuses'))
    }
}
