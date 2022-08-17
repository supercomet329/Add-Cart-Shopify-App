import bodyParser from 'body-parser'
import express from 'express'
import { verifyCode } from '../controllers/verifyCode.js'

const postRoutes = express.Router()

postRoutes.post('/verify-code', bodyParser.json(), verifyCode)

export default postRoutes
