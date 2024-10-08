import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mensage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mensage.component.html',
  styleUrl: './mensage.component.scss'
})

export class mensageComponent implements OnInit {
  message: string = '';
  type: 'success' | 'error' = 'success';
  isVisible: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  show(message: string, type: 'success' | 'error') {
    this.message = message;
    this.type = type;
    this.isVisible = true;

    setTimeout(() => {
      this.isVisible = false;
    }, 3000); // Oculta a mensagem após 3 segundos
  }
}