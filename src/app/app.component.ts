import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NotifyComponent } from './shared/components/notify/notify.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NotifyComponent],
  template: `
    <app-notify></app-notify>
    <router-outlet />
  `,
})
export class AppComponent {

}
