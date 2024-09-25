import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { Subscription } from 'rxjs';
import { SidebarService } from '../../core/index.service.triggers';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  activateSidebar: boolean = true;
  sidebarSub: Subscription = new Subscription();

  constructor(
    private SiderbarSrv: SidebarService
  ) { }

  ngOnInit(): void {
    this.sidebarSub = this.SiderbarSrv.activatedSidebar$.subscribe(activate => this.activateSidebar = activate);
  }

  ngOnDestroy(): void {
    this.sidebarSub.unsubscribe();
  }
}
