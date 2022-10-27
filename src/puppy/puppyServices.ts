import { PuppyRepository } from './puppyRepository';

export class PuppyServices {
  constructor() {}

  async getAll() {
    return PuppyRepository.getAllPuppies();
  }

  async getOne(id: string) {
    return PuppyRepository.getOnePuppy(id);
  }
}
