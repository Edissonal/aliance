import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiciosService } from '../../services/servicios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingresa',
  templateUrl: './ingresa.component.html',
  styleUrls: ['./ingresa.component.css']
})
export class IngresaComponent implements OnInit {

  @ViewChild('close', { static: false }) close: ElementRef;
  estado: boolean = false;
  @Output() status: EventEmitter<boolean> = new EventEmitter();
  dato: any;
  constructor(private fb: FormBuilder,
              private serviciosService: ServiciosService,
              private router:Router
            ) {
    this.crearFormulario();
   }

  formaForm: FormGroup;

  ngOnInit(): void {
  }

  get nameNovalido() {
    return this.formaForm.get('name').invalid && this.formaForm.get('name').touched;
   }

   get nameNophone() {
    return this.formaForm.get('phone').invalid && this.formaForm.get('phone').touched;
   }
  
   get nameNoemail() {
    return this.formaForm.get('email').invalid && this.formaForm.get('email').touched;
   }
  
   get nameNostar_date() {
    return this.formaForm.get('star_date').invalid && this.formaForm.get('star_date').touched;
   }
  
   get nameNoend_date() {
    return this.formaForm.get('end_date').invalid && this.formaForm.get('end_date').touched;
   }
  
   crearFormulario() {
    this.formaForm = this.fb.group({
      name:['',[Validators.required]],
      phone:['',[Validators.required]],
      email:['',[Validators.required]],
      star_date:['',[Validators.required]],
      end_date:['',[Validators.required]]
    })
  }
  
  onSubmit() {
    if (this.formaForm.invalid) {
      Object.values(this.formaForm.controls).forEach(control => {
        control.markAllAsTouched();
      });
      
    } else {

      this.dato = this.savedato();
      this.serviciosService.postdato(this.dato)
        .subscribe(res => {
          console.log(res);
        }, error => console.log(error));
      
      this.status.emit(this.estado);
      this.close.nativeElement.classList.add('elimina');
    }
  }


  savedato() { 
    const saveEquipo = {
      shard_key: this.formaForm.get('name').value,
      phone: this.formaForm.get('phone').value,
      email: this.formaForm.get('email').value,
      data_add: this.formaForm.get('star_date').value,
      end_date: this.formaForm.get('end_date').value,
      Bussines_Id:this.formaForm.get('name').value,
      
    }
    return saveEquipo;
    }
}
