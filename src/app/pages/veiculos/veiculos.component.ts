import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGasPump, faTachometerAlt, faCalendarAlt, faCar, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-veiculos',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, RouterModule],
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css']
})
export class VeiculosComponent {
  faGasPump = faGasPump;
  faTachometerAlt = faTachometerAlt;
  faCalendarAlt = faCalendarAlt;
  faCar = faCar;
  faMoneyBillWave = faMoneyBillWave;

  // Filtros
  filters = ['Todos', 'SUV', 'Sedan', 'Hatch', 'Picape'];
  activeFilter = 'Todos';

  veiculos = [
    {
      id: 3,
      nome: 'Ford Mustang',
      modelo: 'GT 5.0 V8',
      ano: 2022,
      km: 18.500,
      combustivel: 'Flex',
      preco: 412900,
      foto: '/api/img/Mustang-red.png',
      tipo: 'SUV',
      destaque: 'Semi-novo',
      motor: '1.4 TSI Flex',
      cor: 'Prata',
      cambio: 'Automático',
      parcelamento: 1898.32
    },
    {
      id: 2,
      nome: 'Ford Bronco',
      modelo: 'Sport 2.3 Turbo',
      ano: 2023,
      km: 12.300,
      combustivel: 'Flex',
      preco: 382900,
      foto: '/api/img/broncoSport.png',
      tipo: 'Hatch',
      destaque: 'Mais vendido',
      motor: '1.0 Turbo Flex',
      cor: 'Branco',
      cambio: 'Automático',
      parcelamento: 1391.45
    },
    {
      id: 4,
      nome: 'Ford Ranger',
      modelo: 'XLT 3.2 Diesel',
      ano: 2021,
      km: 35.600,
      combustivel: 'Diesel',
      preco: 189900,
      foto: '/api/img/F-150-raptor.png',
      tipo: 'Picape',
      destaque: 'Promoção',
      motor: '3.2 Diesel',
      cor: 'Vermelho',
      cambio: 'Automático',
      parcelamento: 3189.75
    },
    {
      id: 1,
      nome: 'Ranger Raptor',
      modelo: '3.0 V6 Turbo',
      ano: 2022,
      km: 24.800,
      combustivel: 'Flex',
      preco: 72500,
      foto: '/api/img/raptor.jpg',
      tipo: 'Hatch',
      motor: '1.6 Flex',
      cor: 'Cinza',
      cambio: 'Automático',
      parcelamento: 1216.88
    },
    {
      id: 5,
      nome: 'Ford Territory',
      modelo: '1.5 Turbo',
      ano: 2023,
      km: 9.200,
      combustivel: 'Híbrido',
      preco: 149900,
      foto: '/api/img/territory.png',
      tipo: 'Sedan',
      destaque: 'Econômico',
      motor: '1.8 Hybrid',
      cor: 'Preto',
      cambio: 'CVT',
      parcelamento: 2515.75
    },
    {
      id: 6,
      nome: 'Ford Fusion',
      modelo: 'Titanium 2.0 Turbo',
      ano: 2022,
      km: 21.400,
      combustivel: 'Flex',
      preco: 119900,
      foto: '/api/img/fusion.jpg',
      tipo: 'SUV',
      motor: '1.3 Turbo Flex',
      cor: 'Azul',
      cambio: 'Automático',
      parcelamento: 2012.32
    },
    {
      id: 7,
      nome: 'F-150 Raptor',
      modelo: 'SuperCrew 3.5 V6',
      ano: 2021,
      km: 42.300,
      combustivel: 'Diesel',
      preco: 139900,
      foto: '/api/img/F-150-RAPTOR.webp',
      tipo: 'Picape',
      motor: '2.0 Diesel',
      cor: 'Branco',
      cambio: 'Automático',
      parcelamento: 2348.25
    },
    {
      id: 8,
      nome: 'Ford Territory',
      modelo: 'Titanium 2.0 Turbo',
      ano: 2022,
      km: 15.700,
      combustivel: 'Flex',
      preco: 159900,
      foto: '/api/img/territory1.jpg',
      tipo: 'Sedan',
      destaque: 'Top de linha',
      motor: '1.5 Turbo Flex',
      cor: 'Prata',
      cambio: 'CVT',
      parcelamento: 2683.75
    },
    {
      id: 9,
      nome: 'Ford Mustang',
      modelo: 'GT 5.0 V8',
      ano: 2023,
      km: 8.500,
      combustivel: 'Flex',
      preco: 59900,
      foto: '/api/img/Ford-Mustang.png',
      tipo: 'Hatch',
      motor: '1.0 Flex',
      cor: 'Vermelho',
      cambio: 'Manual',
      parcelamento: 1005.45
    }
  ];

  get filteredVeiculos() {
    if (this.activeFilter === 'Todos') {
      return this.veiculos;
    }
    return this.veiculos.filter(v => v.tipo === this.activeFilter);
  }

  setFilter(filter: string) {
    this.activeFilter = filter;
  }
}
