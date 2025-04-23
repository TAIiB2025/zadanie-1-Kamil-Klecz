export class Produkt { 

    public nazwa: string;
    public cena: number; 
    public dataUtworzenia: Date; 
    public czyPromocja: boolean;
    public liczbaSztuk: number = 0;


    constructor(nazwa: string, cena:number, dataUtworzenia:Date, czyPromocja:boolean) {
        this.nazwa = nazwa;
        this.cena = cena;
        this.dataUtworzenia = dataUtworzenia;
        this.czyPromocja = czyPromocja;
        

    } 
  
  } 