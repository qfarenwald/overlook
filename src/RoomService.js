import domUpdates from './domUpdates.js';

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
    let roomServiceOrders = this.roomServices.filter((service) => {
      return service.date === date
    })
    roomServiceOrders.forEach((order) => {
      console.log('order', order)
      domUpdates.appendRoomServiceOrders(`Customer ID: ${order.userID}`)
      domUpdates.appendRoomServiceOrders(`Food Item: ${order.food}`)
      domUpdates.appendRoomServiceOrders(`Total Cost: $${order.totalCost}`)
    })
    return roomServiceOrders
  }

}

export default RoomService;
