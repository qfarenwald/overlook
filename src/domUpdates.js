import $ from 'jquery';

import './css/base.scss';

export default {

  appendRoomsAvailToday(totalRooms) {
    $('#rooms-avail-today').text(totalRooms);
  },

  appendRoomsOccToday(totalRooms) {
    $('#rooms-occ-today').text(totalRooms);
  },

  appendTotalRevenueToday(totalRevenue) {
    $('#revenue-today').text(totalRevenue);
  },

  appendDate(date) {
    $('#date').text(date);
  }

};
