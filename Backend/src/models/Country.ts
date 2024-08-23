import { Schema, model } from 'mongoose';

const countrySchema = new Schema(
  {
    name: { type: String, required: true },
    officialName: { type: String, required: true },
    capital: { type: String, required: true },
    region: { type: String, required: true },
    subregion: { type: String, required: true },
    alpha2Code: { type: String, required: true, unique: true },
    votes: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Country = model('Country', countrySchema);

export default Country;
