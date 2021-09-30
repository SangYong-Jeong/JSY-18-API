// npm i express uuid dotenv cors ejs mysql2 http-errors jsonwebtoken

// npm i express lodash numeral moment dotenv ejs cors mysql2 sequelize passport uuid multer http-errors express-session helmet morgan

/*************** global init **************/
require('dotenv').config()
const port = process.env.PORT
const path = require('path')
const express = require('express')
const app = express()
const jwt = require('jsonwebtoken');


/*************** server init **************/
require('./modules/server-init')(app, process.env.PORT)


/************** view engine ***************/
app.set('view engine', 'ejs')
app.set('views', './views')
app.locals.pretty = true


/*************** middleware ***************/
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


/*************** static init **************/
app.use('/', express.static(path.join(__dirname, 'public')))


/*************** router init **************/
const apiRouter = require('./routes/api')
app.use('/api', apiRouter)


app.get('/token', (req,res,next)=>{
	let token = jwt.sign(
		{ userid: 'booldook', nickname: '불둑' }, 
		process.env.JWT_KEY, 
		{ expiresIn: 60 * 60 });
	res.send(token)
})


/**************** error init **************/
const _404Router = require('./routes/error/404-router')
const _500Router = require('./routes/error/500-router')

app.use(_404Router)
app.use(_500Router)

