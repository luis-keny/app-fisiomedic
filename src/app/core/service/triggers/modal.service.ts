import { Injectable, Type, ComponentRef, EnvironmentInjector, ViewContainerRef } from '@angular/core';
import { ModalComponent } from '../../../shared/components/modal/modal.component';
import { Modal } from '../../index.model.system';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modalRef: ComponentRef<ModalComponent> | null = null;

  constructor(
    private environmentInjector: EnvironmentInjector
  ) { }

  public openModal(viewContainerRef: ViewContainerRef, modalConfig: Modal) {
    this.modalRef = viewContainerRef.createComponent(ModalComponent, {
      environmentInjector: this.environmentInjector
    });

    const { component, title, alertMessage } = modalConfig;
    if (title) this.modalRef.instance.title = title;
    if (alertMessage !== undefined) this.modalRef.instance.alertMessage = alertMessage;

    this.modalRef.instance.closeEvent.subscribe(() => this.closeModal());

    document.body.appendChild(this.modalRef.location.nativeElement);

    this.modalRef.instance.setComponent(component);
  }

  public closeModal() {
    if (this.modalRef) {
      this.modalRef.destroy();
      this.modalRef = null;
    }
  }
}
