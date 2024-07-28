import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { Breadcrumb } from '../../../core/index.model.system';
import { BreadcrumbService } from '../../../core/index.service.triggers';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class BreadcrumbComponent implements OnInit, OnDestroy {
  public breadcrumbs: Breadcrumb[] = [
    { name: 'Home' }
  ];

  subscription: Subscription = new Subscription();

  constructor(
    private breadcrumbSrv: BreadcrumbService
  ) { }

  ngOnInit(): void {
    this.subscription = this.breadcrumbSrv.getBreadcrumbs().subscribe(res => this.breadcrumbs = res);
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }

  public isLastIndex(index: number): boolean {
    return index === this.breadcrumbs.length - 1;
  }
}
