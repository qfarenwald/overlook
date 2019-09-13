import $ from 'jquery';

export default {

// for when combine DOM and CLASSES

  appendRoomsAvailToday(hotel) {
    let totalRooms = hotel.totalRoomsAvailToday("2019/09/15");
    $('#rooms-avail-today').text(totalRooms);
  }

};
