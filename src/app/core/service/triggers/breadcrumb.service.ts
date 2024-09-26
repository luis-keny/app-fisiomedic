import { EventEmitter, Injectable } from '@angular/core';
import { BreadcrumbItem, BreadcrumbBar } from '../../index.model.system';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  public isActiveBtn$ = new EventEmitter<boolean>();
  private breadcrumbs$: EventEmitter<BreadcrumbBar> = new EventEmitter();

  private items: BreadcrumbItem[] = []
  private breadcrumbs: BreadcrumbBar = { items: [] }

  public defineBreadcrumb(items: BreadcrumbItem[], hasButton?: boolean) {
    this.items = items;
    this.breadcrumbs.items = this.items;
    this.breadcrumbs.hasButton = hasButton || false;
    
    this.breadcrumbs$.emit(this.breadcrumbs);
  }

  public addBread(item: BreadcrumbItem) {
    this.items.push(item);
    this.breadcrumbs.items = this.items;
    this.breadcrumbs$.emit(this.breadcrumbs);
  }

  public getBreadcrumbs(): EventEmitter<BreadcrumbBar> {
    this.breadcrumbs$.emit(this.breadcrumbs);
    return this.breadcrumbs$;
  }

  public removeLastBread() {
    this.items.splice(this.items.length - 1, 1);
  }

  public removeBread(index: number) {
    this.items.splice(index, 1);
  }

  public removeAllBread() {
    this.defineBreadcrumb([], false);
  }
}
