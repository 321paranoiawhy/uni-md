import { Document } from 'mongoose';

export interface MarkdownFile extends Document {
  readonly _id: string;
  readonly url: string;
}
