import { faker } from '@faker-js/faker';

class Data {
  setRandomDesc() {
    return faker.lorem.words();
  }
}

module.exports = new Data();