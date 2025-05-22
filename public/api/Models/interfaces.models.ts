export interface Pedido {
  id: number
  cliente: string
  veiculo: string
  valor: number
  data: string
  status: string
  pagamento: string
}

export interface Produto {
  id: number
  nome: string
  modelo: string
  ano: number
  preco: number
  estoque: number
  destaque: boolean
}

export interface Cliente {
  id: number
  nome: string
  email: string
  telefone: string
  veiculosComprados: number
  ultimaCompra: string
}