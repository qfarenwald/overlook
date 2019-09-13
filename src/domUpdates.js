import $ from 'jquery';
import hotel from './Hotel.js';

export default {

// for when combine DOM and CLASSES

  appendRoomsAvailToday(date) {
    $('#rooms-avail-today').text(date)
  }

};
