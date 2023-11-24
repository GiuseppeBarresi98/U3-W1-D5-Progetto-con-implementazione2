const h3Cont = document.getElementById("contatore") as HTMLTitleElement;
let contatore = 0;
interface Smartphone {
  carica: number;
  numeroChiamate: number;
}

class User implements Smartphone {
  carica: number;
  numeroChiamate: number;
  timer: any;
  secondiChiamata: number;
  constructor(_carica: number, _numeroChiamate: number) {
    this.carica = _carica;
    this.numeroChiamate = _numeroChiamate;
    this.timer = null;
    this.secondiChiamata = 0;
  }
  public ricarica(unaRicarica: number): void {
    this.carica += unaRicarica;
  }

  public avviaChiamata(): void {
    this.timer = setInterval(() => {
      this.secondiChiamata++;
      h3Cont.classList.remove("h3dis");

      contatore++;
      h3Cont.innerText = `la chiamata sta durando ${contatore} secondi ps:ricordati che pagi 0.20 cent al secondo!!`;
    }, 1000);
    contatore = 0;
  }

  public stopChiamata(): void {
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.carica -= this.secondiChiamata * 0.2;
      this.numeroChiamate++;
      this.secondiChiamata = 0;
      this.timer = null;
      h3Cont.classList.add("h3dis");
    }
  }

  public chiamata404(): number {
    return this.carica;
  }
  public azzeraChiamate(): void {
    this.numeroChiamate = 0;
  }
  public getNumeroChiamate(): number {
    return this.numeroChiamate;
  }
}

let User1 = new User(0, 0);

const buttonRicarica = document.getElementById("ricarica") as HTMLButtonElement;
const ricaricaInput = document.getElementById(
  "ricarica-input"
) as HTMLInputElement;
const Outputpulsanti = document.getElementById(
  "Outputpulsanti"
) as HTMLDivElement;
buttonRicarica.addEventListener("click", function (e) {
  e.preventDefault();

  User1.ricarica(parseInt(ricaricaInput.value));
  ricaricaInput.value = "";
  console.log(User1.chiamata404());
  alert("ricarica andata a buon fine");
});

const creditoButton = document.getElementById(
  "credito-residuo-button"
) as HTMLButtonElement;

const inputCreditoResiduo = document.getElementById(
  "credito-residuo"
) as HTMLInputElement;
const ul = document.getElementById("ul") as HTMLUListElement;
creditoButton.addEventListener("click", function (e) {
  e.preventDefault();
  const li = document.createElement("li");
  li.innerText = `Saldo attuale: ${User1.chiamata404()} euro`;
  ul.appendChild(li);
  if (ul.childNodes.length > 1) {
    if (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }
  }
});

const buttonChiama = document.getElementById("chiama") as HTMLButtonElement;
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

const buttChiamate = document.getElementById(
  "numero-chiamate"
) as HTMLButtonElement;
let contatoreChiamate = 0;
const ulTwo = document.getElementById("ul-two") as HTMLTitleElement;
buttChiamate.addEventListener("click", function (e) {
  e.preventDefault();
  const numeroChiamate = User1.getNumeroChiamate();

  ulTwo.innerText = `${numeroChiamate}`;
  console.log(User1.getNumeroChiamate());
});

const azzeraNumeroChiamate = document.getElementById(
  "azzera-numero-chiamate"
) as HTMLButtonElement;

azzeraNumeroChiamate.addEventListener("click", function (e) {
  e.preventDefault();

  User1.azzeraChiamate();
  ulTwo.innerText = "0";
});
