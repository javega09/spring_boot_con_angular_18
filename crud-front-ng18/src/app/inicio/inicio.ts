import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Service } from '../services/service';
import { Restaurante } from '../models/Restaurante';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class InicioComponent implements OnInit {
  restaurantes: Restaurante[] = [];

  constructor(
    private restauranteService: Service,
    private router: Router,
    private cdRef: ChangeDetectorRef   // 👈 inyectamos ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // Primera carga al entrar
    this.cargarRestaurantes();

    // Cada vez que vuelvas a /inicio → recarga los restaurantes
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        if (event.urlAfterRedirects.includes('/inicio')) {
          this.cargarRestaurantes();
        }
      });
  }

  cargarRestaurantes(): void {
    console.log('📡 Cargando restaurantes...');
    this.restauranteService.getRestaurantes().subscribe(
      data => {
        //console.log('✅ Restaurantes recibidos:', data);
        this.restaurantes = data;

        // 👇 Forzamos a Angular a refrescar la vista
        this.cdRef.detectChanges();
      },
      err => {
        console.error('❌ Error al cargar restaurantes', err);
      }
    );
  }

  
  editarRestaurante(id?: number): void {
  // Lógica para navegar al formulario de edición o abrir un modal
  if(id==undefined){
    console.log('Editar restaurante con ID:', id);
    return;
  }
}

eliminarRestaurante(id?: number): void {
  // Lógica para eliminar el restaurante
  if(id==undefined){
    console.log('Eliminar restaurante con ID:', id);
return;
  }
}
}
