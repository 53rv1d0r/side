import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Articulo {
  id: string;
  imagen: string;
  titulo: string;
  descripcion: string;
}

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit{
  articulos: Articulo[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Articulo[]>('assets/articulos.json').subscribe(data => {
      this.articulos = data;
    });
  }
}
