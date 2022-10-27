import { readFileSync } from 'fs';
import { PuppyResponse } from './puppyEntity';

const lazyData: PuppyResponse[] = JSON.parse(
  readFileSync('src/data/apitest.json', 'utf-8')
);

export const puppyModel = (): Promise<PuppyResponse[]> => {
  return new Promise((resolve, reject) => {
    resolve(lazyData);
  });
};
