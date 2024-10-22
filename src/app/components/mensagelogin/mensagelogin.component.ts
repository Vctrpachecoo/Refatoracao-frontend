import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-mensagelogin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mensagelogin.component.html',
  styleUrl: './mensagelogin.component.scss'
})
export class MensageloginComponent {
  message: string | null = null;  // Mensagem a ser exibida
  isSuccess: boolean = true;      // Determina se é uma mensagem de sucesso ou erro

  // Exibe a mensagem temporariamente
  showMessage(message: string, isSuccess: boolean = true, duration: number = 3000) {
    this.message = message;
    this.isSuccess = isSuccess;

    setTimeout(() => {
      this.message = null;
    }, duration);
  }
}

