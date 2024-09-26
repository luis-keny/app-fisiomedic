import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Notification } from '../../../core/index.model.system';
import { NotifyService } from '../../../core/index.service.triggers';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class NotifyComponent implements OnInit, OnDestroy {
  listNotification: Notification[] = [];
  subscription: Subscription = new Subscription();

  constructor(
    private notifySrv: NotifyService
  ) { }

  ngOnInit(): void {
    this.subscription = this.notifySrv.getNotifications().subscribe(list => {
      this.listNotification = list;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public removeNotification(index: number) {
    this.notifySrv.removeNotification(index);
  }
}
