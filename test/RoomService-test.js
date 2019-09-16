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
    chai.spy.on(domUpdates, ['appendRoomServiceOrders', 'appendCustomerOrders','appendCustomerOrdersTotalCost'], () => true);
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

  it('should get all room service orders for customer', () => {
    expect(roomService.getAllRoomServiceForCustomer(1)).to.deep.equal([
      {
      "date": "2019/09/28",
      "food": "Refined Rubber Sandwich",
      "totalCost": 9.89,
      "userID": 1
      }
    ]);
    expect(domUpdates.appendCustomerOrders).to.have.been.called(3);
  });

  it('should get total all time room service cost for customer', () => {
    expect(roomService.getTotalRoomServiceCostForCustomer(1)).to.equal(9.89);
    expect(domUpdates.appendCustomerOrdersTotalCost).to.have.been.called(1);
  });

});
