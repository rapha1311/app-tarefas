import { Component, OnInit } from '@angular/core';
import { tarefas } from './check.model';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  tarefas: tarefas [] = [
    {descricao: 'Escovar os Dentes'},
    {descricao: 'Skin Care'},
    {descricao: 'Comprar Pão'},
    {descricao: 'Tomar café da manhã'},
    {descricao: 'Reunião Escola'},
    {descricao: 'Buscar Juninho na escola'},
    {descricao: 'Consulta Psicologa'},
    {descricao: 'Levar Juninho pra Capoeira'},
    {descricao: 'Fazer jantar'},
    {descricao: 'Dever Juninho'},
    {descricao: 'Ler Livro'},
  ];

  constructor() { }

  ngOnInit() {
    console.log(this.tarefas)
  }
  
}
