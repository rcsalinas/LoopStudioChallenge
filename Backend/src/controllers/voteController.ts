import { Request, Response } from 'express';
import Vote from '../models/Vote';
import Country from '../models/Country';
import { fetchCountryData } from '../utils/fetchCountryData';

export const createVote = async (req: Request, res: Response) => {
  const { name, email, countryCode } = req.body;

  try {
    // Check if the user has already voted
    const existingVote = await Vote.findOne({ email });
    if (existingVote) {
      return res.status(400).json({ message: 'You have already voted' });
    }

    // Fetch country data from the public API
    const countryData = await fetchCountryData(countryCode);

    // Check if country exists in the database
    let country = await Country.findOne({ alpha2Code: countryCode });

    if (!country) {
      // Create a new country entry if it doesn't exist
      country = new Country({
        name: countryData.name.common,
        officialName: countryData.name.official,
        capital: countryData.capital[0],
        region: countryData.region,
        subregion: countryData.subregion,
        alpha2Code: countryData.cca2,
        votes: 1,
      });
    } else {
      // Increment the votes count for existing country
      country.votes += 1;
    }

    // Create a new vote entry
    const vote = new Vote({
      name,
      email,
      countryCode,
    });

    await vote.save();
    await country.save();

    return res
      .status(201)
      .json({ message: 'Your vote was succesfully submitted', country });
  } catch (error) {
    console.error('Error creating vote:', error);
    return res.status(500).json({ message: 'Server Error' });
  }
};
