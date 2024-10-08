// O arquivo main.ts no Angular serve como ponto de entrada para a aplicação. 
// Ele é responsável por iniciar o processo de bootstrap, ou seja, carregar o componente principal da aplicação
// (AppComponent) e configurar os serviços e provedores necessários para o funcionamento da aplicação.


// Importa a função bootstrapApplication, que inicia a aplicação Angular
import { bootstrapApplication } from '@angular/platform-browser';
// Importa o componente principal da aplicação, que será carregado primeiro
import { AppComponent } from './app/app.component';
// Importa a função provideRouter, que fornece a funcionalidade de roteamento da aplicação
import { provideRouter } from '@angular/router';
// Importa as rotas configuradas no arquivo app.routes
import { routes } from './app/app.routes';
// Importa a função provideHttpClient, que disponibiliza o serviço de HTTP para a aplicação
import { provideHttpClient } from '@angular/common/http';

// Inicia a aplicação Angular com o componente principal AppComponent
bootstrapApplication(AppComponent, {
  // Configura os provedores necessários para o funcionamento da aplicação
  providers: [
    // Fornece o serviço de HTTP para toda a aplicação
    provideHttpClient(),
    // Fornece as rotas definidas no arquivo app.routes
    provideRouter(routes),
  ]
})
// Caso ocorra um erro no processo de bootstrap, ele é capturado e exibido no console
.catch(err => console.error("Erro de Bootstrap, consulte o arquivo main.ts"));
// .catch(err => console.error(err));

