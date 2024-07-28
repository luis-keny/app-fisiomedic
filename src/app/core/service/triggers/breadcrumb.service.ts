import { EventEmitter, Injectable } from '@angular/core';
import { Breadcrumb, BreadcrumbComportamiento } from '../../index.model.system';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  private listBreadcrumb: Breadcrumb[] = []
  private breadcrumbs$: EventEmitter<BreadcrumbComportamiento> = new EventEmitter();
  private comportamiento: BreadcrumbComportamiento = { breadcrumbList: [] }

  public defineBreadcrumb(breadcrumbs: Breadcrumb[], btnAdd?: boolean) {
    this.listBreadcrumb = breadcrumbs;
    this.comportamiento.breadcrumbList = this.listBreadcrumb;
    this.comportamiento.btnAdd = btnAdd || false;
    this.breadcrumbs$.emit(this.comportamiento);
  }

  public addBread(breadcrumb: Breadcrumb) {
    this.listBreadcrumb.push(breadcrumb);
    this.comportamiento.breadcrumbList = this.listBreadcrumb;
    this.breadcrumbs$.emit(this.comportamiento);
  }

  public getBreadcrumbs(): EventEmitter<BreadcrumbComportamiento> {
    setTimeout(() => {
      this.breadcrumbs$.emit(this.comportamiento);
    }, 0);
    return this.breadcrumbs$;
  }

  public removeLastBread() {
    this.listBreadcrumb.splice(this.listBreadcrumb.length - 1, 1);
  }

  public removeBread(index: number) {
    this.listBreadcrumb.splice(index, 1);
  }

  public removeAllBread() {
    this.listBreadcrumb = [];
    this.comportamiento.breadcrumbList = this.listBreadcrumb;
    this.comportamiento.btnAdd = false;
    this.breadcrumbs$.emit(this.comportamiento);
  }
}
