import { Request, Response } from 'express';
import { fetchCountryData } from '../utils/fetchCountryData';


export const getCountries = async (req: Request, res: Response) => {
  try {
    const countryCode = req.params.alpha2Code;

    const countryData = await fetchCountryData(countryCode);

    res.json(countryData);

  } catch (error) {
    console.error('Error getting top countries:', error);
    res.status(500).json({ message: 'Server error' });
  }
};