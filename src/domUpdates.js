import $ from 'jquery';

import './css/base.scss';

export default {

  // appendRoomsAvailToday(hotel) {
  //   //insert index of things hotel array we need
  //   let totalRooms = hotel.totalRoomsAvailToday('2019/09/15');
  //   $('#rooms-avail-today').text(totalRooms);
  // },

  // appendTotalRevenueToday(hotel) {
  //   //insert index of things hotel array we need
  //   let totalRevenue = hotel.totalRoomRevenueToday('2019/09/15');
  //   $('#revenue-today').text(totalRevenue);
  // },

  appendRoomsAvailToday(totalRooms) {
    $('#rooms-avail-today').text(totalRooms);
  },

  appendTotalRevenueToday(totalRevenue) {
    $('#revenue-today').text(totalRevenue);
  },

  appendDate(date) {
    $('#date').text(date);
  }

//   tabHideShow() {
//     $('.tabs-info div').hide();
//     $('.tabs-info div:first').show();
//     $('.tabs-nav li:first').addClass('tab-active');
//
//     $('.tabs-nav a').on('click', function(event){
//       event.preventDefault();
//       $('.tabs-nav li').removeClass('tab-active');
//       $(this).parent().addClass('tab-active');
//       $('.tabs-info div').hide();
//       $(this).attr('href').show();
//   }
// }

};
