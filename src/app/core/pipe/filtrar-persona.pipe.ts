import { Pipe, PipeTransform } from '@angular/core';
import { PersonaHc } from '../index.model.api';

@Pipe({
  name: 'filtrarPersona',
  standalone: true
})
export class FiltrarPersonaPipe implements PipeTransform {

  transform(personas: PersonaHc[], searchText: string): PersonaHc[] {

    if (!personas) {
      return [];
    }
    if (!searchText) {
      return personas;
    }

    searchText = searchText.toLowerCase();

    return personas.filter(persona => {
      return (
        (persona.nombre && persona.nombre.toLowerCase().includes(searchText)) ||
        (persona.apellido && persona.apellido.toLowerCase().includes(searchText)) ||
        (persona.correo && persona.correo.toLowerCase().includes(searchText)) ||
        (persona.ndoc_documento && persona.ndoc_documento.toString().toLowerCase().includes(searchText)) ||
        (persona.telefono && persona.telefono.toString().toLowerCase().includes(searchText)) ||
        (persona.edad && persona.edad.toString().toLowerCase().includes(searchText))
      );
    });
  }

}
