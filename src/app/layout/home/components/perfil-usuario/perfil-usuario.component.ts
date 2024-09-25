import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SidebarService } from '../../../../core/service/triggers/sidebar.service';
import { RouterModule } from '@angular/router';

interface User {
  name: string;
  role: string;
}

@Component({
  selector: 'app-perfil-usuario',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './perfil-usuario.component.html',
  styleUrl: './perfil-usuario.component.css'
})
export class PerfilUsuarioComponent {
  @ViewChild('menu') menuElement!: ElementRef;
  @ViewChild('checkboxMenu') checkboxMenuElement!: ElementRef;
  isActivateSidebar: boolean = true;
  isActivateMenu: boolean = false;
  user: User = {
    name: 'Rudeus Greyaradas',
    role: 'Administrador'
  }

  constructor(
    private sidebarSrv: SidebarService
  ) { }

  @HostListener('window:resize', ['$event'])
  private onResize(event$: any) {
    if (event$.target.innerWidth < 768 && this.isActivateSidebar) {
      this.reactiveSidebar();
    }
  }

  @HostListener('window:click', ['$event'])
  handleClickOutside(event: Event) {
    let isNotElementOfMenu = !this.menuElement.nativeElement.contains(event.target) && !this.checkboxMenuElement.nativeElement.contains(event.target)
    if (isNotElementOfMenu && this.isActivateMenu) {
      this.isActivateMenu = false;
    }
  }

  public reactiveSidebar() {
    this.isActivateSidebar = !this.isActivateSidebar;
    this.sidebarSrv.activatedSidebar$.next(this.isActivateSidebar);
  }
}
