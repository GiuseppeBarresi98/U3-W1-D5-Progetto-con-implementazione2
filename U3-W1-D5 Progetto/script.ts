interface Smartphone {
  carica: number;
  numeroChiamate: number;
}

class User implements Smartphone {
  carica: number;
  numeroChiamate: number;
  constructor(_carica: number, _numeroChiamate: number) {
    this.carica = _carica;
    this.numeroChiamate = _numeroChiamate;
  }
  public ricarica(unaRicarica: number): void {
    this.carica += unaRicarica;
  }
  public chiamata(minutiDurata: number): void {
    this.numeroChiamate++;
    let costoAlMinuto: number = 0.2;
    let costoChiamata: number = minutiDurata * costoAlMinuto;
    this.carica -= costoChiamata;
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

User1.ricarica(10);
User1.chiamata(12);

console.log(User1.getNumeroChiamate());
User1.ricarica(30);
console.log(User1.chiamata404());

let User2 = new User(10, 32);
let User3 = new User(50, 12);
