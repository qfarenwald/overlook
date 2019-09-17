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

  getPopularityOfDates() {
    return this.bookings.reduce((obj, booking) => {
        if(!obj[booking.date]){
          obj[booking.date] = 0
        }
        obj[booking.date]++
      return obj
    }, {})
  }

  sortPopularityOfDates() {
    let popDates = this.getPopularityOfDates();
    let popDatesValues = Object.values(popDates);
    return popDatesValues.sort((a, b) => {
      return b - a
    })
  }

  getMostPopDates() {
    let popDates = this.getPopularityOfDates();
    let sortPopDates = this.sortPopularityOfDates()
    let popDatesKeys = Object.keys(popDates)
    let mostPopularDates = popDatesKeys.filter((date) => {
      return popDates[date] === sortPopDates[0]
    }).sort()
    mostPopularDates.forEach((date) => {
      domUpdates.appendMostPopDate(date)
    })
    return mostPopularDates
  }

  getLeastPopDates() {
    let popDates = this.getPopularityOfDates();
    let sortPopDates = this.sortPopularityOfDates()
    let popDatesKeys = Object.keys(popDates)
    let leastPopularDates = popDatesKeys.filter((date) => {
      return popDates[date] === sortPopDates[sortPopDates.length - 1]
    }).sort()
    domUpdates.appendLeastPopDate(leastPopularDates)
    return leastPopularDates
  }

  findBookingsForCustomerForToday(date, id) {
    let bookingsToday = this.bookings.filter((booking) => {
      return booking.date === date;
    })
    return bookingsToday.filter((booking) => {
      return booking.userID === parseInt(id);
    })
  }

  findRoomsAvailToday(date) {
    let roomsBookedToday = this.findRoomsBooked(date)
    let roomsNumbersBookedToday = roomsBookedToday.map((room) => {
      return room.roomNumber
    })
    return this.rooms.filter((room) => {
      return !roomsNumbersBookedToday.includes(room.number)
    })
  }

  getRoomsAvailByType(date, type) {
    let availRoomsToday = this.findRoomsAvailToday(date)
    return availRoomsToday.filter((room) => {
      return room.roomType === type
    })
  }

  makeNewBooking(id, date, roomNumber) {
    newBooking = {
      userID: id,
      date: date,
      roomNumber: roomNumber    
    }
  }

}

export default Booking;
