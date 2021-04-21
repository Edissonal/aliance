import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(private http:HttpClient) { }
  url:string = 'http://localhost:3000/datos';
  
  getllamado() {
    console.log('servivio corriendo');
    return this.http.get(this.url);
  }

  postdato(dato: any) {
    console.log(dato);
    return this.http.post(this.url, dato);
    }

}
