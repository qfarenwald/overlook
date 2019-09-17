import $ from 'jquery';

const domUpdates = {

  appendDate(date) {
    $('#date').text(date);
  },

  appendRoomsAvailToday(totalRooms) {
    $('#rooms-avail-today').append(`<p>${totalRooms}</p>`);
  },

  appendRoomsOccToday(totalRooms) {
    $('#rooms-occ-today').append(`<p>${totalRooms}%</p>`);
  },

  appendTotalRevenueToday(totalRevenue) {
    $('#revenue-today').append(`<p>$${totalRevenue}</p>`);
  },

  appendMostPopDate(popularDates) {
    popularDates.forEach((date) => {
      $('#most-pop').append(`<p>${date}</p>`);
    })
  },

  appendLeastPopDate(popularDates) {
    $('#least-pop').append(`<p>${popularDates}</p>`);
  },

  appendRoomServiceOrders(order) {
    $('#service-orders').append(`<p>${order}</p>`);
  },

//using?
  emptyRoomServiceOrders() {
    $('#service-orders').empty();
  },

  appendCustomerDropdown(id, name) {
    $('#name-option').append(`<option value="${id}" id="${id}-option">${id} ${name}</option>`);
  },

  appendCustomerName(name) {
    $('.customer-name-place').text(name)
  },

  appendCustomerOrders(order) {
    $('#customer-all-orders').append(`<p>${order}</p>`);
  },

  appendCustomerOrdersTotalCost(cost) {
    $('#customer-all-orders-cost').append(`<p>${cost}</p>`);
  },

  appendRoomServiceOrdersForSelectedDate(order) {
    $('#searched-orders').append(`<p>${order}</p>`);
  },

//using?
  emptyRoomServiceOrdersForSelectedDate() {
    $('#searched-orders').empty();
  },

  appendAvailRoomsByType(rooms){
      rooms.forEach((room) => {
      $('#room-filter').append(`
        <div>
        <p>Room Number: <span>${room.number}</span></p>
        <p>Number Of Beds: ${room.numBeds}</p>
        <p>Size of Beds: ${room.bedSize}</p>
        <p>Bidet: ${room.bidet}</p>
        <p>Cost Per Night: ${room.costPerNight}</p>
        <button id="book-button" type="button">BOOK</button>
        <br>
        </div>
      `);
    })
  }

};

export default domUpdates;
