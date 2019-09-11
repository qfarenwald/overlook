// import Class from './Class.js';
// instantiate in index once fetch data
// make data sets based off of real data

class Hotel {
  constructor(customers, rooms) {
    this.customers = customers;
  }

  getDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = `${yyyy}/${mm}/${dd}`;
    return today;
  }

  totalRoomsAvailToday() {

  }

  totalRevenueToday() {

  }

  percentageRoomsOccToday() {

  }

}

export default Hotel;
