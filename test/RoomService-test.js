import chai from 'chai';
const expect = chai.expect;
import spies from 'chai-spies'
chai.use(spies);

import RoomService from '../src/RoomService.js';
import roomsServicesData from '../data/roomServices.js';
import domUpdates from '../src/domUpdates.js'

describe('RoomService', () => {
  let roomService;

  beforeEach(() => {
    roomService = new RoomService(roomsServicesData);
    chai.spy.on(domUpdates, ['appendRoomServiceOrders'], () => true);
  });

  afterEach(() => {
    chai.spy.restore(domUpdates)
  });

  it('should be a function', () => {
    expect(RoomService).to.be.a('function');
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
    expect(domUpdates.appendRoomServiceOrders).to.have.been.called(3);
  });

  it('should get total rooms serviced revenue for today', () => {
    expect(roomService.totalRoomServiceRevenueToday("2019/09/15")).to.equal(6.56);
  });


});
