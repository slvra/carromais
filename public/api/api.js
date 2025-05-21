import express from 'express';
import cors from 'cors'; // Importa o pacote CORS
const app = express();
const port = 3001;

// Dados dos veículos
const veiculos = [
    {
      id: 1,
      nome: 'Volkswagen T-Cross',
      modelo: 'Highline 1.4 TSI',
      ano: 2022,
      km: 18.500,
      combustivel: 'Flex',
      preco: 112900,
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
      preco: 82900,
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
      preco: 189900,
      foto: '/api/img/raptor.jpg',
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
      preco: 72500,
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
      preco: 149900,
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
      preco: 119900,
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
      preco: 139900,
      foto: '/api/img/ranger.png',
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
      preco: 159900,
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
      preco: 59900,
      foto: '/api/img/mustang.png',
      tipo: 'Hatch',
      motor: '1.0 Flex',
      cor: 'Vermelho',
      cambio: 'Manual',
      parcelamento: 1005.45
    }
];

// Habilita o CORS para todas as rotas
app.use(cors());

// Rota para obter todos os veículos
app.get('/veiculos', (req, res) => {
  res.json(veiculos);
});

// Rota para obter um veículo por ID
app.get('/veiculos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const veiculo = veiculos.find(v => v.id === id);

  if (veiculo) {
    res.json(veiculo);
  } else {
    res.status(404).json({ message: 'Veículo não encontrado' });
  }
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`API de veículos rodando em http://localhost:${port}`);
});