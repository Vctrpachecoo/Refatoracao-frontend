import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CadastroUserServiceService } from '../../services/cadastro-user-service.service';
import { NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { mensageComponent } from  '../mensage/mensage.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro-user',
  standalone: true, // O componente é standalone (não faz parte de um módulo convencional)
  imports: [FormsModule, RouterModule, mensageComponent, CommonModule], // Importações necessárias
  templateUrl: './cadastro-user.component.html', // Localização do template HTML
  styleUrls: ['./cadastro-user.component.scss']  // Estilos associados ao componente
})
export class CadastroUserComponent {

  @ViewChild(mensageComponent) notification!: mensageComponent; 
  // Referência ao componente de mensagem para exibir notificações de sucesso/erro

  // Propriedades que correspondem aos campos do formulário
  tipo: string = 'paciente';  // O tipo de usuário, por padrão 'paciente'
  crp: string = '';  // O número de CRP (para psicólogos)
  especialidade: string = '';  // A especialidade (para psicólogos)
  nome_completo: string = '';  // Nome completo do usuário
  email: string = '';  // E-mail do usuário
  senha: string = '';  // Senha do usuário
  confirmaSenha: string = '';  // Confirmação da senha

  // Injetando o serviço de cadastro
  constructor(private cadastroService: CadastroUserServiceService) {}

  // Função chamada ao submeter o formulário
  onSubmit(form: NgForm) {
    if (form.valid) {  // Verifica se o formulário é válido
      // Cria o objeto com os dados para enviar ao backend
      const dados = {
        tipo: this.tipo,
        crp: this.tipo === 'psicologo' ? this.crp : null,  // CRP apenas se for psicólogo
        especialidade: this.tipo === 'psicologo' ? this.especialidade : null,  // Especialidade apenas se for psicólogo
        nome_completo: this.nome_completo,
        email: this.email,
        senha: this.senha,
        confirmaSenha: this.confirmaSenha
      };

      // Chama o serviço para cadastrar o usuário
      this.cadastroService.cadastrarUsuario(dados).subscribe(
        response => {
          console.log('Cadastro realizado com sucesso!', response);
          // Exibe uma mensagem de sucesso usando o mensageComponent
          this.notification.show('Cadastro realizado com sucesso!', 'success');
        },
        error => {
          console.error('Erro ao cadastrar', error);
          // Exibe uma mensagem de erro usando o mensageComponent
          this.notification.show('Erro ao cadastrar. Tente novamente.', 'error');
        }
      );
    }
  }

  // Função chamada ao mudar o tipo (paciente ou psicólogo)
  onTipoChange(tipo: string) {
    this.tipo = tipo;  // Atualiza a variável tipo
  }
}
