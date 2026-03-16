import express from 'express'
import { getLocations } from '../controllers/locations.js'


const router = express.Router()

// define routes to get locations
router.get('/', getLocations)


export default router
