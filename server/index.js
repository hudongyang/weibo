const Koa = require('koa')
const Router = require('koa-router')
const axios = require('axios')
const url = require('url')
const qs = require('querystring')
const _ = require('lodash')
const token = '2.00nmDjpB0QjxMG2a4f8ebef6QsEEQE'

const PORT = 3000

const weiboClient = axios.create({
    baseURL: 'https://api.weibo.com'
})

const app = new Koa()
const router = new Router()

router.get('/login', async(ctx) => {
    
})

router.get('/weibo/*', async(ctx) => {
    const URL = url.parse(ctx.url.replace('/weibo', ''))
    const query = _.merge(qs.parse(URL.query), {access_token: token})
    URL.search = '?' + qs.stringify(query)
    const resp = await weiboClient.get(url.format(URL))

    ctx.body = resp.data
})

app.use(router.routes())


app.listen(PORT)

console.log('app start on port %d', PORT)
