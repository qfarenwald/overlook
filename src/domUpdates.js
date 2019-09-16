import $ from 'jquery';

const domUpdates = {

  appendDate(date) {
    $('#date').text(date);
  },

  appendRoomsAvailToday(totalRooms) {
    $('#rooms-avail-today').append(`<p>${totalRooms}</p>`);
  },

  appendRoomsOccToday(totalRooms) {
    $('#rooms-occ-today').append(`<p>${totalRooms}%</p>`);
  },

  appendTotalRevenueToday(totalRevenue) {
    $('#revenue-today').append(`<p>$${totalRevenue}</p>`);
  },

  appendMostPopDate(popularDates) {
    $('#most-pop').append(`<p>${popularDates}</p>`);
  },

  appendLeastPopDate(popularDates) {
    $('#least-pop').append(`<p>${popularDates}</p>`);
  },

  appendRoomServiceOrders(order) {
    $('#service-orders').append(`<p>${order}</p>`);
  },

//using?
  emptyRoomServiceOrders() {
    $('#service-orders').empty();
  },

  appendCustomerDropdown(id, name) {
    $('#name-option').append(`<option value="${id}" id="${id}-option">${id} ${name}</option>`);
  },

  appendCustomerName(name) {
    $('.customer-name-place').text(name)
  },

  appendCustomerOrders(order) {
    $('#customer-all-orders').append(`<p>${order}</p>`);
  },

  appendCustomerOrdersTotalCost(cost) {
    $('#customer-all-orders-cost').append(`<p>${cost}</p>`);
  },

  appendRoomServiceOrdersForSelectedDate(order) {
    $('#searched-orders').append(`<p>${order}</p>`);
  },

//using?
  emptyRoomServiceOrdersForSelectedDate() {
    $('#searched-orders').empty();
  },
  // 
  // appendCurrentBookingForCustomer(order) {
  //   // $('#searched-orders').append(`<p>${order}</p>`);
  // }

};

export default domUpdates;
