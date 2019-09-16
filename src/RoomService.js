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
      domUpdates.emptyRoomServiceOrders()
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

// get all and show all... how only show up once?
  getAllRoomServiceForCustomer(id) {
    let roomServices = this.roomServices.filter((service) => {
      return service.userID === parseInt(id)
    })
    roomServices.forEach((order) => {
      domUpdates.appendCustomerOrders(`Date: ${order.date}`)
      domUpdates.appendCustomerOrders(`Food Item: ${order.food}`)
      domUpdates.appendCustomerOrders(`Cost: $${order.totalCost}`)
    })
    return roomServices
  }

// not testing
  showAllRoomServiceForCustomer(id) {
    let roomServices = this.roomServices.filter((service) => {
      return service.userID === parseInt(id)
    roomServices.forEach((order) => {
      domUpdates.appendCustomerOrders(`Date: ${order.date}`)
      domUpdates.appendCustomerOrders(`Food Item: ${order.food}`)
      domUpdates.appendCustomerOrders(`Cost: $${order.totalCost}`)
    })
  })
}

  getTotalRoomServiceCostForCustomer(id) {
    let allCustomerRoomService = this.getAllRoomServiceForCustomer(id)
    let totalCost = allCustomerRoomService.reduce((num, service) => {
      num += service.totalCost
      return num
    }, 0)
    domUpdates.appendCustomerOrdersTotalCost(`$${totalCost}`)
    return parseFloat(totalCost.toFixed(2))
  }

  getRoomServiceOrdersForSearchedDate(date) {
    let roomServiceOrders = this.roomServices.filter((service) => {
      return service.date === date
    })
    roomServiceOrders.forEach((order) => {
      domUpdates.appendRoomServiceOrdersForSelectedDate(`Customer ID: ${order.userID}`)
      domUpdates.appendRoomServiceOrdersForSelectedDate(`Food Item: ${order.food}`)
      domUpdates.appendRoomServiceOrdersForSelectedDate(`Cost: $${order.totalCost}`)
    })
    return roomServiceOrders
  }

}

export default RoomService;
