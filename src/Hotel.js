// import Class from './Class.js';

class Hotel {
  constructor(usersData, roomsData, roomsServicesData, bookingsData) {
    this.users = usersData;
    this.rooms = roomsData;
    this.roomServices = roomsServicesData;
    this.bookings = bookingsData;
  }

  getDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = `${yyyy}/${mm}/${dd}`;
    return today;
  }

  findRoomsBooked(date) {
    return this.bookings.filter((booking) => {
      return booking.date === date;
    })
  }

  findRoomsServiced(date) {
    return this.roomServices.filter((room) => {
      return room.date === date;
    })
  }

  totalRoomsAvailToday(date) {
    let roomsBooked = this.findRoomsBooked(date)
    return this.rooms.length - roomsBooked.length
  }

  totalRoomRevenueToday(date) {
    let roomsBooked = this.findRoomsBooked(date)
    return roomsBooked.reduce((num, roomBooked) => {
      this.rooms.forEach((room) => {
        if (room.number === roomBooked.roomNumber) {
          return num += room.costPerNight
        }
      })
      return parseFloat(num.toFixed(2))
    }, 0)
  }

  totalRoomServiceRevenueToday(date) {
    let roomsServiced = this.findRoomsServiced(date)
    return roomsServiced.reduce((num, room) => {
      num += room.totalCost
      return num
    }, 0)
  }

  totalRevenueToday(date) {
    return this.totalRoomRevenueToday(date) + this.totalRoomServiceRevenueToday(date)
  }

  percentageRoomsOccToday(date) {
    let roomsBooked = this.findRoomsBooked(date)
    return (roomsBooked.length / this.rooms.length) * 100
  }

  // getCurrentCustomer(id) {
  //   //guestrepository??
  // }

}

export default Hotel;
