const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 5001;

// --- MIDDLEWARE ---
app.use(cors());
app.use(express.json()); // Essential for reading form data

// --- DATABASE CONNECTION ---
const mongoURI = "mongodb+srv://bansalhimanshu960_db_user:Himanshu123@cluster0.x5qv4x5.mongodb.net/portfolio?retryWrites=true&w=majority";

mongoose.connect(mongoURI)
  .then(() => console.log("✅ MongoDB Connected Successfully!"))
  .catch(err => {
    console.log("❌ MongoDB Connection Error:");
    console.error(err.message);
  });

// --- DATABASE SCHEMA & MODEL ---
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

// --- ROUTES ---

// 1. Test Route
app.get('/', (req, res) => {
  res.send("🚀 Server is live and Database is connected!");
});

// 2. STEP 2: The Contact Form Route (The Mailbox)
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Create a new entry
    const newMessage = new Contact({ name, email, message });

    // Save to MongoDB
    await newMessage.save();

    res.status(201).json({ 
      success: true, 
      message: "Your message has been saved to the database!" 
    });
  } catch (error) {
    console.error("Error saving to DB:", error);
    res.status(500).json({ 
      success: false, 
      message: "Server error, could not save message." 
    });
  }
});

// --- START SERVER ---
app.listen(PORT, () => {
  console.log(`🚀 Server live on http://localhost:${PORT}`);
});