import User from './User.js';
import Booking from './Booking.js';
import RoomService from './RoomService.js';
import domUpdates from './domUpdates';

class Hotel {
  constructor(usersData, roomsData, bookingsData, roomsServicesData) {
    this.user = new User(usersData);
    this.booking = new Booking(roomsData, bookingsData);
    this.roomService = new RoomService(roomsServicesData);
  }

  totalRevenueToday(date) {
    return this.booking.totalRoomRevenueToday(date) + this.roomService.totalRoomServiceRevenueToday(date)
  }

  openHotel(date) {
    domUpdates.appendRoomsAvailToday(this.booking.totalRoomsAvailToday(date))
    domUpdates.appendTotalRevenueToday(this.totalRevenueToday(date))
  }

}

export default Hotel;
