import chai from 'chai';
const expect = chai.expect;
import spies from 'chai-spies'
chai.use(spies);

import Booking from '../src/Booking.js';
import roomsData from '../data/rooms.js';
import bookingsData from '../data/bookings.js';
import domUpdates from '../src/domUpdates.js'

describe('Booking', () => {
  let booking;

  beforeEach(() => {
    booking = new Booking(roomsData, bookingsData);
    chai.spy.on(domUpdates, ['appendRoomsAvailToday', 'appendRoomsOccToday', 'appendMostPopDate', 'appendLeastPopDate'], () => true);
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
    expect(booking.totalRoomsAvailToday("2019/09/15")).to.equal(27);
    expect(domUpdates.appendRoomsAvailToday).to.have.been.called(1);
  });

  it('should get total room revenue for today', () => {
    expect(booking.totalRoomRevenueToday("2019/09/15")).to.equal(7390.48);
  });

  it('should get percentage of rooms occupied today', () => {
    expect(booking.percentageRoomsOccToday("2019/09/15")).to.equal(46);
    expect(domUpdates.appendRoomsOccToday).to.have.been.called(1);
  });

  it('should get object of dates and number of bookings per date', () => {
    expect(booking.getPopularityOfDates()).to.deep.equal({
      '2019/10/19': 12,
      '2019/10/30': 18,
      '2019/09/01': 18,
      '2019/08/28': 22,
      '2019/08/16': 23,
      '2019/09/05': 15,
      '2019/10/29': 21,
      '2019/08/27': 24,
      '2019/09/26': 26,
      '2019/09/27': 20,
      '2019/09/29': 19,
      '2019/08/29': 17,
      '2019/09/06': 20,
      '2019/08/30': 20,
      '2019/07/26': 19,
      '2019/08/08': 16,
      '2019/10/18': 19,
      '2019/09/04': 21,
      '2019/10/07': 19,
      '2019/08/12': 21,
      '2019/08/02': 23,
      '2019/07/27': 19,
      '2019/09/30': 19,
      '2019/07/30': 19,
      '2019/10/17': 20,
      '2019/10/11': 25,
      '2019/08/01': 19,
      '2019/08/09': 22,
      '2019/08/17': 16,
      '2019/08/05': 17,
      '2019/10/10': 16,
      '2019/08/11': 21,
      '2019/10/22': 26,
      '2019/10/31': 12,
      '2019/07/25': 20,
      '2019/08/20': 12,
      '2019/09/13': 17,
      '2019/09/24': 23,
      '2019/10/28': 27,
      '2019/09/19': 18,
      '2019/10/13': 20,
      '2019/10/25': 19,
      '2019/09/14': 20,
      '2019/09/25': 20,
      '2019/08/19': 15,
      '2019/09/03': 17,
      '2019/08/24': 22,
      '2019/10/09': 19,
      '2019/09/11': 21,
      '2019/10/08': 17,
      '2019/10/14': 16,
      '2019/07/31': 26,
      '2019/09/08': 18,
      '2019/09/07': 27,
      '2019/09/21': 13,
      '2019/08/23': 25,
      '2019/08/31': 22,
      '2019/07/23': 10,
      '2019/09/09': 17,
      '2019/07/29': 18,
      '2019/09/20': 22,
      '2019/09/15': 23,
      '2019/08/04': 20,
      '2019/10/02': 19,
      '2019/08/06': 25,
      '2019/07/24': 18,
      '2019/09/22': 24,
      '2019/08/21': 18,
      '2019/09/23': 22,
      '2019/10/24': 22,
      '2019/10/06': 23,
      '2019/09/17': 17,
      '2019/08/18': 22,
      '2019/09/16': 26,
      '2019/08/03': 23,
      '2019/08/14': 18,
      '2019/10/20': 20,
      '2019/10/16': 21,
      '2019/10/26': 23,
      '2019/09/02': 20,
      '2019/08/13': 19,
      '2019/08/07': 16,
      '2019/10/05': 21,
      '2019/10/27': 20,
      '2019/10/12': 17,
      '2019/08/22': 18,
      '2019/08/25': 18,
      '2019/09/18': 18,
      '2019/10/04': 21,
      '2019/09/10': 21,
      '2019/07/28': 16,
      '2019/10/03': 16,
      '2019/09/12': 20,
      '2019/10/01': 18,
      '2019/10/21': 24,
      '2019/09/28': 23,
      '2019/10/15': 20,
      '2019/08/26': 21,
      '2019/10/23': 27,
      '2019/08/15': 16,
      '2019/08/10': 22
    });
  });

  it('should sort booking dates by popularity', () => {
    expect(booking.sortPopularityOfDates().length).to.equal(101);
  });

  it('should get most pop date', () => {
    expect(booking.getMostPopDates()).to.deep.equal(['2019/10/28', '2019/09/07', '2019/10/23']);
    expect(domUpdates.appendMostPopDate).to.have.been.called(1);
  });

  it('should get least pop date', () => {
    expect(booking.getLeastPopDates()).to.deep.equal(["2019/07/23"]);
    expect(domUpdates.appendLeastPopDate).to.have.been.called(1);
  });

});
