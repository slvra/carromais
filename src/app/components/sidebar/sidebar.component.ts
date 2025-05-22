import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome, faClipboardList, faCar, faUsers, faSignOutAlt, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

type IconKeys = 'home' | 'orders' | 'products' | 'clients' | 'logout';

interface MenuItem {
  path: string;
  icon: IconKeys;
  label: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  icons: Record<IconKeys, IconDefinition> = {
    home: faHome,
    orders: faClipboardList,
    products: faCar,
    clients: faUsers,
    logout: faSignOutAlt
  };

  menuItems: MenuItem[] = [
    { path: '/dashboard', icon: 'home', label: 'Home' },
    { path: '/dashboard/pedidos', icon: 'orders', label: 'Pedidos' },
    { path: '/dashboard/produtos', icon: 'products', label: 'Produtos' },
    { path: '/dashboard/clientes', icon: 'clients', label: 'Clientes' }
  ];

  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}