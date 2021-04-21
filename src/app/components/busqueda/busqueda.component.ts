import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { group } from '@angular/animations';
import { flatten } from '@angular/compiler';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  @ViewChild('close', { static: false }) close: ElementRef;
  formaForm: FormGroup;
  @Output() status: EventEmitter<boolean> = new EventEmitter();
  estado: boolean = false;

  constructor(private fb: FormBuilder) {
    this.crearFormulario();
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
  
  
  ngOnInit(): void {
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
      this.status.emit(this.estado);
      this.close.nativeElement.classList.add('elimina');
    }
  }
  
}
