import { puppyModel } from './puppyModel';

export class PuppyRepository {
  static async getAllPuppies() {
    const puppies = await puppyModel();

    return puppies;
  }

  static async getOnePuppy(id: string) {
    const puppies = await puppyModel();

    return puppies.find((puppy) => puppy.id === id);
  }
}
