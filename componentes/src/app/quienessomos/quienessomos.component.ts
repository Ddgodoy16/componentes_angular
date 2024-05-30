import { Component,  Input } from '@angular/core';
import { Iquienessomos } from '../Interfaces/Iquienessomos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quienessomos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quienessomos.component.html',
  styleUrl: './quienessomos.component.css'
})
export class QuienessomosComponent {
  @Input() quienessomos: Iquienessomos = {
  
    descripcion: 'Somos una empresa dedicada a ofrecer cursos y capacitaciones gratuitas para todos los desarrolladores que deseen sobresalir', 

}
}
