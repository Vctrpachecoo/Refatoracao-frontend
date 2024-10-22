// Esse arquivo define todas as rotas da aplicação.
// Ele mapeia URLs (caminhos) para componentes específicos.
/* O caminho vazio ('') e o caminho inválido ('**') são redirecionados para a página
inicial (/home), garantindo que o usuário seja sempre direcionado para uma rota válida.*/ 

// Importa a interface Routes do Angular, que define a estrutura das rotas
import { Routes } from '@angular/router';
// Importa o componente de cadastro de usuários, que será utilizado em uma das rotas
import { CadastroUserComponent } from './components/cadastro-user/cadastro-user.component';  // Ajuste conforme o caminho
// Importa o componente home, que será utilizado em outra rota
import { HomeComponent } from './components/home/home.component';  // Ajuste conforme o caminho
import { LoginComponent } from './components/login/login.component';

// Exporta as rotas configuradas para serem usadas no roteamento da aplicação
export const routes: Routes = [
  //Rota para a página de login de usuários
  { path: 'login', component: LoginComponent},
  // Rota para a página de cadastro de usuários
  { path: 'cadastro', component: CadastroUserComponent },
  // Rota para a página inicial (home)
  { path: 'home', component: HomeComponent },
  // Rota padrão: redireciona para a home quando o caminho for vazio
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  // Rota coringa: redireciona para a home se o caminho não for encontrado (rota inválida)
 // { path: '**', redirectTo: '/home' }
];

