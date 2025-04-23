import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Produkt } from '../../models/produkt.class';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabela',
  imports: [CommonModule],
  templateUrl: './tabela.component.html',
  styleUrl: './tabela.component.css'
})
export class TabelaComponent {
  @Input() produkt!: Produkt; 
  @Output() DodanoDoKoszyka = new EventEmitter<number>();
  widoczny:boolean = true;
  OnDodajClick(){
    this.DodanoDoKoszyka.emit(this.produkt.cena);
    this.produkt.liczbaSztuk++;
  }

}
