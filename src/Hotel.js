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

  }

  totalRevenueToday(date) {
    let roomsBooked = this.findRoomsBooked(date)

  }

  percentageRoomsOccToday(date) {

  }

  // getCurrentCustomer(id) {
  //   //guestrepository??
  // }

}

export default Hotel;
