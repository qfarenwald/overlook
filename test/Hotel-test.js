import chai from 'chai';
const expect = chai.expect;
// const spies = require('chai-spies');
// chai.use(spies);

import Hotel from '../src/Hotel.js';

// chai.spy.on(file, ['function1', 'function2'], () => {});

describe('Hotel', () => {
  let hotel;

  beforeEach(() => {
    hotel = new Hotel();
  });

  it('should be a function', () => {
    expect(Hotel).to.be.a('function');
  });

  it('should get customers', () => {
    expect(hotel.customers).to.equal([]);
  });

  it('should get todays date', () => {
    expect(hotel.getDate()).to.equal('2019/09/11');
  });

  // it('should get total rooms avail today', () => {
  //   expect(hotel.getDate()).to.equal('2019/09/11');
  // });

});
