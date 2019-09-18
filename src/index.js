import $ from 'jquery';

import './css/base.scss';

import './images/bright-colors-daylight-2742812.jpg';
import Hotel from './Hotel.js';
import domUpdates from './domUpdates.js';

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
  hotel.displayCustomers()
  domUpdates.appendRoomsAvailToday(hotel.booking.totalRoomsAvailToday(date));
  domUpdates.appendRoomsOccToday(hotel.booking.percentageRoomsOccToday(date));
  domUpdates.appendTotalRevenueToday(hotel.totalRevenueToday(date));
  domUpdates.appendMostPopDate(hotel.booking.getMostPopDates());
  domUpdates.appendLeastPopDate(hotel.booking.getLeastPopDates());
  domUpdates.appendRoomServiceOrders(hotel.roomService.getRoomServiceOrdersToday(date));

  $('.customer-info').hide();

  $('#select-customer-button').on('click', function(event) {
    $('.customer-info').show();
    let id = $('#name-option').val();
    let selectedUser = hotel.selectCustomer(id);
    let name = selectedUser.name;
    let date = getDate();
    let bookingsToday = hotel.booking.findBookingsForCustomerForToday(date, id);
    domUpdates.appendCustomerName(name);
    domUpdates.appendCustomerOrders(hotel.roomService.getAllRoomServiceForCustomer(id));
    domUpdates.appendCustomerOrdersTotalCost(hotel.roomService.getTotalRoomServiceCostForCustomer(id));
    $('#new-customer-button').prop('disabled', true);
    if (bookingsToday.length > 0) {
      $('#rooms-booking').show();
      let roomNum = hotel.booking.findBookingsForCustomerForToday(date, id)[0].roomNumber;
      domUpdates.appendCustomerBookingForToday(hotel.booking.findRoomBasedOnBookingID(roomNum));
      $('#rooms-no-booking').hide();
    } else {
      $('#rooms-booking').hide();
      $('#rooms-no-booking').show();
    }
    $('#select-room-type-section').hide();
    $('#select-room-type-section-dropdown').hide();
  });

  $('#new-customer-button').on('click', function(event) {
    let id = hotel.users.length + 1;
    let name = $('#new-customer-input').val();
    let user = hotel.makeNewCustomer(id, name);
    let date = getDate();
    let orders = [];
    let cost = 0;
    hotel.users.push(user);
    hotel.displayCustomers();
    $('.customer-info').show();
    let bookingsToday = hotel.booking.findBookingsForCustomerForToday(date, id);
    domUpdates.appendCustomerName(name);
    domUpdates.appendCustomerOrders(orders);
    domUpdates.appendCustomerOrdersTotalCost(cost);
    $('#new-customer-button').prop('disabled', true);
    if (bookingsToday.length > 0) {
      $('#rooms-booking').show();
      $('#rooms-no-booking').hide();
    } else {
      $('#rooms-booking').hide();
      $('#rooms-no-booking').show();
    }
    $('#select-room-type-section').hide();
    $('#select-room-type-section-dropdown').hide();
    $('#new-customer-input').val('');
    $('#new-customer-button').prop('disabled', true);
  });

  $('#search-orders-button').on('click', function(event) {
    let date = $('#search-orders-input').val();
    domUpdates.appendRoomServiceOrdersForSelectedDate(hotel.roomService.getRoomServiceOrdersForSearchedDate(date));
    $('#search-orders-input').val('');
    $('#search-orders-button').prop('disabled', true);
    $('#search-rooms-input').val('');
    $('#search-rooms-button').prop('disabled', true);
  });

  $('#new-booking-button').on('click', function(event) {
    $('#select-room-type-section').show();
  });

  $('#search-rooms-button-general').on('click', function(event) {
    let date = $('#search-rooms-input').val();
    domUpdates.appendAllAvailRooms(hotel.booking.findRoomsAvailToday(date));
    $('#search-rooms-input').val('');
    $('#search-rooms-button-general').prop('disabled', true);
    $('#search-rooms-input').val('');
    $('#search-rooms-button-general').prop('disabled', true);
  });

  $('#rooms-no-booking').on('click', function(event) {
    if (event.target.id === "search-rooms-button") {
      $('#select-room-type-section-dropdown').show();
      let date = getDate();
      let type = $('#room-option').val().toLowerCase();
      let availRooms = hotel.booking.getRoomsAvailByType(date, type);
      domUpdates.appendAvailRoomsByType(availRooms);
    }
    if (event.target.id === "book-button") {
      let id = $('#name-option').val();
      let date = getDate();
      let roomNumber = event.target.parentNode.firstElementChild.childNodes[1].innerText;
      let newBooking = hotel.booking.makeNewBooking(id, date, roomNumber);
      hotel.booking.bookings.push(newBooking);
      $("#book-button").css("background-color", "green");
      console.log(newBooking)
      // $('#rooms-no-booking').hide();
      // $('#rooms-booking').show();
      // domUpdates.appendCustomerBookingForToday(hotel.booking.findRoomBasedOnBookingID(roomNumber));
    }
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

domUpdates.appendDate(getDate());

$('.tabs-info div').hide();
$('.tabs-info div:first').show();
$('.tabs-nav li:first').addClass('tab-active');

$('.tabs-nav a').on('click', function(event) {
  event.preventDefault();
  $('.tabs-nav li').removeClass('tab-active');
  $(this).parent().addClass('tab-active');
  $('.tabs-info div').hide();
  $($(this).attr('href')).show();
});

$('#new-customer-button').prop('disabled', true);

$('#new-customer-input').keyup((event) => {
  if ($('#new-customer-input').val() !== '') {
    $('#new-customer-button').prop('disabled', false);
  } else {
    $('#new-customer-button').prop('disabled', true);
  }
});

$('#search-orders-button').prop('disabled', true);

$('#search-orders-input').keyup((event) => {
  if ($('#search-orders-input').val() !== '') {
    $('#search-orders-button').prop('disabled', false);
  } else {
    $('#search-orders-button').prop('disabled', true);
  }
});

$('#search-rooms-button-general').prop('disabled', true);

$('#search-rooms-input').keyup((event) => {
  if ($('#search-rooms-input').val() !== '') {
    $('#search-rooms-button-general').prop('disabled', false);
  } else {
    $('#search-rooms-button-general').prop('disabled', true);
  }
});
