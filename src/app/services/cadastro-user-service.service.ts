import { Injectable } from '@angular/core';  // Importa o decorator Injectable, que permite injetar dependências no serviço
import { HttpClient } from '@angular/common/http';  // Importa o HttpClient, usado para fazer requisições HTTP
import { Observable } from 'rxjs';  // Importa o Observable, que permite trabalhar com requisições assíncronas

@Injectable({
  providedIn: 'root',  // O serviço será registrado no root injector, tornando-o acessível em toda a aplicação
})
export class CadastroUserServiceService {
  private apiUrl = 'http://localhost:8080/users/registerUsers';  // URL da API para o cadastro de usuários

  constructor(private http: HttpClient) {}  // O HttpClient é injetado no construtor para fazer as requisições HTTP

  // Função para cadastrar um novo usuário, que envia os dados via POST para o backend
  cadastrarUsuario(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, data);  // Faz uma requisição POST para a API com os dados recebidos como argumento
  }
}
