import { Component } from '@angular/core';
import { AuthService } from '../../services/Auth.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  
  constructor(private readonly authService: AuthService) { }

  login(provider: string) {
    this.authService.loginWithProvider(provider);
  }

}
