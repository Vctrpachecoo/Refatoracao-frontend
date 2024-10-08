import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";

@Component({
  selector: 'app-root', // usado para chamar um component em outro component
  standalone: true, // Comportamento dos modulos do angular 
  // quando true, não utilizamos o app.module 
  imports: [RouterOutlet, HomeComponent], // importo tudo aquilo que o componente vai utilizar
  templateUrl: './app.component.html', // Declara a url do html do componente 
  styleUrl: './app.component.scss' // Declara os estilos do componente


  // Essas declarações poderiam ser o próprio html e css também 
  // Precisa ser declarado um template html já o css não é necessário
})
export class AppComponent {
  title = 'projeto-angular';
}
