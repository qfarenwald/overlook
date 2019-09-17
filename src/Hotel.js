import User from './User.js';
import Booking from './Booking.js';
import RoomService from './RoomService.js';
import domUpdates from './domUpdates.js';

class Hotel {
  constructor(usersData, roomsData, bookingsData, roomsServicesData) {
    this.user = usersData;
    this.booking = new Booking(roomsData, bookingsData);
    this.roomService = new RoomService(roomsServicesData);
  }

  totalRevenueToday(date) {
    let revenueToday = this.booking.totalRoomRevenueToday(date) + this.roomService.totalRoomServiceRevenueToday(date)
    domUpdates.appendTotalRevenueToday(revenueToday)
    return revenueToday
  }

  displayCustomers() {
    let allUsers = this.user
    allUsers.forEach((user) => {
    domUpdates.appendCustomerDropdown(user.id, user.name)
    })
    return allUsers
  }

  selectCustomer(id) {
    return this.user.find((user) => {
      return user.id === parseInt(id)
    })
  }

}

export default Hotel;
