import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-look',
  templateUrl: './look.component.html',
  styleUrls: ['./look.component.css']
})
export class LookComponent implements OnInit {

  estado: boolean = false;
  @Output() status: EventEmitter<boolean> = new EventEmitter();
  @Output() searhc: EventEmitter<string> = new EventEmitter();
  @Output() abre: EventEmitter<boolean> = new EventEmitter();
  termino: string;
  constructor() { }

  ngOnInit(): void {
  }

  abrir() {
    this.estado = true;
    this.status.emit(this.estado);
  }
  busca(termino) {
    this.searhc.emit(termino);
  }

  ingresa() {
    this.estado = true;
    this.abre.emit(this.estado);
  }
  
}
