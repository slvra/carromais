import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-privacidade',
  imports: [FormsModule],
  templateUrl: './privacidade.component.html',
  styleUrl: './privacidade.component.css'
})
export class PrivacidadeComponent {
  termosAceitos = false;

  constructor(private router: Router) {}

  aceitarTermos(): void {
    localStorage.setItem('termosAceitos', 'true');
    this.router.navigate(['/contato']);
  }

  naoAceitarTermos(): void {
    localStorage.removeItem('contatoFormData');
    this.router.navigate(['/home']);
  }
}