import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.scss']
})
export class NotasComponent implements OnInit {

  rota: string = '';
  backgroundImage: string = '';
  titulo: string = '';

  constructor(private route: ActivatedRoute) {
   }

  ngOnInit(): void {
    this.rota = this.route.snapshot.url.join('/');

    switch(this.rota) {
      case 'grade':
        this.backgroundImage = 'url(/assets/grade.png)'
        this.titulo = 'Grade horária'
        break;
      case 'notas':
        this.backgroundImage = 'url(/assets/boletim.png)'
        this.titulo = 'Boletim escolar'
        break;
      case 'cardapio':
        this.titulo = 'Cardápio semanal'
        this.backgroundImage = 'url(/assets/cardapio.png)'
        break;
      default:
        this.backgroundImage = '';
        break;
    }

    console.log(this.backgroundImage)
  }

}
