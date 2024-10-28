import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface MenuItem {
  label: string;
  icon?: string;
  open?: boolean;
  link?: string;
  submenu?: MenuItem[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'side2';
  isSidebarOpen = false; // Estado inicial cerrado
  menuItems: MenuItem[] = [
    {
      label: 'EMPRESAS',
      icon: 'bi bi-bag',
      open: false,
      submenu: [
        { label: 'Empresas', link: '/empresas' }
      ]
    },
    {
      label: 'ARTÍCULOS',
      icon: 'bi bi-file-earmark-text',
      open: false,
      submenu: [
        { label: 'Artículos', link: '/articulos' }
      ]
    },
    {
      label: 'COLABORADORES',
      icon: 'bi bi-person-fill',
      open: false,
      submenu: [
        { label: 'Colaboradores', link: '/colaboradores' }
      ]
    }
  ];

  constructor(private router: Router) {}

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  
  toggleSubmenu(item: MenuItem) {
    item.open = !item.open;
  }

  navigateTo(link: string | undefined) {
    if (link) {
      // Aquí podrías usar el router para navegar a la ruta especificada
      this.router.navigate([link]);
    }
  }
  //Login button
  logout() {
    // Lógica para deslogueo
    console.log('User logged out');
  }
}
