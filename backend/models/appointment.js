const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true }
});

const appointmentModel = mongoose.model('appointments', appointmentSchema);
module.exports = appointmentModel;
