import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {

  expandido: boolean = false;
  meses: {mes: string, dias: number[]}[] = []

  constructor() {
    this.meses.push({mes: 'Janeiro', dias: this.getDias(31)})
    this.meses.push({mes: 'Fevereiro', dias: this.getDias(30)})
    this.meses.push({mes: 'Março', dias: this.getDias(31)})
    this.meses.push({mes: 'Abril', dias: this.getDias(30)})
    this.meses.push({mes: 'Maio', dias: this.getDias(31)})
    this.meses.push({mes: 'Junho', dias: this.getDias(30)})
    this.meses.push({mes: 'Julho', dias: this.getDias(31)})
    this.meses.push({mes: 'Agosto', dias: this.getDias(31)})
    this.meses.push({mes: 'Setembro', dias: this.getDias(30)})
    this.meses.push({mes: 'Outubro', dias: this.getDias(31)})
    this.meses.push({mes: 'Novembro', dias: this.getDias(30)})
    this.meses.push({mes: 'Dezembro', dias: this.getDias(31)})
  }

  ngOnInit(): void {
  }

  private getDias(nDias: number): number[] {
    const dias = []
    for (let i = 1; i <= nDias; i++) {
      dias.push(i);
    }

    return dias;
  }

}
