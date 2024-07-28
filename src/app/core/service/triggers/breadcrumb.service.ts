import { EventEmitter, Injectable } from '@angular/core';
import { Breadcrumb } from '../../index.model.system';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  private listBreadcrumb: Breadcrumb[] = []
  private breadcrumbs$: EventEmitter<Breadcrumb[]> = new EventEmitter();

  public defineBreadcrumb(breadcrumbs: Breadcrumb[]) {
    this.listBreadcrumb = breadcrumbs;
    this.breadcrumbs$.emit(this.listBreadcrumb);
  }

  public addBread(breadcrumb: Breadcrumb) {
    this.listBreadcrumb.push(breadcrumb);
    this.breadcrumbs$.emit(this.listBreadcrumb);
  }

  public getBreadcrumbs(): EventEmitter<Breadcrumb[]> {
    setTimeout(() => {
      this.breadcrumbs$.emit(this.listBreadcrumb);
    }, 0);
    return this.breadcrumbs$;
  }

  public removeLastBread() {
    this.listBreadcrumb.splice(this.listBreadcrumb.length - 1, 1);
  }

  public removeBread(index: number) {
    this.listBreadcrumb.splice(index, 1);
  }
}
