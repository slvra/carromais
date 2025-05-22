import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { HeaderComponent } from "./structure/header/header.component";
import { FooterComponent } from "./structure/footer/footer.component";
import { MainComponent } from "./structure/main/main.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, MainComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Projeto_Final';
  constructor(public router: Router) {}

  isDashboardRoute(): boolean {
    return this.router.url.includes('/dashboard');
  }
}
