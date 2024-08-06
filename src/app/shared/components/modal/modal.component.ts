import { Component, Input, ViewChild, ViewContainerRef, AfterViewInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements AfterViewInit {
  @Input() title: string = '';
  @Input() alertMessage: string = '';
  @ViewChild('dynamicComponent', { read: ViewContainerRef }) dynamicComponent!: ViewContainerRef;
  @Output() closeEvent = new EventEmitter<void>();

  private componentToLoad: any;

  ngAfterViewInit() {
    if (this.componentToLoad) {
      this.loadComponent(this.componentToLoad);
    }
  }

  public close() {
    let closing = this.alertMessage !== '' ? confirm(this.alertMessage) : true;
    if (closing) {
      this.closeEvent.emit();
    }
  }

  private loadComponent(component: any) {
    if (this.dynamicComponent) {
      this.dynamicComponent.clear();
      this.dynamicComponent.createComponent(component);
    } else {
      console.error('dynamicComponent ViewContainerRef is not initialized.');
    }
  }

  public setComponent(component: any) {
    this.componentToLoad = component;
    if (this.dynamicComponent) {
      this.loadComponent(component);
    }
  }
}
