import $ from 'jquery';

const domUpdates = {

  appendDate(date) {
    $('#date').text(date);
  },

  appendRoomsAvailToday(totalRooms) {
    $('#rooms-avail-today').text(totalRooms);
  },

  appendRoomsOccToday(totalRooms) {
    $('#rooms-occ-today').text(totalRooms);
  },

  appendTotalRevenueToday(totalRevenue) {
    $('#revenue-today').text(totalRevenue);
  },

  appendMostPopDate(popularDates) {
    $('#most-pop').text(popularDates);
  },

  appendLeastPopDate(popularDates) {
    $('#least-pop').text(popularDates);
  },

  appendRoomServiceOrders(date) {
    $('#service-orders').text(date);
  }

};

export default domUpdates;
