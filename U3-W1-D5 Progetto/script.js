var User = /** @class */ (function () {
    function User(_carica, _numeroChiamate) {
        this.carica = _carica;
        this.numeroChiamate = _numeroChiamate;
    }
    User.prototype.ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
    };
    User.prototype.chiamata = function (minutiDurata) {
        this.numeroChiamate++;
        var costoAlMinuto = 0.2;
        var costoChiamata = minutiDurata * costoAlMinuto;
        this.carica -= costoChiamata;
    };
    User.prototype.chiamata404 = function () {
        return this.carica;
    };
    User.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    User.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    return User;
}());
var User1 = new User(0, 0);
User1.ricarica(10);
User1.chiamata(12);
console.log(User1.getNumeroChiamate());
User1.ricarica(30);
console.log(User1.chiamata404());
