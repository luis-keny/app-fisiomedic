import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifyService } from '../../core/index.service.triggers';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isLoading: boolean = false;
  user: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private router: Router,
    private notifySrv: NotifyService
  ) {
    const isBrowser = typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
    if (isBrowser) {
      localStorage.clear();
    }
  }

  onSubmit() {
    this.isLoading = true;
    setTimeout(() => {
      const value = this.user.value;
      if (value.name === 'fisiomedic.admin' && value.password === 'Admin123#') {
        this.notifySrv.addNotification('success','Bienvenido ' + value.name)
        this.isLoading = false;
        this.router.navigate(['home']);
      } else {
        this.notifySrv.addNotification('error','Usuario o contraseña incorrectos')
        this.isLoading = false;
      }
    }, 3000)
  }
}
