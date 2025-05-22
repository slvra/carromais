import { Component,  OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ApiService } from '../../services/api.service';
import { ChartConfiguration, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dashboard',
  imports: [RouterModule, SidebarComponent, CommonModule, BaseChartDirective],
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent implements OnInit {
  resumo: { [key: string]: number } = {};
  graficos: any;
  
  vendasChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: [{ 
      data: [], 
      label: 'Vendas',
      backgroundColor: '#1e88e5',
      borderColor: '#0d6efd',
      borderWidth: 1
    }]
  };

  vendasChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  vendasChartType: ChartType = 'bar';

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getDashboardData().subscribe(data => {
      this.resumo = data.resumo as { [key: string]: number };
      this.graficos = data.graficos;
      
      this.vendasChartData.labels = data.graficos.vendasMensais.map((v: any) => v.mes);
      this.vendasChartData.datasets[0].data = data.graficos.vendasMensais.map((v: any) => v.vendas);
    });
  }
}