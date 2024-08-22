import express from 'express';
import connectDB from './config/db';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Connect to database
connectDB();

// Middlewares
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
