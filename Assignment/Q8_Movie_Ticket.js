class MovieTicket {
    constructor(movieName, seatNo, price) {
        this.movieName = movieName;
        this.seatNo = seatNo;
        this.price = price;
    }
}
MovieTicket.prototype.printTicket = function () {
    console.log(`${this.movieName} - Seat ${this.seatNo}`);
};
class OnlineTicket extends MovieTicket {
    constructor(movieName, seatNo, price, fee) {
        super(movieName, seatNo, price);
        this.convenienceFee = fee;
    }
    getTotalAmount() {
        return this.price + this.convenienceFee;
    }
}
const t = new OnlineTicket("Avengers", "A10", 300, 50);
console.log(t.getTotalAmount());
t.printTicket();