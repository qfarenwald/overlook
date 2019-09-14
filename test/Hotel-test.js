import chai from 'chai';
const expect = chai.expect;
// const spies = require('chai-spies');
// chai.use(spies);

import Hotel from '../src/Hotel.js';
import bookingsData from '../data/bookings.js';
import roomsData from '../data/rooms.js';
import roomsServicesData from '../data/roomServices.js';
import usersData from '../data/users.js';

// chai.spy.on(file, ['function1', 'function2'], () => {});

describe('Hotel', () => {
  let hotel;

  beforeEach(() => {
    hotel = new Hotel(usersData, roomsData, bookingsData, roomsServicesData);
  });

  it('should be a function', () => {
    expect(Hotel).to.be.a('function');
  });

  it('should get total revenue for today', () => {
    expect(hotel.totalRevenueToday("2019/09/15")).to.equal(7397.04);
  });

  // spices
  // it('should open hotel', () => {
  //   expect(hotel.openHotel("2019/09/15")).to.equal(7397.04);
  // });

});
