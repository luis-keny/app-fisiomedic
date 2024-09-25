import { Component } from '@angular/core';
import { PerfilUsuarioComponent } from '../perfil-usuario/perfil-usuario.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [PerfilUsuarioComponent, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
