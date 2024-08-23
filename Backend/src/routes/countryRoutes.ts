import express from 'express';
import {
  getTopCountries,
  searchCountries,
} from '../controllers/countryController';

const router = express.Router();

// Route to get top 10 countries
router.get('/top', getTopCountries);

// Route to search countries
router.get('/search', searchCountries);

export default router;
