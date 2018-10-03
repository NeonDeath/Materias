import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoriaPage } from '../historia/historia';
import { CienciaPage } from '../ciencia/ciencia';
import { DibujoPage } from '../dibujo/dibujo';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  historia = HistoriaPage;
  ciencias = CienciaPage;
  dibujo = DibujoPage;

  constructor(public navCtrl: NavController) {

  }

  clickHistoria()
  {
    this.navCtrl.push(this.historia);
  }

  clickCiencias()
  {
   this.navCtrl.push(this.ciencias);
  }

  clickDibujo()
  {
    this.navCtrl.push(this.dibujo);
  }
}
