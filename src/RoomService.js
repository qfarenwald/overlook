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
      domUpdates.appendRoomServiceOrders(`Cost: $${order.totalCost}`)
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

  getAllRoomServiceForCustomer(id) {
    let roomServices = this.roomServices.filter((service) => {
      return service.userID === parseInt(id)
    })
    roomServices.forEach((order) => {
      domUpdates.appendCustomerOrders(`Date: ${order.date}`)
      domUpdates.appendCustomerOrders(`Food Item: ${order.food}`)
      domUpdates.appendCustomerOrders(`Cost: ${order.totalCost}`)
  })
    return roomServices
}


  getTotalRoomServiceCostForCustomer(id) {
    let allCustomerRoomService = this.getAllRoomServiceForCustomer(id)
    let totalCost = allCustomerRoomService.reduce((num, service) => {
      num += service.totalCost
      return num
    }, 0)
    domUpdates.appendCustomerOrdersTotalCost(`Total Cost: ${totalCost}`)
    return totalCost
  }

}

export default RoomService;
