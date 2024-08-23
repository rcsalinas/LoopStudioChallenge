import express from 'express';
import connectDB from './config/db';
import dotenv from 'dotenv';
import countryRoutes from './routes/countryRoutes';
import voteRoutes from './routes/voteRoutes';

dotenv.config();

const app = express();

// Connect to database
connectDB();

// Middlewares
app.use(express.json());

// Routes
app.use('/api/countries', countryRoutes);
app.use('/api/votes', voteRoutes);

app.get('/', (_, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
