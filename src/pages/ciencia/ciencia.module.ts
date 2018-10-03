import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CienciaPage } from './ciencia';

@NgModule({
  declarations: [
    CienciaPage,
  ],
  imports: [
    IonicPageModule.forChild(CienciaPage),
  ],
})
export class CienciaPageModule {}
