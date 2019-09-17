import chai from 'chai';
const expect = chai.expect;

import RoomService from '../src/RoomService.js';
import roomsServicesData from '../data/roomServices.js';

describe('RoomService', () => {
  let roomService;

  beforeEach(() => {
    roomService = new RoomService(roomsServicesData);
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
  });

  it('should get total all time room service cost for customer', () => {
    expect(roomService.getTotalRoomServiceCostForCustomer(1)).to.equal(9.89);
  });

  it('should get all room service orders for searched date', () => {
    expect(roomService.getRoomServiceOrdersForSearchedDate("2019/09/15")).to.deep.equal([
      {
        "date": "2019/09/15",
        "food": "Rustic Concrete Sandwich",
        "totalCost": 6.56,
        "userID": 90
      }
    ]);
  });

});
