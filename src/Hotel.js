import booking from './Booking.js';
import roomService from './RoomService.js';

class Hotel {
  constructor(usersData, roomsData, roomsServicesData, bookingsData) {
    this.users = usersData;
    this.rooms = roomsData;
    this.roomServices = roomsServicesData;
    this.bookings = bookingsData;
  }

  totalRevenueToday(date) {
    return booking.totalRoomRevenueToday(date) + roomService.totalRoomServiceRevenueToday(date)
  }

}

export default Hotel;
