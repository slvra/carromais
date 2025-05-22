import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly API_URL = 'http://localhost:3000/api'

  constructor(private http: HttpClient) {}

  // Dashboard
  getDashboardData(): Observable<any> {
    return this.http.get(`${this.API_URL}/dashboard`)
  }

  // Pedidos
  getPedidos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/pedidos`)
  }

  getPedido(id: number): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/pedidos/${id}`)
  }

  // Produtos
  getProdutos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/produtos`)
  }

  getProduto(id: number): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/produtos/${id}`)
  }

  // Clientes
  getClientes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/clientes`)
  }

  getCliente(id: number): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/clientes/${id}`)
  }
}