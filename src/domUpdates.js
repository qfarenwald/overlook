import $ from 'jquery';

// import './css/base.scss';

const domUpdates = {

  appendRoomsAvailToday(totalRooms) {
    $('#rooms-avail-today').text(totalRooms);
  },

  appendRoomsOccToday(totalRooms) {
    $('#rooms-occ-today').text(totalRooms);
  },

  appendTotalRevenueToday(totalRevenue) {
    $('#revenue-today').text(totalRevenue);
  }
  //
  // appendDate(date) {
  //   $('#date').text(date);
  // }

};

export default domUpdates;
