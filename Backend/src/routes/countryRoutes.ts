import express from 'express';
import { getCountries } from '../controllers/countryController';

const router = express.Router();

// Route to get country via alphacode
router.get('/:alpha2Code', getCountries);

export default router;