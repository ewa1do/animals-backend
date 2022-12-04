import { PuppyResponse } from './puppyEntity';
import repository from './puppyRepository';

class PuppyServices {
  constructor() {}

  async create(body: PuppyResponse) {
    return await repository.createPuppy(body);
  }

  async getAll(query: any) {
    const puppies = await repository.getAllPuppies(query);

    return puppies;
  }

  async getOne(id: string) {
    return await repository.getOnePuppy(id);
  }

  async update(id: string, body: any) {
    return await repository.updatePuppy(id, body);
  }

  async deleteOne(id: string) {
    return await repository.deleteOnePuppy(id);
  }
}

export default new PuppyServices();
