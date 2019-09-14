import chai from 'chai';
const expect = chai.expect;
import spies from 'chai-spies'
// const spies = require('chai-spies');
chai.use(spies);

import Booking from '../src/Booking.js';
import roomsData from '../data/rooms.js';
import bookingsData from '../data/bookings.js';
import domUpdates from '../src/domUpdates.js'

describe('Booking', () => {
  let booking;

  beforeEach(() => {
    booking = new Booking(roomsData, bookingsData);
    chai.spy.on(domUpdates, ['appendRoomsAvailToday'], () => true);
  });

  afterEach(() => {
    chai.spy.restore(domUpdates)
  });

  it('should be a function', () => {
    expect(Booking).to.be.a('function');
  });

  it('should find all rooms booked on a certain day', () => {
    expect(booking.findRoomsBooked("2019/09/15")).to.deep.equal([
      { userID: 65, date: '2019/09/15', roomNumber: 44 },
      { userID: 95, date: '2019/09/15', roomNumber: 36 },
      { userID: 38, date: '2019/09/15', roomNumber: 6 },
      { userID: 85, date: '2019/09/15', roomNumber: 38 },
      { userID: 17, date: '2019/09/15', roomNumber: 32 },
      { userID: 16, date: '2019/09/15', roomNumber: 20 },
      { userID: 66, date: '2019/09/15', roomNumber: 24 },
      { userID: 9, date: '2019/09/15', roomNumber: 5 },
      { userID: 63, date: '2019/09/15', roomNumber: 19 },
      { userID: 89, date: '2019/09/15', roomNumber: 40 },
      { userID: 89, date: '2019/09/15', roomNumber: 50 },
      { userID: 90, date: '2019/09/15', roomNumber: 7 },
      { userID: 52, date: '2019/09/15', roomNumber: 35 },
      { userID: 24, date: '2019/09/15', roomNumber: 48 },
      { userID: 18, date: '2019/09/15', roomNumber: 33 },
      { userID: 46, date: '2019/09/15', roomNumber: 4 },
      { userID: 7, date: '2019/09/15', roomNumber: 11 },
      { userID: 66, date: '2019/09/15', roomNumber: 21 },
      { userID: 94, date: '2019/09/15', roomNumber: 22 },
      { userID: 6, date: '2019/09/15', roomNumber: 42 },
      { userID: 7, date: '2019/09/15', roomNumber: 45 },
      { userID: 18, date: '2019/09/15', roomNumber: 29 },
      { userID: 61, date: '2019/09/15', roomNumber: 25 }
    ]);
  });

  it('should get total rooms avail today', () => {
    // expect(booking.totalRoomsAvailToday("2019/09/15")).to.equal(27);
    booking.totalRoomsAvailToday('2019/09/15')
    expect(domUpdates.appendRoomsAvailToday).to.have.been.called(1);
  });

  it('should get total room revenue for today', () => {
    expect(booking.totalRoomRevenueToday("2019/09/15")).to.equal(7390.48);
  });

  it('should get percentage of rooms occupied today', () => {
    expect(booking.percentageRoomsOccToday("2019/09/15")).to.equal(46);
  });

});
