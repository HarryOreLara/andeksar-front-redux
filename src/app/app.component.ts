import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'andeskar-front-redux';



  constructor(private primengConfig:PrimeNGConfig) {}


  ngOnInit() {
    this.primengConfig.setTranslation({
      accept: 'Aceptar',
      reject: 'Cancelar',
      choose: 'Elegir',
      upload: 'Subir',
      cancel: 'Cancelar',
      // Traducciones específicas de los filtros
      startsWith: 'Empieza con',
      contains: 'Contiene',
      notContains: 'No contiene',
      endsWith: 'Termina en',
      equals: 'Igual a',
      notEquals: 'Distinto de',
      noFilter: 'Sin filtro',
      lt: 'Menor que',
      lte: 'Menor o igual que',
      gt: 'Mayor que',
      gte: 'Mayor o igual que',
      dateIs: 'Fecha es',
      dateIsNot: 'Fecha no es',
      dateBefore: 'Fecha es antes de',
      dateAfter: 'Fecha es después de',
      clear: 'Limpiar',
      apply: 'Aplicar',
      matchAll: 'Coincidir con todos',
      matchAny: 'Coincidir con cualquiera',
      addRule: 'Agregar regla',
      removeRule: 'Eliminar regla',
      emptyMessage: 'No hay resultados',
      emptyFilterMessage: 'Sin coincidencias',
    })
  }


}
