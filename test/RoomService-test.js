import chai from 'chai';
const expect = chai.expect;
// const spies = require('chai-spies');
// chai.use(spies);

import RoomService from '../src/RoomService.js';
import roomsServicesData from '../data/roomServices.js';

// chai.spy.on(file, ['function1', 'function2'], () => {});

describe('RoomService', () => {
  let roomService;

  beforeEach(() => {
    roomService = new RoomService(roomsServicesData);
  });

  it('should be a function', () => {
    expect(RoomService).to.be.a('function');
  });

  it('should find all rooms serviced on a certain day', () => {
    expect(roomService.findRoomsServiced("2019/09/15")).to.deep.equal([
      {
        "date": "2019/09/15",
        "food": "Rustic Concrete Sandwich",
        "totalCost": 6.56,
        "userID": 90
      }
    ]);
  });

  it('should get total rooms serviced revenue for today', () => {
    expect(roomService.totalRoomServiceRevenueToday("2019/09/15")).to.equal(6.56);
  });

  it('should get all room service orders for today', () => {
    expect(roomService.getRoomServiceOrdersToday("2019/09/15")).to.deep.equal([
      {
        "date": "2019/09/15",
        "food": "Rustic Concrete Sandwich",
        "totalCost": 6.56,
        "userID": 90
      }
    ]);
  });

});
