import { EventEmitter, Injectable } from '@angular/core';
import { Notification, Status } from '../../index.model.system';


@Injectable({
  providedIn: 'root'
})
export class NotifyService {
  private listNotify: Notification[] = [];
  private notify$: EventEmitter<Notification[]> = new EventEmitter();

  public addNotification(status: Status , message: string) {
    let ntfInterative: Notification = new Notification(status, message);
    this.listNotify.push(ntfInterative);
    this.notify$.emit(this.listNotify);
  }

  public getNotifications(): EventEmitter<Notification[]> {
    return this.notify$;
  }

  public removeNotification(index: number) {
    this.listNotify.splice(index, 1);
  }
}
