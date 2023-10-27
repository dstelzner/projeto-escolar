import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { NotasComponent } from './notas/notas.component';
import { FrequenciaComponent } from './frequencia/frequencia.component';
import { AvisosComponent } from './avisos/avisos.component';
import { DocumentosComponent } from './documentos/documentos.component';
import { AgendaComponent } from './agenda/agenda.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'grade', component: NotasComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'notas', component: NotasComponent },
  { path: 'cardapio', component: NotasComponent },
  { path: 'frequencia', component: FrequenciaComponent },
  { path: 'avisos', component: AvisosComponent },
  { path: 'documentos', component: DocumentosComponent },
  { path: 'agenda', component: AgendaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
