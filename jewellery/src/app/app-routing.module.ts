//app-rounting.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RingsComponent } from './rings/rings.component';
import { BanglesComponent } from './bangles/bangles.component';
import { EarringsetComponent } from './earringset/earringset.component';
import { NecklaceComponent } from './necklace/necklace.component';
import { ChainsComponent } from './chains/chains.component';
import { BraceletComponent } from './bracelet/bracelet.component';
import { HomeComponent } from './home/home.component';
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

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'rings', component: RingsComponent },
  { path: 'bangles', component: BanglesComponent},
  { path: 'earringset', component: EarringsetComponent},
  { path: 'necklace', component: NecklaceComponent},
  { path: 'bracelet', component: BraceletComponent},
  { path: 'chains', component: ChainsComponent},
  { path: 'home', component: HomeComponent},
  { path: 'nosepin', component: NosepinComponent},
  { path: 'coin-five-ten', component: CoinFiveTenComponent},
  { path: 'coin-100', component: Coin100Component},
  { path: 'grings', component: GringsComponent},
  { path: 'gchains', component: GchainsComponent},
  { path: 'gpendant', component: GpendantComponent},
  { path: 'dring', component: DringComponent},
  { path: 'dbangle', component: DbanglesComponent},
  { path: 'dpendant', component: DpendantComponent},
  { path: 'dbracelet', component: DbraceletComponent},
  { path: 'cart', component: CartComponent },
  { path: 'contact', component: ContactComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
