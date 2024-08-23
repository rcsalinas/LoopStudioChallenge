import { Schema, model } from 'mongoose';

const voteSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    countryCode: { type: String, required: true },
  },
  { timestamps: true }
);

const Vote = model('Vote', voteSchema);

export default Vote;
