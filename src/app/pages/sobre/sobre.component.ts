import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChartLine, faUsers, faMapMarkedAlt, faAward, faCar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.css'
})
export class SobreComponent {
  
  faChartLine = faChartLine;
  faUsers = faUsers;
  faMapMarkedAlt = faMapMarkedAlt;
  faAward = faAward;
  faCar = faCar;

  companyStats = [
    { value: '15+', label: 'Anos no mercado', icon: faChartLine },
    { value: '25.000+', label: 'Clientes satisfeitos', icon: faUsers },
    { value: '50+', label: 'Cidades atendidas', icon: faMapMarkedAlt },
    { value: '12', label: 'Prêmios recebidos', icon: faAward },
    { value: '5.000+', label: 'Veículos vendidos', icon: faCar }
  ];

  timeline = [
    { year: 2008, title: 'Fundação', description: 'Abertura da primeira loja em São Paulo com apenas 10 veículos em estoque.' },
    { year: 2012, title: 'Primeira expansão', description: 'Inauguração de duas novas unidades na capital paulista.' },
    { year: 2015, title: 'Prêmio de Excelência', description: 'Reconhecida como a melhor concessionária de usados do estado.' },
    { year: 2018, title: 'Plataforma Digital', description: 'Lançamento do sistema online integrado com estoque em tempo real.' },
    { year: 2022, title: 'Nacionalização', description: 'Expansão para 5 estados brasileiros com 15 novas lojas.' },
    { year: 2024, title: 'Inovação Tecnológica', description: 'Implementação de realidade aumentada para test drives virtuais.' }
  ];
}