class RoomService {
  constructor(roomsServicesData) {
    this.roomServices = roomsServicesData;
  }

  getRoomServiceOrdersToday(date) {
    let roomServiceOrders = this.roomServices.filter((service) => {
      return service.date === date;
    })
    return roomServiceOrders;
  }

  totalRoomServiceRevenueToday(date) {
    let roomServiceOrders = this.getRoomServiceOrdersToday(date)
    return roomServiceOrders.reduce((num, room) => {
      num += room.totalCost;
      return num;
    }, 0)
  }

  getAllRoomServiceForCustomer(id) {
    let roomServices = this.roomServices.filter((service) => {
      return service.userID === parseInt(id);
    })
    return roomServices;
  }

  getTotalRoomServiceCostForCustomer(id) {
    let allCustomerRoomService = this.getAllRoomServiceForCustomer(id)
    let totalCost = allCustomerRoomService.reduce((num, service) => {
      num += service.totalCost;
      return num;
    }, 0)
    return parseFloat(totalCost.toFixed(2))
  }

  getRoomServiceOrdersForSearchedDate(date) {
    let roomServiceOrders = this.roomServices.filter((service) => {
      return service.date === date;
    })
    return roomServiceOrders;
  }

}

export default RoomService;
