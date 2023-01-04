import { Component, OnInit } from '@angular/core';
import { Marcador } from '../../classes/marcador.class';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  public marcadores: Marcador[] = [];  

  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;
  
  constructor() { 
    const nuevoMarcador = new Marcador(51.678418, 7.809007);
    this.marcadores.push(nuevoMarcador);
  }

  ngOnInit(): void {
  }

  agregarMarcador( evento: any ) {
    const coords: { lat: number, lng: number } = evento.coords;
    const nuevoMarcador = new Marcador(coords.lat, coords.lng);
    this.marcadores.push(nuevoMarcador);
  }

}
