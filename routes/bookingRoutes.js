const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

router.get('/', bookingController.getAllBookings);
router.get('/new', bookingController.newBookingForm);
router.post('/', bookingController.createBooking);
router.get('/:id/edit', bookingController.editBookingForm);
router.post('/:id', bookingController.updateBooking);
router.post('/:id/cancel', bookingController.cancelBooking);
router.post('/:id/confirm', bookingController.confirmBooking);

  
module.exports = router;
