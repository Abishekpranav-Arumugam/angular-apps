const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/jewelleryshop', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB', err);
});

// Define Schema
const jewelleryItemSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  phoneNo: String,
  paymentMethod: String,
  address: String,
});

const JewelleryItem = mongoose.model('JewelleryItem', jewelleryItemSchema);

// POST Route to save form data
app.post('/api/orders', async (req, res) => {
  const { firstName, lastName, phoneNo, paymentMethod, address } = req.body;
  const newItem = new JewelleryItem({ firstName, lastName, phoneNo, paymentMethod, address });
  try {
    await newItem.save();
    res.status(201).json({ message: 'Order saved successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
