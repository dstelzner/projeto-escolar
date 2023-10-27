import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avisos',
  templateUrl: './avisos.component.html',
  styleUrls: ['./avisos.component.scss']
})
export class AvisosComponent implements OnInit {

  expandido = false;

  constructor() { }

  ngOnInit(): void {
    document.documentElement.style.setProperty('--estilo', 'bold');
  }

  desmarcar() {
    document.documentElement.style.setProperty('--estilo', 'normal');
  }

}
