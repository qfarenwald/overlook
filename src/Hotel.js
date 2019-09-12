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

//WRONG DATA
  totalRoomRevenueToday(date) {
    let roomsBooked = this.findRoomsBooked(date)
    // console.log(roomsBooked)
    return roomsBooked.reduce((num, room) => {
      num += room.costPerNight
      // console.log(num)
      return num
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

  }

  // getCurrentCustomer(id) {
  //   //guestrepository??
  // }

}

export default Hotel;
