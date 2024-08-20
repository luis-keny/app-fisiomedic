import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { Breadcrumb } from '../../../core/index.model.system';
import { BreadcrumbService } from '../../../core/index.service.triggers';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css', '../../css/header-views.css'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class BreadcrumbComponent implements OnInit, OnDestroy {
  public breadcrumbs: Breadcrumb[] = [{ name: 'Home' }];
  public isActiveBtn: boolean = false;

  subscription: Subscription = new Subscription();

  constructor(
    private breadcrumbSrv: BreadcrumbService,
  ) { }

  ngOnInit(): void {
    this.subscription = this.breadcrumbSrv.getBreadcrumbs().subscribe(res => {
      setTimeout(() => {
        this.breadcrumbs = res.breadcrumbList;
        this.isActiveBtn = res.btnAdd || false;
      });
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }

  public isLastIndex(index: number): boolean {
    return index === this.breadcrumbs.length - 1;
  }

  public activateBtn() {
    this.breadcrumbSrv.activateBtn$.emit(true);
  }
}
