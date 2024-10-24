import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Importação necessária para usar o routerLink

@Component({
  selector: 'app-home',
  standalone: true,  
  imports: [RouterModule],  
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  // Função que realiza o scroll para a sessão de sobre na mesma pág 
  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {

      // A função scrollIntoView() realiza a rolagem até a seção correspondente quando o usuário clica no link "Sobre".
      section.scrollIntoView({ behavior: 'smooth' });  // Faz a rolagem suave até a seção
    }
}
}
