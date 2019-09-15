import chai from 'chai';
const expect = chai.expect;
import spies from 'chai-spies'
chai.use(spies);

import Hotel from '../src/Hotel.js';
import bookingsData from '../data/bookings.js';
import roomsData from '../data/rooms.js';
import roomsServicesData from '../data/roomServices.js';
import usersData from '../data/users.js';
import domUpdates from '../src/domUpdates.js'

describe('Hotel', () => {
  let hotel;

  beforeEach(() => {
    hotel = new Hotel(usersData, roomsData, bookingsData, roomsServicesData);
    chai.spy.on(domUpdates, ['appendTotalRevenueToday', 'appendRoomServiceOrders', 'appendCustomerDropdown'], () => true);
  });

  afterEach(() => {
    chai.spy.restore(domUpdates)
  });

  it('should be a function', () => {
    expect(Hotel).to.be.a('function');
  });

  it('should get total revenue for today', () => {
    expect(hotel.totalRevenueToday("2019/09/15")).to.equal(7397.04);
      expect(domUpdates.appendTotalRevenueToday).to.have.been.called(1);
      expect(domUpdates.appendRoomServiceOrders).to.have.been.called(3);
  });

  it('should display list of customers', () => {
    expect(hotel.displayCustomers().length).to.equal(100);
    expect(domUpdates.appendCustomerDropdown).to.have.been.called(100);
  })

  it('should display select a customer', () => {
    expect(hotel.selectCustomer(1)).to.deep.equal({
      "id": 1,
      "name": "Matilde Larson"
      });
  })

});
