var h3Cont = document.getElementById("contatore");
var contatore = 0;
var User = /** @class */ (function () {
  function User(_carica, _numeroChiamate) {
    this.carica = _carica;
    this.numeroChiamate = _numeroChiamate;
    this.timer = null;
    this.secondiChiamata = 0;
  }
  User.prototype.ricarica = function (unaRicarica) {
    this.carica += unaRicarica;
  };
  User.prototype.avviaChiamata = function () {
    var _this = this;
    this.timer = setInterval(function () {
      _this.secondiChiamata++;
      h3Cont.classList.remove("h3dis");
      contatore++;
      h3Cont.innerText = "la chiamata sta durando ".concat(
        contatore,
        " secondi ps:ricordati che pagi 0.20 cent al secondo!!"
      );
    }, 1000);
    contatore = 0;
  };
  User.prototype.stopChiamata = function () {
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.carica -= this.secondiChiamata * 0.2;
      this.numeroChiamate++;
      this.secondiChiamata = 0;
      this.timer = null;
      h3Cont.classList.add("h3dis");
    }
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
})();
var User1 = new User(0, 0);
var buttonRicarica = document.getElementById("ricarica");
var ricaricaInput = document.getElementById("ricarica-input");
var Outputpulsanti = document.getElementById("Outputpulsanti");
buttonRicarica.addEventListener("click", function (e) {
  e.preventDefault();
  User1.ricarica(parseInt(ricaricaInput.value));
  ricaricaInput.value = "";
  console.log(User1.chiamata404());
  alert("ricarica andata a buon fine");
});
var creditoButton = document.getElementById("credito-residuo-button");
var inputCreditoResiduo = document.getElementById("credito-residuo");
var ul = document.getElementById("ul");
creditoButton.addEventListener("click", function (e) {
  e.preventDefault();
  var li = document.createElement("li");
  li.innerText = "Saldo attuale: ".concat(User1.chiamata404(), " euro");
  ul.appendChild(li);
  if (ul.childNodes.length > 1) {
    if (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }
  }
});
var buttonChiama = document.getElementById("chiama");
buttonChiama.addEventListener("click", function (e) {
  e.preventDefault();
  if (User1.timer === null) {
    User1.avviaChiamata();
    buttonChiama.classList.add("finisci-chiamata");
    buttonChiama.innerText = "Chiudi la chiamata";
  } else {
    User1.stopChiamata();
    buttonChiama.classList.remove("finisci-chiamata");
    buttonChiama.innerText = "Chiama";
  }
});
var buttChiamate = document.getElementById("numero-chiamate");
var contatoreChiamate = 0;
var ulTwo = document.getElementById("ul-two");
buttChiamate.addEventListener("click", function (e) {
  e.preventDefault();
  var numeroChiamate = User1.getNumeroChiamate();
  ulTwo.innerText = "".concat(numeroChiamate);
  console.log(User1.getNumeroChiamate());
});
var azzeraNumeroChiamate = document.getElementById("azzera-numero-chiamate");
azzeraNumeroChiamate.addEventListener("click", function (e) {
  e.preventDefault();
  User1.azzeraChiamate();
  ulTwo.innerText = "0";
});
