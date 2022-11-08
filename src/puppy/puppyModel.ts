import { Schema, model } from 'mongoose';
import { PuppyResponse } from './puppyEntity';

const puppySchema = new Schema<PuppyResponse>({
  name: {
    type: String,
    required: [true, 'A puppy must have a name'],
    trim: true,
    // maxlength: [12, 'A name cannot have more than 12 characters'],
    minlength: [3, 'A name must have at least 3 characters'],
  },
  description: {
    type: String,
    trim: true,
    // maxlength: [120, 'A name cannot have more than 12 characters'],
    minlength: [10, 'A name must have at least 3 characters'],
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
    required: [true, 'A puppy must have a gender'],
  },
  image: {
    type: String,
    required: [true, 'A puppy must have an image'],
  },
  kind: {
    type: String,
    enum: ['gato', 'perro', 'ave', 'roedor'],
    required: true,
  },
  owner: {
    type: String,
    required: [true, 'A puppy must have an owner'],
    trim: true,
    maxlength: [25, 'A name cannot have more than 12 characters'],
    minlength: [3, 'A name must have at least 3 characters'],
  },
  phoneNumber: {
    type: String,
    required: true,
  },
});

const Puppy = model<PuppyResponse>('Puppy', puppySchema);

export default Puppy;
