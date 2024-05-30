import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CursosComponent} from  './cursos/cursos.component';
import {EventosComponent} from  './eventos/eventos.component';
import {QuienessomosComponent} from  './quienessomos/quienessomos.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CursosComponent, EventosComponent, QuienessomosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'componentes';
}
