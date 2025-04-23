import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-koszyk',
  imports: [],
  templateUrl: './koszyk.component.html',
  styleUrl: './koszyk.component.css'
})
export class KoszykComponent {
@Input() wartosc! :number;
@Output() Wyczysc = new EventEmitter<void>();
wyczysc(){
this.Wyczysc.emit();
this.wartosc = 0;
}

}
