import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Importação necessária para usar o routerLink

@Component({
  selector: 'app-home',
  standalone: true,  // Indica que este é um componente standalone
  imports: [RouterModule],  // Adiciona o RouterModule para habilitar o routerLink
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // Lógica do componente


  // Função que rola para a sessão de sobre 
  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {

      // A função scrollIntoView() realiza a rolagem até a seção correspondente quando o usuário clica no link "Sobre".
      section.scrollIntoView({ behavior: 'smooth' });  // Faz a rolagem suave até a seção
    }
}
}
