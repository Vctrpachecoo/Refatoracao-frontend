// Define todas as rotas da aplicação.
// Mapeia URLs (caminhos) para componentes específicos.

import { Routes } from '@angular/router';
import { CadastroUserComponent } from './components/cadastro-user/cadastro-user.component'; 
import { HomeComponent } from './components/home/home.component';  
import { LoginComponent } from './components/login/login.component';

// Exporta as rotas configuradas para serem usadas no roteamento da aplicação
export const routes: Routes = [
  //Rota para a página de login
  { path: 'login', component: LoginComponent},
  // Rota para a página de cadastro
  { path: 'cadastro', component: CadastroUserComponent },
  // Rota para a página inicial (home)
  { path: 'home', component: HomeComponent },
  // Rota padrão: redireciona para a home quando o caminho for vazio
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  // Rota coringa: redireciona para a home se o caminho não for encontrado (rota inválida)
  { path: '**', redirectTo: '/home' }
];

