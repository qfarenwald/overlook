class RoomService {
  constructor(roomsServicesData) {
    this.roomServices = roomsServicesData;
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

  getRoomServiceOrdersToday(date) {
    return this.roomServices.filter((service) => {
      return service.date === date
    })
  }

}

export default RoomService;
