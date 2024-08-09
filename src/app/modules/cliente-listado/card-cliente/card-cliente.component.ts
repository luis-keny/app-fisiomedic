import { Component, Input } from '@angular/core';
import { Persona } from '../../../core/index.model.api';

@Component({
  selector: 'app-card-cliente',
  standalone: true,
  imports: [],
  templateUrl: './card-cliente.component.html',
  styleUrl: './card-cliente.component.css'
})
export class CardClienteComponent {
  @Input() persona: Persona = {};

  constructor() {
    this.calcularEdad()
  }

  public calcularEdad(): number {
    const { fecha_nac } = this.persona;

    if (fecha_nac == undefined || fecha_nac == null) return 0;

    let fechaNacimiento: string = fecha_nac.split('T')[0];
    let [year, month, day] = fechaNacimiento.split('-');

    let fechaActual: string = (new Date()).toLocaleDateString("es-PE");
    let [dayActual, monthActual, yearActual] = fechaActual.split('/');

    let edad: number = parseInt(yearActual) - parseInt(year);
    if (parseInt(monthActual) < parseInt(month)) {
      edad--;
    } else if (parseInt(monthActual) == parseInt(month) && parseInt(dayActual) < parseInt(day)) {
      edad--;
    }
    this.persona.edad = edad;
    return edad;
  }
}
