export default class ReservationClass {
    username;

    dateStart;

    dateEnd;

    constructor(username, dateStart, dateEnd) {
      this.username = username;
      this.dateStart = dateStart;
      this.dateEnd = dateEnd;
    }
}