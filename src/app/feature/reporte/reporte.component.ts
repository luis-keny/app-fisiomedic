import { Component } from '@angular/core';
import { GraficoPagosComponent } from './components/grafico-pagos/grafico-pagos.component';

@Component({
  selector: 'app-reporte',
  standalone: true,
  imports: [GraficoPagosComponent],
  templateUrl: './reporte.component.html',
  styleUrl: './reporte.component.css',
})
export class ReporteComponent {

}
