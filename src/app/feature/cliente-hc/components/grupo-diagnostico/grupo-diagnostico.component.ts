import { Component, Input } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { Diagnostico } from '../../../../core/index.model.api';

@Component({
  selector: 'app-grupo-diagnostico',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './grupo-diagnostico.component.html',
  styleUrl: './grupo-diagnostico.component.css'
})
export class GrupoDiagnosticoComponent {
  @Input() diagnostico: Diagnostico = {};
}
