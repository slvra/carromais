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
      id: 1,
      nome: 'Volkswagen T-Cross',
      modelo: 'Highline 1.4 TSI',
      ano: 2022,
      km: 18.500,
      combustivel: 'Flex',
      preco: 112.900,
      foto: '/api/img/TCross.png',
      tipo: 'SUV',
      destaque: 'Semi-novo',
      motor: '1.4 TSI Flex',
      cor: 'Prata',
      cambio: 'Automático',
      parcelamento: 1898.32
    },
    {
      id: 2,
      nome: 'Chevrolet Onix',
      modelo: 'Premier 1.0 Turbo',
      ano: 2023,
      km: 12.300,
      combustivel: 'Flex',
      preco: 82.900,
      foto: '/api/img/mustang.png',
      tipo: 'Hatch',
      destaque: 'Mais vendido',
      motor: '1.0 Turbo Flex',
      cor: 'Branco',
      cambio: 'Automático',
      parcelamento: 1391.45
    },
    {
      id: 3,
      nome: 'Ford Ranger',
      modelo: 'XLT 3.2 Diesel',
      ano: 2021,
      km: 35.600,
      combustivel: 'Diesel',
      preco: 189.900,
      foto: '/api/img/mustang.png',
      tipo: 'Picape',
      destaque: 'Promoção',
      motor: '3.2 Diesel',
      cor: 'Vermelho',
      cambio: 'Automático',
      parcelamento: 3189.75
    },
    {
      id: 4,
      nome: 'Hyundai HB20',
      modelo: 'Sensation 1.6',
      ano: 2022,
      km: 24.800,
      combustivel: 'Flex',
      preco: 72.500,
      foto: '/api/img/mustang.png',
      tipo: 'Hatch',
      motor: '1.6 Flex',
      cor: 'Cinza',
      cambio: 'Automático',
      parcelamento: 1216.88
    },
    {
      id: 5,
      nome: 'Toyota Corolla',
      modelo: 'Altis Hybrid',
      ano: 2023,
      km: 9.200,
      combustivel: 'Híbrido',
      preco: 149.900,
      foto: '/api/img/mustang.png',
      tipo: 'Sedan',
      destaque: 'Econômico',
      motor: '1.8 Hybrid',
      cor: 'Preto',
      cambio: 'CVT',
      parcelamento: 2515.75
    },
    {
      id: 6,
      nome: 'Jeep Renegade',
      modelo: 'Longitude 1.3 Turbo',
      ano: 2022,
      km: 21.400,
      combustivel: 'Flex',
      preco: 119.900,
      foto: '/api/img/mustang.png',
      tipo: 'SUV',
      motor: '1.3 Turbo Flex',
      cor: 'Azul',
      cambio: 'Automático',
      parcelamento: 2012.32
    },
    {
      id: 7,
      nome: 'Fiat Toro',
      modelo: 'Ultra 2.0 Diesel',
      ano: 2021,
      km: 42.300,
      combustivel: 'Diesel',
      preco: 139.900,
      foto: '/api/img/mustang.png',
      tipo: 'Picape',
      motor: '2.0 Diesel',
      cor: 'Branco',
      cambio: 'Automático',
      parcelamento: 2348.25
    },
    {
      id: 8,
      nome: 'Honda Civic',
      modelo: 'Touring 1.5 Turbo',
      ano: 2022,
      km: 15.700,
      combustivel: 'Flex',
      preco: 159.900,
      foto: '/api/img/mustang.png',
      tipo: 'Sedan',
      destaque: 'Top de linha',
      motor: '1.5 Turbo Flex',
      cor: 'Prata',
      cambio: 'CVT',
      parcelamento: 2683.75
    },
    {
      id: 9,
      nome: 'Renault Kwid',
      modelo: 'Zen 1.0',
      ano: 2023,
      km: 8.500,
      combustivel: 'Flex',
      preco: 59.900,
      foto: '/api/img/mustang.png',
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
