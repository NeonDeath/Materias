import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HistoriaPage } from '../pages/historia/historia';
import { CienciaPage } from '../pages/ciencia/ciencia';
import { DibujoPage } from '../pages/dibujo/dibujo';
import { ComPage } from '../pages/com/com';
import { MiPage } from '../pages/mi/mi';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HistoriaPage,
    CienciaPage,
    DibujoPage,
    ComPage,
    MiPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HistoriaPage,
    CienciaPage,
    DibujoPage,
    ComPage,
    MiPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
