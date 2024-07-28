import { EventEmitter, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  activatedSidebar$: EventEmitter<boolean> = new EventEmitter<boolean>();
}
