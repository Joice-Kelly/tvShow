import { Document, model, Schema } from "mongoose";

export interface Show extends Document {
  id: string;
  title: string;
  premiere: Date;
  isRunning?: boolean;
  language: string;
  mainGenre: string;
  posterUrl?: string;
}

const schema = new Schema<Show>({
  title: { type: String, required: true },
  premiere: { type: Date, required: true },
  isRunning: { type: Boolean, default: false },
  language: { type: String, required: true },
  mainGenre: { type: String, required: true },
  posterUrl: { type: String },
});

export const ShowModel = model<Show>("Show", schema);

export const validateShowInputs = (showObj: any) => {
  const { title, premiere, language, mainGenre } = showObj;
  const errorMessages: string[] = [];
  if (!title || title.length < 5) {
    errorMessages.push("Title must have at least 5 characters");
  }
  if (!premiere) {
    errorMessages.push("Premiere data is required");
  }
  if (!language) {
    errorMessages.push("Language is required");
  }
  if (!mainGenre) {
    errorMessages.push("Main genre is required");
  }

  return errorMessages.length > 0 ? errorMessages : null;
};
