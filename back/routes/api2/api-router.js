const express = require('express')
const router = express.Router()
const { pool } = require('../../modules/mysql-init')
const jwt = require('jsonwebtoken')

router.get('/', async (req,res,next)=>{
	let sql
	try {
		res.cookie('test', '3100')
		console.log(req.cookies)
		if(req.cookies) {
			res.json({ success : true, cookie: req.cookies.test })
		}
		else {
			res.json({ success: true, msg : '쿠키발행' })
		}
	}
	catch(err) {
		res.status(500).json(err)
	}
})

module.exports = router