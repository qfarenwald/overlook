// import Class from './Class.js';

class RoomService {
  constructor(usersData, roomsData, roomsServicesData, bookingsData) {
    this.users = usersData;
    this.rooms = roomsData;
    this.roomServices = roomsServicesData;
    this.bookings = bookingsData;
  }

  findRoomsServiced(date) {
    return this.roomServices.filter((room) => {
      return room.date === date;
    })
  }

  totalRoomServiceRevenueToday(date) {
    let roomsServiced = this.findRoomsServiced(date)
    return roomsServiced.reduce((num, room) => {
      num += room.totalCost
      return num
    }, 0)
  }
}

export default RoomService;
