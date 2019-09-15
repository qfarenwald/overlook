import domUpdates from './domUpdates.js';

class RoomService {
  constructor(roomsServicesData) {
    this.roomServices = roomsServicesData;
  }

  getRoomServiceOrdersToday(date) {
    let roomServiceOrders = this.roomServices.filter((service) => {
      return service.date === date
    })
    roomServiceOrders.forEach((order) => {
      domUpdates.appendRoomServiceOrders(`Customer ID: ${order.userID}`)
      domUpdates.appendRoomServiceOrders(`Food Item: ${order.food}`)
      domUpdates.appendRoomServiceOrders(`Total Cost: $${order.totalCost}`)
    })
    return roomServiceOrders
  }

  totalRoomServiceRevenueToday(date) {
    let roomServiceOrders = this.getRoomServiceOrdersToday(date)
    return roomServiceOrders.reduce((num, room) => {
      num += room.totalCost
      return num
    }, 0)
  }

}

export default RoomService;
