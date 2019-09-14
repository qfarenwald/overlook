import $ from 'jquery';

import './css/base.scss';

export default {

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
