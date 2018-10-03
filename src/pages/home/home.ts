import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoriaPage } from '../historia/historia';
import { CienciaPage } from '../ciencia/ciencia';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  historia = HistoriaPage;
  ciencias = CienciaPage;

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

}
