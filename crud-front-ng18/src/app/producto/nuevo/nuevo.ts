import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Restaurante } from '../../models/Restaurante';
import { Service } from '../../services/service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './nuevo.html',
  styleUrls: ['./nuevo.css'],
})
export class NuevoComponent {
  restaurante: Restaurante = {
    nombre: '',
    direccion: '',
    precioMedio: 0,
    latitud: 0,
    longitud: 0,
    especialidad1: '',
    especialidad2: '',
    especialidad3: '',
    web: '',
    barrio: '',
    fichaGoogle: ''
  };

  constructor(private service: Service, private router: Router) {}

  guardarRestaurante(): void {
    this.service.insertarRestaurante(this.restaurante).subscribe({
      next: res => {
        console.log('✅ Restaurante creado:', res);
        this.router.navigate(['/inicio']);
      },
      error: err => console.error('❌ Error al crear restaurante:', err)
    });
  }
}
