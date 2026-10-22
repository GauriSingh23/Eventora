const express = require("express");
const router = express.Router();
const { protect, admin } = require('../middleware/auth');
const { getEvents, getEventById, createEvent, updateEvent, deleteEvent } = require('../controllers/eventController');

//Get All Events
router.get('/', getEvents);

//Get Event By ID
router.get('/:id', getEventById);

//Create Event (Admin Only)
router.post('/', protect, admin, createEvent);  

//Update Event (Admin Only)
router.put('/:id', protect, admin, updateEvent);

//Delete Event (Admin Only)
router.delete('/:id', protect, admin, deleteEvent);

module.exports = router;