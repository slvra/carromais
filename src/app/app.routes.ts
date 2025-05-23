import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { VeiculosComponent } from './pages/veiculos/veiculos.component';
import { PrivacidadeComponent } from './pages/privacidade/privacidade.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { PedidosComponent } from './components/dashboard/pedidos/pedidos.component';
import { ProdutosComponent } from './components/dashboard/produtos/produtos.component';
import { ClientesComponent } from './components/dashboard/clientes/clientes.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    
    {
        path: 'home',
        component: HomeComponent,
    },
    
    {
        path: 'veiculos',
        component: VeiculosComponent,
    },
    
    {
        path: 'contato',
        component: ContatoComponent,
    },
    {
        path: 'privacidade',
        component: PrivacidadeComponent,
    },
    {
        path: 'sobre',
        component: SobreComponent,
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'pedidos',
                component: PedidosComponent
            },
            {
                path: 'produtos',
                component: ProdutosComponent
            },
            {
                path: 'clientes',
                component: ClientesComponent
            }
        ]
    }
]

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',     
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }