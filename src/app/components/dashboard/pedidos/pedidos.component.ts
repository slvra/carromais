import { Component, OnInit } from '@angular/core'
import { ApiService } from '../../../services/api.service'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-pedidos',
  imports: [CommonModule],
  templateUrl: './pedidos.component.html'
})
export class PedidosComponent implements OnInit {
  pedidos: any[] = []

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getPedidos().subscribe(pedidos => {
      this.pedidos = pedidos
    })
  }
}