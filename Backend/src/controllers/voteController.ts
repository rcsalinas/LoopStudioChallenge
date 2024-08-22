import mongoose, { Document, Schema } from 'mongoose';

export interface IVote extends Document {
  userId: mongoose.Schema.Types.ObjectId;
  countryCode: string;
  timestamp: Date;
}

const VoteSchema: Schema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  countryCode: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.model<IVote>('Vote', VoteSchema);