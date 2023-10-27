import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frequencia',
  templateUrl: './frequencia.component.html',
  styleUrls: ['./frequencia.component.scss']
})
export class FrequenciaComponent implements OnInit {

  dados = [
    {
      mes: 'Frequência média',
      frequecia: '93%'
    },
    {
      mes: 'Janeiro',
      frequecia: '--'
    },
    {
      mes: 'Fevereiro',
      frequecia: '100%'
    },
    {
      mes: 'Março',
      frequecia: '80%'
    },
    {
      mes: 'Abril',
      frequecia: '70%'
    },
    {
      mes: 'Maio',
      frequecia: '90%'
    },
    {
      mes: 'Junho',
      frequecia: '100%'
    },
    {
      mes: 'Julho',
      frequecia: '100%'
    },
    {
      mes: 'Agosto',
      frequecia: '100%'
    },
    {
      mes: 'Setembro',
      frequecia: '100%'
    },
    {
      mes: 'Outubro',
      frequecia: '100%'
    },
    {
      mes: 'Novembro',
      frequecia: '--'
    },
    {
      mes: 'Dezembro',
      frequecia: '--'
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
