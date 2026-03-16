import express from 'express'
import { getEvents } from '../controllers/events.js'


const router = express.Router()

// define routes to get events
router.get('/', getEvents)


export default router
