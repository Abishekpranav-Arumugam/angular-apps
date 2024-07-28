import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RingsComponent } from './rings/rings.component';
import { BanglesComponent } from './bangles/bangles.component';
import { EarringsetComponent } from './earringset/earringset.component';
import { NecklaceComponent } from './necklace/necklace.component';
import { ChainsComponent } from './chains/chains.component';
import { BraceletComponent } from './bracelet/bracelet.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GooglePayButtonModule } from '@google-pay/button-angular';
import { NosepinComponent } from './nosepin/nosepin.component';
import { CoinFiveTenComponent } from './coin-five-ten/coin-five-ten.component';
import { Coin100Component } from './coin-100/coin-100.component';
import { GringsComponent } from './grings/grings.component';
import { GchainsComponent } from './gchains/gchains.component';
import { GpendantComponent } from './gpendant/gpendant.component';
import { DringComponent } from './dring/dring.component';
import { DbanglesComponent } from './dbangles/dbangles.component';
import { DbraceletComponent } from './dbracelet/dbracelet.component';
import { DpendantComponent } from './dpendant/dpendant.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component'; 


@NgModule({
  declarations: [
    AppComponent,
    RingsComponent,
    BanglesComponent,
    EarringsetComponent,
    NecklaceComponent,
    ChainsComponent,
    BraceletComponent,
    HomeComponent,
    NosepinComponent,
    CoinFiveTenComponent,
    Coin100Component,
    GringsComponent,
    GchainsComponent,
    GpendantComponent,
    DringComponent,
    DbanglesComponent,
    DbraceletComponent,
    DpendantComponent,
    CartComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    GooglePayButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }