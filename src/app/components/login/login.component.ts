import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/login-service.service'; // Importando o AuthService
import { Router } from '@angular/router'; // Para redirecionar após o login
import { MensageloginComponent } from '../mensagelogin/mensagelogin.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, MensageloginComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;  // FormGroup para Reactive Forms

  @ViewChild(MensageloginComponent) notification!: MensageloginComponent;

  constructor(private authService: AuthService, private router: Router) {
    // Inicializando o FormGroup com os campos e validações
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, senha } = this.loginForm.value;

      this.authService.login(email, senha).subscribe({
        next: (response) => {
          // Exibe mensagem de sucesso
          if (this.notification) {
            this.notification.showMessage('Login realizado com sucesso!', true);
          }

          // Adiciona um atraso antes do redirecionamento
          setTimeout(() => {
            this.router.navigate(['/home']);  // Redireciona para a home page após 3 segundos
          }, 3000);  // 3000 milissegundos = 3 segundos
        },
        error: (error) => {
          // Exibe mensagem de erro
          if (this.notification) {
            this.notification.showMessage('Erro ao realizar login. Verifique suas credenciais.', false);
          }
        }
      });
    }
  }
}