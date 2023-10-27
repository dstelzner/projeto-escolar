import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  botoes: {area: string, icone: string}[] =
  [
    {
      area: 'Perfil',
      icone: 'perm_identity'
   },
   {
      area: 'Grade',
      icone: 'access_time'
   },
   {
      area: 'Notas',
      icone: 'grade'
   } ,
   {
      area: 'Frequência',
      icone: 'check'
   } ,
   {
      area: 'Avisos',
      icone: 'notification_important'
   } ,
   {
      area: 'Documentos',
      icone: 'folder'
   } ,
   {
      area: 'Agenda',
      icone: 'event_note'
   } ,
   {
      area: 'Cardápio',
      icone: 'fastfood'
   }
]

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  public onClickButton(botao: string) {
    const rota = botao.toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    this.router.navigate([rota]);
  }

}
