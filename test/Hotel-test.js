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
    hotel = new Hotel(usersData, roomsData, roomsServicesData, bookingsData);
  });

  it('should be a function', () => {
    expect(Hotel).to.be.a('function');
  });

  it('should get todays date', () => {
    expect(hotel.getDate()).to.equal(hotel.getDate());
  });

  it('should find all rooms booked on a certain day', () => {
    expect(hotel.findRoomsBooked("2019/09/15")).to.deep.equal([
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

  it('should find all rooms serviced on a certain day', () => {
    expect(hotel.findRoomsServiced("2019/09/15")).to.deep.equal([
      {
        "date": "2019/09/15",
        "food": "Rustic Concrete Sandwich",
        "totalCost": 6.56,
        "userID": 90
      }
    ]);
  });

  it('should get total rooms avail today', () => {
    expect(hotel.totalRoomsAvailToday("2019/09/15")).to.equal();
  });

  it('should get total revenue for today', () => {
    expect(hotel.totalRevenueToday("2019/09/15")).to.equal();
  });

  it('should get percentage of rooms occupied today', () => {
    expect(hotel.percentageRoomsOccToday("2019/09/15")).to.equal();
  });

});
