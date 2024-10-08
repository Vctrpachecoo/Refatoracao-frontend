// Esse arquivo define a configuração global da aplicação.

// Importa a interface ApplicationConfig, que define a configuração global da aplicação Angular
// Importa o provideZoneChangeDetection, que ajuda a otimizar a detecção de mudanças no Angular
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';

// Importa a função provideRouter, que configura o serviço de roteamento
import { provideRouter } from '@angular/router';

// Importa as rotas configuradas no arquivo app.routes.ts
import { routes } from './app.routes';

// Importa a função provideHttpClient, que fornece o cliente HTTP para a aplicação
import { provideHttpClient } from '@angular/common/http';

// Define e exporta a configuração principal da aplicação
export const appConfig: ApplicationConfig = {
  // Define os provedores de serviços que serão utilizados pela aplicação
  providers: [
    // Fornece o cliente HTTP para a aplicação
    provideHttpClient(),
    // Configura a detecção de mudanças para ser mais eficiente, reduzindo eventos desnecessários
    provideZoneChangeDetection({ eventCoalescing: true }), 
    // Fornece o serviço de roteamento utilizando as rotas definidas
    provideRouter(routes)
  ],
};
