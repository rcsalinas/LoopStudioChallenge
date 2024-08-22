import mongoose, { Document, Schema } from 'mongoose';

export interface ICountry extends Document {
  name: string;
  officialName: string;
  capital: string;
  region: string;
  subregion: string;
  alpha2Code: string;
  votes: number;
}

const CountrySchema: Schema = new Schema({
  name: { type: String, required: true },
  officialName: { type: String, required: true },
  capital: { type: String, required: true },
  region: { type: String, required: true },
  subregion: { type: String, required: true },
  alpha2Code: { type: String, required: true, unique: true },
  votes: { type: Number, default: 0 },
});

export default mongoose.model<ICountry>('Country', CountrySchema);