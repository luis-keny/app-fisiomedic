import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { PersonaHc } from '../../../core/index.model.api';
import { PersonaService } from '../../../core/index.service.http';
import { ModalService, ValueTransferService, NotifyService } from '../../../core/index.service.triggers';

type PersonaForm = {
  [K in keyof PersonaHc]: FormControl<PersonaHc[K] | null>;
};
type attribute = 'genero' | 'tipo_documento'


@Component({
  selector: 'app-crear-cliente',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './crear-cliente.component.html',
  styleUrl: './crear-cliente.component.css'
})
export class CrearClienteComponent implements AfterViewInit, OnDestroy {
  errorSubmitted: boolean = false;
  persona: PersonaHc = {};
  personForm: FormGroup<PersonaForm>;
  getPersonaSub: Subscription = new Subscription();
  public referencias: String[] = ['Amigos cercanos', 'Familiares', 'Universidad', 'Campaña', 'Recomendaciones', 'Facebook', 'Otros']

  constructor(
    private modalSrv: ModalService,
    private valueSrv: ValueTransferService,
    private notifySrv: NotifyService,
    private personaSrv: PersonaService
  ) {
    this.personForm = this.inicializarForm(this.persona);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.getPersonaSub = this.valueSrv.persona$.subscribe((p: PersonaHc | null) => {
        if (p) {
          this.persona = p;
          this.personForm = this.inicializarForm(p);
        }
      });
    }, 0);
  }

  ngOnDestroy(): void {
    if (this.getPersonaSub) this.getPersonaSub.unsubscribe();
    this.valueSrv.emitPersona(null)
    this.persona = {};
    this.personForm = this.inicializarForm(this.persona);
  }

  private inicializarForm(persona: PersonaHc): FormGroup<PersonaForm> {
    return new FormGroup<PersonaForm>({
      nombre: new FormControl(persona.nombre, Validators.required),
      apellido: new FormControl(persona.apellido, Validators.required),
      genero: new FormControl(persona.genero, Validators.required),
      tipo_documento: new FormControl(persona.tipo_documento, Validators.required),
      ndoc_documento: new FormControl(persona.ndoc_documento, Validators.required),
      fecha_nac: new FormControl(persona.fecha_nac?.split('T')[0]),
      lugar_nac: new FormControl(persona.lugar_nac),
      estado_civil: new FormControl(persona.estado_civil),
      n_hijos: new FormControl(persona.n_hijos),
      correo: new FormControl(persona.correo),
      telefono: new FormControl(persona.telefono),
      domicilio: new FormControl(persona.domicilio),
      // falta diseño
      residencia: new FormControl(persona.residencia),
      referencia: new FormControl(persona.referencia),
    });
  }

  public onSubmit() {
    if (this.personForm.invalid) {
      this.errorSubmitted = true;
      this.notifySrv.addNotification({ status: 'error', message: 'Faltan campos por rellenar' });
      return;
    }

    const idAux = this.persona.idpersona ?? null;
    this.persona = this.personForm.getRawValue() as PersonaHc;

    if (idAux === null) {
      this.guardar();
    } else {
      this.persona.idpersona = idAux;
      this.update();
    }
  }

  private guardar() {
    this.personaSrv.save(this.persona).subscribe({
      next: () => {
        this.notifySrv.addNotification({ status: 'success', message: 'Guardado con exito' });
        this.cerrarModal();
      },
      error: (err) => {
        this.notifySrv.addNotification({ status: 'error', message: err.message });
      }
    })
  }

  public update() {
    this.personaSrv.edit(this.persona).subscribe({
      next: () => {
        this.notifySrv.addNotification({ status: 'success', message: 'Actualizado con exito' });
        this.cerrarModal();
      },
      error: (err) => {
        this.notifySrv.addNotification({ status: 'error', message: err.message });
      }
    })
  }

  public changeDocumentType($event: any, attr: attribute) {
    const value = $event.target.value;
    if (value === null || value === 'null') {
      this.personForm.get(attr)?.setValue(null);
    } else {
      const result = value === 'true' ? true : false;
      this.personForm.get(attr)?.setValue(result);
    }
  }

  public cancel() {
    let confirmation = confirm('¿Estas seguro que quieres cancelar?');
    if (confirmation) this.cerrarModal();
  }

  private cerrarModal() {
    this.modalSrv.closeModal();
  }
}
