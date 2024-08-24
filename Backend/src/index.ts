import express from 'express';
import connectDB from './config/db';
import dotenv from 'dotenv';
import countryRoutes from './routes/countryRoutes';
import voteRoutes from './routes/voteRoutes';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(
  cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true,
  })
);

app.options('*', cors());

if (process.env.NODE_ENV !== 'test') {
  connectDB
    .connect()
    .catch((error: Error) =>
      console.error('Failed to connect to the database:', error)
    );
}

// Middlewares
app.use(express.json());

// Routes
app.use('/api/countries', countryRoutes);
app.use('/api/votes', voteRoutes);

app.get('/', (_, res) => {
  res.send('API is running...');
});

if (process.env.NODE_ENV !== 'test') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

export default app;
