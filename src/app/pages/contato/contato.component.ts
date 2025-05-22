import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

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
    mensagem: ''
  };

  termosAceitos = false;

  constructor(private router: Router) {
    const savedData = localStorage.getItem('contatoFormData');
    if (savedData) {
      this.formData = JSON.parse(savedData);
    }
    
    this.termosAceitos = localStorage.getItem('termosAceitos') === 'true';
  }

  ngOnInit(): void {}

  enviarFormulario(): void {
    console.log('Dados enviados:', this.formData);
    
    localStorage.removeItem('contatoFormData');
    localStorage.removeItem('termosAceitos');
    window.location.reload();
  }

  salvarDadosTemporarios() {
    localStorage.setItem('contatoFormData', JSON.stringify(this.formData));
  }
}