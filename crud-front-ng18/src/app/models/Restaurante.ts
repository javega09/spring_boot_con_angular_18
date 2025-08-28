export interface Restaurante {
  id?: number;
  nombre: string;
  direccion: string;
  barrio?: string;
  web?: string;
  fichaGoogle?: string;
  latitud: number;
  longitud: number;
  precioMedio: number;
  especialidad1?: string;
  especialidad2?: string;
  especialidad3?: string;
  creadoEn?: string;         // LocalDateTime en backend
 
}

