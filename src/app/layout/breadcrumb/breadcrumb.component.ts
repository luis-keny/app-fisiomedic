import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';

import { BreadcrumbItem } from '../../core/index.model.system';
import { BreadcrumbService } from '../../core/index.service.triggers';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css', '../../shared/css/header-views.css'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class BreadcrumbComponent implements OnInit, OnDestroy {
  breadcrumbs: BreadcrumbItem[] = [{ name: 'Home' }];
  hasBtn: boolean = false;
  breadcrumbSub: Subscription = new Subscription();

  constructor(
    private breadcrumbSrv: BreadcrumbService,
    private cdr: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.breadcrumbSub = this.breadcrumbSrv.getBreadcrumbs().subscribe(res => {
      this.breadcrumbs = res.items;
      this.hasBtn = res.hasButton || false;
      this.cdr.detectChanges();
    });
  }

  ngOnDestroy(): void {
    if (this.breadcrumbSub) this.breadcrumbSub.unsubscribe();
  }

  public isLastIndex(index: number): boolean {
    return index === this.breadcrumbs.length - 1;
  }

  public activeBtn() {
    this.breadcrumbSrv.isActiveBtn$.emit(true);
  }
}
