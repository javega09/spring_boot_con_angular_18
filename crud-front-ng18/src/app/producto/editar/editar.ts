import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Service } from '../../services/service'; // tu servicio de restaurantes
import { Restaurante } from '../../models/Restaurante';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editar.html',
  styleUrls: ['./editar.css'],
})
export class EditarComponent implements OnInit, OnDestroy {
  restaurante: Restaurante | null = null; // 👈 empieza en null, no en {}

  idRestaurante!: number;
  mostrarPopup = false;
  redirectSeconds = 5;
  private timer?: number;

  constructor(
    private restauranteService: Service,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}



  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.idRestaurante = +params.get('id')!;     
      this.cargarRestaurante();
    });
  }

  datosCargados = false;

  cargarRestaurante(): void {
    this.restauranteService
      .obtenerRestaurantePorId(this.idRestaurante)
      .subscribe({
        next: (data) => {
          this.restaurante = { ...data };
          this.datosCargados = true;
          this.cdr.detectChanges(); // 👈 fuerza actualización del template
        },
        error: (err) => {
          console.error('Error al cargar restaurante:', err);
        },
      });
  }

  actualizarRestaurante(): void {
    if(!this.restaurante){
       alert('No se han cargado los datos del restaurante.');
    return;
    }
    this.restauranteService
      .actualizarRestaurante(this.idRestaurante, this.restaurante)
      .subscribe({
        next: () => {
          this.mostrarPopup = true;
          this.cdr.detectChanges();

          this.redirectSeconds = 5;

          this.timer = window.setInterval(() => {
            this.redirectSeconds--;
            if (this.redirectSeconds <= 0) {
              window.clearInterval(this.timer);
              this.mostrarPopup = false;
              this.router.navigate(['/inicio']);
            }
          }, 1000);
        },
        error: (err) => {
          console.error('Error al actualizar restaurante:', err);
          alert('Hubo un problema al actualizar el restaurante');
        },
      });
  }

  ngOnDestroy(): void {
    if (this.timer) {
      window.clearInterval(this.timer);
    }
  }
}