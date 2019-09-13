import chai from 'chai';
const expect = chai.expect;
// const spies = require('chai-spies');
// chai.use(spies);

import User from '../src/User.js';
import usersData from '../data/users.js';

// chai.spy.on(file, ['function1', 'function2'], () => {});

describe('User', () => {
  let user;

  beforeEach(() => {
    user = new User(usersData);
  });

  it('should be a function', () => {
    expect(User).to.be.a('function');
  });

});
