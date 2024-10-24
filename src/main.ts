// Bootstrap da aplicação 
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
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

