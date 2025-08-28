import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurante } from '../models/Restaurante';
@Injectable({
  providedIn: 'root'
})
export class Service {
  private baseUrl = 'http://localhost:8081/restaurante';

  constructor(private http: HttpClient) {}

  public getRestaurantes(): Observable<Restaurante[]> {
    return this.http.get<Restaurante[]>(this.baseUrl);
  }



  public insertarRestaurante(restaurante: Restaurante): Observable<any> {
  return this.http.post(`${this.baseUrl}`, restaurante);
}


  public obtenerRestaurantePorId(id: number): Observable<Restaurante> {
    return this.http.get<Restaurante>(`${this.baseUrl}/${id}`);
  }

public actualizarRestaurante(id: number, restaurante: Restaurante): Observable<any> {
  return this.http.put(`${this.baseUrl}/${id}`, restaurante);
}

  public eliminarRestaurante(id: number): Observable<any> {
  return this.http.delete(`${this.baseUrl}/${id}`);
}

}
