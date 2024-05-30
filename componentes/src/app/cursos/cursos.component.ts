import { Component,  Input } from '@angular/core';
import { Icursos } from '../Interfaces/Icursos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent {

  @Input() cursos: Icursos = {
    titulo: 'Curso de Angular', 
    descripcion: 'Aprende Angular desde cero', 
    duracion: '40 horas',
    
}
}
