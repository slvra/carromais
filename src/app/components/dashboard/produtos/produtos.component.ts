import { Component, OnInit } from '@angular/core'
import { ApiService } from '../../../services/api.service'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-produtos',
  imports: [CommonModule],
  templateUrl: './produtos.component.html'
})
export class ProdutosComponent implements OnInit {
  produtos: any[] = []

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getProdutos().subscribe(produtos => {
      this.produtos = produtos
    })
  }
}