import Booking from './Booking.js';
import RoomService from './RoomService.js';
import domUpdates from './domUpdates.js';

class Hotel {
  constructor(usersData, roomsData, bookingsData, roomsServicesData) {
    this.users = usersData;
    this.booking = new Booking(roomsData, bookingsData);
    this.roomService = new RoomService(roomsServicesData);
  }

  totalRevenueToday(date) {
    let revenueToday = this.booking.totalRoomRevenueToday(date) + this.roomService.totalRoomServiceRevenueToday(date)
    return parseFloat(revenueToday.toFixed(2))
  }

  displayCustomers() {
    let allUsers = this.users
    allUsers.forEach((user) => {
    domUpdates.appendCustomerDropdown(user.id, user.name)
    })
    return allUsers
  }

  selectCustomer(id) {
    return this.users.find((user) => {
      return user.id === parseInt(id)
    })
  }

  makeNewCustomer(id, name) {
    let newCustomer = {
      id: id,
      name: name
    }
    return newCustomer
  }

}

export default Hotel;
