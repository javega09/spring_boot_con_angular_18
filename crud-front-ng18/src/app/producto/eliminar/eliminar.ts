import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Restaurante } from '../../models/Restaurante';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Service } from '../../services/service';

@Component({
  selector: 'app-eliminar',
  imports: [RouterModule],
  templateUrl: './eliminar.html',
  styleUrl: './eliminar.css',
})
export class Eliminar implements OnInit {
  idRestaurante!: number;
  mostrarPopup=false;
  restaurante: Restaurante | null = null;
  redirectSeconds=5;
  private timer?:number;
  


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private restauranteService: Service,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.idRestaurante = +params.get('id')!;
      this.cargarRestaurante();
    });
  }
  cargarRestaurante() {
    this.restauranteService.obtenerRestaurantePorId(this.idRestaurante).subscribe({
      next:(data)=>{
        this.restaurante={ ...data};
        this.cdr.detectChanges();
      },
      error:(err)=>{
        console.error("Error al cargar restaurunte ", err);
         alert('No se pudo cargar el restaurante');
      }
    })
  }

  eliminarRestaurante():void{
    if(!this.restaurante) return;
    this.restauranteService.eliminarRestaurante(this.idRestaurante).subscribe({
      next:()=>{
        this.mostrarPopup=true;
        this.cdr.detectChanges();
        this.timer= window.setInterval(()=>{
          this.redirectSeconds--;
          if(this.redirectSeconds<=0){
            window.clearInterval(this.timer);
            this.mostrarPopup=false;
            this.router.navigate(['/inicio']);
          }
        },1000);       
      },
      error:(err)=>{
       console.log("error al elinar el restaurante.");
         alert('Hubo un problema al eliminar el restaurante');
      }
    })
  }
}
