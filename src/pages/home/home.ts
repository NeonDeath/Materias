import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoriaPage } from '../historia/historia';
import { CienciaPage } from '../ciencia/ciencia';
import { DibujoPage } from '../dibujo/dibujo';
import { ComPage } from '../com/com';
import { MiPage } from '../mi/mi';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  historia = HistoriaPage;
  ciencias = CienciaPage;
  dibujo = DibujoPage;
  com = ComPage;
  mi = MiPage;

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

  clickCom()
  {
    this.navCtrl.push(this.com);
  }

  clickMi()
  {
    this.navCtrl.push(this.mi);
  }
}
