import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabelaComponent } from './tabela/tabela.component';
import { CommonModule } from '@angular/common';
import { Produkt } from '../models/produkt.class';
import { KoszykComponent } from './koszyk/koszyk.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TabelaComponent, CommonModule, KoszykComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'taiib_zadanie';
  produkty: Produkt[] =[
    new Produkt("myszka", 13, new Date(), false),
    new Produkt("klawiatura", 23, new Date(), false),
    new Produkt("komputer", 423, new Date(), true),
    new Produkt("monitor", 213, new Date(), false),
    new Produkt("telefon", 122, new Date(), false),
  ];

    wartoscKoszyka = 0; 
    wyswietlTabele = true; 
    usmiech = false;
    onDodanoDoKoszyka(cena: number) { 
  
      this.wartoscKoszyka += cena; 
  
    } 

    wyczysc() { 

      this.wartoscKoszyka = 0; 
  
      for (let produkt of this.produkty) { 
  
         produkt.liczbaSztuk = 0;
  
      } 
}
}