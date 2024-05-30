import { Component,  Input } from '@angular/core';
import { Ieventos } from '../Interfaces/Ieventos';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})
export class EventosComponent {
  @Input() eventos: Ieventos = {
    titulo: 'Herramientas de google', 
    descripcion: 'Aprende como desarrollar con las herramientas que google te ofrece', 
    fecha: '29/05/2024',
    
}

}