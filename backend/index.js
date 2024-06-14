const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv'); // Import dotenv

const userModel = require('./models/user');
const appointmentModel = require('./models/appointment');

const app = express();
const port = 3001;

// Configure dotenv
dotenv.config();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/saloon_register", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Nodemailer transporter setup using environment variables
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Signup Route
app.post('/Signup', async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already registered' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await userModel.create({ name, email, password: hashedPassword });
        res.json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Login Route
app.post('/Login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.json('No record existing');
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            res.json('Success');
        } else {
            res.json('The password is incorrect');
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Appointment Booking Route
app.post('/Appointment', async (req, res) => {
    const { name, email, date, time } = req.body;

    if (!name || !email || !date || !time) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const appointment = await appointmentModel.create({ name, email, date, time });

        // Send confirmation email
        const mailOptions = {
            from: process.env.EMAIL_USER, // Use environment variable
            to: email,
            subject: 'Appointment Confirmation',
            text: `Dear ${name},\n\nYour appointment is confirmed for ${date} at ${time}.\n\nThank you!`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                return res.status(500).json({ error: 'Failed to send confirmation email' });
            }
            console.log('Email sent:', info.response);
            res.status(200).send('Appointment booked and email sent');
        });
    } catch (err) {
        console.error('Error booking appointment:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
