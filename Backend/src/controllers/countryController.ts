import { Request, Response } from 'express';
import Country from '../models/Country';

export const getTopCountries = async (_: Request, res: Response) => {
  try {
    // Retrieve the top 10 countries by votes count
    const topCountries = await Country.find()
      .sort({ votes: -1 }) // Sort by votes in descending order
      .limit(10); // Limit to top 10
    return res.status(200).json(topCountries);
  } catch (error) {
    console.error('Error retrieving top countries:', error);
    return res.status(500).json({ message: 'Server Error' });
  }
};


export const searchCountries = async (req: Request, res: Response) => {
  const { query } = req.query;

  try {
    // Search for countries based on query in name, capital, region, or subregion
    const searchResults = await Country.find({
      $or: [
        { name: { $regex: query, $options: 'i' } }, // Case-insensitive search in name
        { capital: { $regex: query, $options: 'i' } }, // Case-insensitive search in capital
        { region: { $regex: query, $options: 'i' } }, // Case-insensitive search in region
        { subregion: { $regex: query, $options: 'i' } } // Case-insensitive search in subregion
      ]
    });

    return res.status(200).json(searchResults);
  } catch (error) {
    console.error('Error searching countries:', error);
    return res.status(500).json({ message: 'Server Error' });
  }
};