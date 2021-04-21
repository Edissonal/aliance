import { Component, OnInit, Input } from '@angular/core';
import { ServiciosService } from '../../services/servicios.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  constructor(private datos:ServiciosService) { }


  @Input() clientes: any[];
  ngOnInit(): void {

    this.datos.getllamado()
      .subscribe((res:any) => {
        this.clientes = res;
      })
  }

}
