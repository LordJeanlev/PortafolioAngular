import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NabvarComponent } from './components/nabvar/nabvar.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { FooterComponent } from './components/footer/footer.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { AboutComponent } from './components/about/about.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { PortfolioServiceService } from "./service/portfolio.service.service";
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  declarations: [
    AppComponent,
    NabvarComponent,
    EncabezadoComponent,
    FooterComponent,
    EducacionComponent,
    AboutComponent,
    HabilidadesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ PortfolioServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
