import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { VeiculosComponent } from './pages/veiculos/veiculos.component';
import { PrivacidadeComponent } from './pages/privacidade/privacidade.component';
import { SobreComponent } from './pages/sobre/sobre.component';

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
    }

]