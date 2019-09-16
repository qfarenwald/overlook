import $ from 'jquery';

import './css/base.scss';

import './images/bright-colors-daylight-2742812.jpg'
import Hotel from './Hotel.js';
import domUpdates from './domUpdates';

let hotel;

Promise.all([
  fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users').then(response => response.json()),
  fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms').then(response => response.json()),
  fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings').then(response => response.json()),
  fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/room-services/roomServices').then(response => response.json()),
]).then(data => hotel = new Hotel(data[0].users, data[1].rooms, data[2].bookings, data[3].roomServices))
  .then(data => openHotel(getDate()))
  .then(data => console.log(hotel))
  .catch(err => console.log(err))

const openHotel = (date) => {
  hotel.booking.totalRoomsAvailToday(date)
  hotel.booking.percentageRoomsOccToday(date)
  hotel.totalRevenueToday(date)
  hotel.booking.getMostPopDates()
  hotel.booking.getLeastPopDates()
  hotel.roomService.getRoomServiceOrdersToday(date)
  hotel.displayCustomers()

  $('#select-customer-button').on('click', function(event){
    let id = $('#name-option').val()
    let selectedUser = hotel.selectCustomer(id)
    let name = selectedUser.name
    hotel.roomService.getAllRoomServiceForCustomer(id)
    hotel.roomService.getTotalRoomServiceCostForCustomer(id)
    domUpdates.appendCustomerName(name)
  });
};

const getDate = () => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0');
  let yyyy = today.getFullYear();
  today = `${yyyy}/${mm}/${dd}`;
  return today;
};

domUpdates.appendDate(getDate())

$('.tabs-info div').hide();
$('.tabs-info div:first').show();
$('.tabs-nav li:first').addClass('tab-active');

$('.tabs-nav a').on('click', function(event){
  event.preventDefault();
  $('.tabs-nav li').removeClass('tab-active');
  $(this).parent().addClass('tab-active');
  $('.tabs-info div').hide();
  $($(this).attr('href')).show();
});

// hide customer orders and room info

$('#new-customer-button').prop('disabled', true)

$('#new-customer-input').keyup((e) => {
  if ($('#new-customer-input').val() !== '') {
    $('#new-customer-button').prop('disabled', false);
  }
});
