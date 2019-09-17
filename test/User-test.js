import chai from 'chai';
const expect = chai.expect;

import User from '../src/User.js';
import usersData from '../data/users.js';

describe('User', () => {
  let user;

  beforeEach(() => {
    user = new User(usersData);
  });

  it('should be a function', () => {
    expect(User).to.be.a('function');
  });

});
