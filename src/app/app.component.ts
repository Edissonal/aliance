import { Component } from '@angular/core';
import { ServiciosService } from './services/servicios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'alianza';
  muestra: boolean = false;
  ing: boolean = false;
  clientes: any[] = [];

  constructor(private serviciosService: ServiciosService) { }
  
  validaciones(arg: boolean) {

    this.muestra = arg;
  }

  ingre(arg1: boolean) {
    this.ing = arg1;
    
  }

  llamado() {
    this.serviciosService.getllamado()
      .subscribe((res: any) => {
        this.clientes = res;
      });
  }

  datos(datos: string) {
      this.serviciosService.getllamado()
      .subscribe((res:any) => {
        this.clientes = res;

        var result:any = this.clientes.filter(function(obj:any, index){
          return obj.shard_key === datos;
          
        })
        this.clientes = [];
    
        this.clientes =result.slice();
    
        console.log(this.clientes);
  
      })
  }
  
}

