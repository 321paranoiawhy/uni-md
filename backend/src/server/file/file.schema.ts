import { Schema } from 'mongoose';

export const fileSchema = new Schema({
  _id: { type: String, required: true },
  url: { type: String, required: true },
});
