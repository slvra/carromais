import { Component, OnInit } from '@angular/core'
import { ApiService } from '../../../services/api.service'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-clientes',
  imports: [CommonModule],
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {
  clientes: any[] = []

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getClientes().subscribe(clientes => {
      this.clientes = clientes
    })
  }
}