import $ from 'jquery';

export default {

// for when combine DOM and CLASSES

  appendRoomsAvailToday(hotel) {
    //insert index of things hotel array we need
    let totalRooms = hotel.totalRoomsAvailToday('2019/09/15');
    $('#rooms-avail-today').text(totalRooms);
  },

  appendTotalRevenueToday(hotel) {
    //insert index of things hotel array we need
    let totalRevenue = hotel.totalRoomRevenueToday('2019/09/15');
    $('#revenue-today').text(totalRevenue);
  }

};
