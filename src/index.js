import $ from 'jquery';
import './css/base.scss';
import domUpdates from './domUpdates';
import './images/bright-colors-daylight-2742812.jpg'

let users, rooms, bookings, roomServices

fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users")
.then(data => data.json())
.then(data => users = data.users)
.catch(err => console.log('users', err));

setTimeout(() => console.log('users', users), 1000)

fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms")
.then(data => data.json())
.then(data => rooms = data.rooms)
.catch(err => console.log(err));

setTimeout(() => console.log('rooms', rooms), 1000)

fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings")
.then(data => data.json())
.then(data => bookings = data.bookings)
.catch(err => console.log(err));

setTimeout(() => console.log('bookings', bookings), 1000)

fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/room-services/roomServices")
.then(data => data.json())
.then(data => roomServices = data.roomServices)
.catch(err => console.log(err));

setTimeout(() => console.log('roomServices', roomServices), 1000)

function getDate() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();
  today = `${yyyy}/${mm}/${dd}`;
  return today;
}

getDate()

function appendDate() {
  $('#date').text(getDate());
}

$(document).ready(() => {
  appendDate()
});

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
