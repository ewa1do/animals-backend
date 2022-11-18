import ApiFeatures from '../utils/APIFeatures';
import { PuppyResponse } from './puppyEntity';
import Puppy from './puppyModel';

class PuppyRepository {
  constructor() {}

  async createPuppy(body: PuppyResponse) {
    const newPuppy = await Puppy.create(body);

    return newPuppy;
  }

  async getAllPuppies(query: any) {
    const puppies = Puppy.find();

    const features = new ApiFeatures(puppies, query)
      .filter()
      .limitFields()
      .paginate();

    return await features.query;
  }

  async getOnePuppy(id: string) {
    const puppy = await Puppy.findById(id);

    return puppy;
  }

  async deleteOnePuppy(id: string) {
    return await Puppy.findByIdAndDelete(id);
  }
}

export default new PuppyRepository();
