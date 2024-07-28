import { EventEmitter, Injectable } from '@angular/core';
import { Notification, NotificationInterative } from '../../index.model.system';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {
  private listNotify: NotificationInterative[] = [];
  private notify$: EventEmitter<NotificationInterative[]> = new EventEmitter();

  public addNotification(notification: Notification) {
    let { status, message } = notification;
    let ntfInterative: NotificationInterative = new NotificationInterative(status, message);
    this.listNotify.push(ntfInterative);
    this.notify$.emit(this.listNotify);
  }

  public getNotifications(): EventEmitter<NotificationInterative[]> {
    return this.notify$;
  }

  public removeNotification(index: number) {
    this.listNotify.splice(index, 1);
  }
}
