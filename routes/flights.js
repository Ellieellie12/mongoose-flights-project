import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'

const router = Router()
// localhost:3000/flights
router.get('/', flightsCtrl.index)
// localhost:3000/flights/new
router.get('/new', flightsCtrl.new)
// localhost:3000/flights
router.post('/', flightsCtrl.create)
// localhost:3000/flights/:flightId
router.get('/:flightId', flightsCtrl.show)
// localhost:3000/flights/:flightId/tickets
router.post('/:flightId/tickets', flightsCtrl.createTicket)
// loca;host:3000/flights/:flightId/meals
router.post('/:flightId/meals', flightsCtrl.addToMeal)
// localhost:3000/flights/:flightId
router.delete('/:flightId', flightsCtrl.delete)
// localhost:3000/flights/:flightId/edit
router.get('/:flightId/edit', flightsCtrl.edit)
// localhost:3000/flights/:flightId
router.put("/:flightId", flightsCtrl.update)


export { 
  router 
}