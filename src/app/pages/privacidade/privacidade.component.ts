import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-privacidade',
  imports: [FormsModule, RouterModule],
  templateUrl: './privacidade.component.html',
  styleUrl: './privacidade.component.css'
})
export class PrivacidadeComponent implements OnInit {

  // @Output() termosAceitos: EventEmitter<boolean> = new EventEmitter<boolean>();
  termosAceitos: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  aceitarTermos(): void {
    alert('Você aceitou os Termos de Uso e Política de Privacidade.');
    this.termosAceitos = true;
    console.log('Termos aceitos:', this.termosAceitos);
  }

  naoAceitarTermos(): void {
    alert('Você não aceitou os Termos de Uso e Política de Privacidade.');
    this.router.navigate(['/home']);
    console.log('Termos aceitos:', this.termosAceitos);
  }

}