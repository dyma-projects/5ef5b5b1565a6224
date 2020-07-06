import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
  @Input('cpt') public compteur: number;
  @Output('update') public compteurUpd = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  incremente() {
    this.compteur ++;
    this.compteurUpd.emit(this.compteur);
  }

  decremente() {
    this.compteur --;
    this.compteurUpd.emit(this.compteur);
  }
}
