import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Navegação', url: 'navegacao', icon: 'boat'},
    { title: 'Lista de Tarefas', url: 'check', icon: 'document-text'},
  ];

  constructor(private nav: NavController) {}

  irParaHome(){
    this.nav.navigateForward('home');
  } 
}
