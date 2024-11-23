const Booking = require('../models/booking');

exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.render('bookings/list', { bookings });
  } catch (err) {
    res.status(500).send('Error retrieving bookings');
  }
};

exports.newBookingForm = (req, res) => {
  res.render('bookings/new');
};

exports.createBooking = async (req, res) => {
  const { customerName, date, time } = req.body;
  try {
    const existingBooking = await Booking.findOne({ date, time });
    if (existingBooking) {
      return res.status(400).send('This time slot is already booked.');
    }

    await Booking.create({ customerName, date, time });
    res.redirect('/bookings');
  } catch (err) {
    res.status(500).send('Error creating booking');
  }
};

exports.editBookingForm = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    res.render('bookings/edit', { booking });
  } catch (err) {
    res.status(500).send('Error retrieving booking for editing');
  }
};

exports.updateBooking = async (req, res) => {
  const { customerName, date, time } = req.body;
  try {
    await Booking.findByIdAndUpdate(req.params.id, { customerName, date, time });
    res.redirect('/bookings');
  } catch (err) {
    res.status(500).send('Error updating booking');
  }
};

exports.cancelBooking = async (req, res) => {
  try {
    await Booking.findByIdAndUpdate(req.params.id, { status: 'Cancelled' });
    res.redirect('/bookings');
  } catch (err) {
    res.status(500).send('Error cancelling booking');
  }
};
exports.confirmBooking = async (req, res) => {
    try {
      await Booking.findByIdAndUpdate(req.params.id, { status: 'Confirmed' });
      res.redirect('/bookings');
    } catch (err) {
      res.status(500).send('Error confirm booking');
    }
  };
