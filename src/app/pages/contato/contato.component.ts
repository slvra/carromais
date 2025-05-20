import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contato',
  imports: [FormsModule,RouterModule],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent implements OnInit {
  formData = {
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
    lgpd: false,
    ofertas: false
  };

  constructor() { }

  ngOnInit(): void {
  }

  enviarFormulario(): void {
    if (this.contatoForm.valid) {
   
      console.log('Dados do formulário:', this.formData);
      alert('Formulário enviado com sucesso!');
      this.contatoForm.resetForm();
    } else {
      alert('Por favor, preencha todos os campos obrigatórios corretamente.');
    }
  }

  contatoForm!: NgForm;
}
