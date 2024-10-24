import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root', 
})
export class CadastroUserService {
  private apiUrl = 'http://localhost:8080/users/registerUsers';  // URL da api

  constructor(private http: HttpClient) {}  // O HttpClient é injetado no construtor para fazer as requisições HTTP

  // Função para cadastrar um novo usuário, que envia os dados via POST para o backend
  cadastrarUsuario(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, data);  // Faz uma requisição POST para a API com os dados recebidos como argumento
  }
}
