import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AlumnoComponent } from './components/alumno/alumno.component';
import { TablaAlumnosComponent } from './components/tabla-alumnos/tabla-alumnos.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { StatplanComponent } from './components/statplan/statplan.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { ColorPickerModule } from 'ngx-color-picker';
import { StatasistenciasComponent } from './components/statasistencias/statasistencias.component';
import { StathorariosComponent } from './components/stathorarios/stathorarios.component';
import * as printJS from 'print-js';
import { TablaSliderComponent } from './components/tabla-slider/tabla-slider.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IngresoComponent,
    HomeComponent,
    LoginComponent,
    AlumnoComponent,
    TablaAlumnosComponent,
    EstadisticasComponent,
    StatplanComponent,
    StatasistenciasComponent,
    StathorariosComponent,
    TablaSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ColorPickerModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
