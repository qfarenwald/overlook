import domUpdates from './domUpdates.js';

class Booking {
  constructor(roomsData, bookingsData) {
    this.rooms = roomsData;
    this.bookings = bookingsData;
  }

  findRoomsBooked(date) {
    return this.bookings.filter((booking) => {
      return booking.date === date;
    })
  }

  totalRoomsAvailToday(date) {
    let roomsBooked = this.findRoomsBooked(date)
    domUpdates.appendRoomsAvailToday(this.rooms.length - roomsBooked.length)
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

  percentageRoomsOccToday(date) {
    let roomsBooked = this.findRoomsBooked(date)
    domUpdates.appendRoomsOccToday((roomsBooked.length / this.rooms.length) * 100)
    return (roomsBooked.length / this.rooms.length) * 100
  }

}

export default Booking;
