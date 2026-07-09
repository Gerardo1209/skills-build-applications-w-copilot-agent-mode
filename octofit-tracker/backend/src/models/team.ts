import mongoose, { Schema, Document } from 'mongoose';

export interface ITeam extends Document {
  name: string;
  members: string[];
  focus: string;
}

const teamSchema = new Schema<ITeam>({
  name: { type: String, required: true, unique: true },
  members: [{ type: String }],
  focus: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model<ITeam>('Team', teamSchema);
