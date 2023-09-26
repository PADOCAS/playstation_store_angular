import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './components/card/card.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { CardLabelComponent } from './components/card/card-label/card-label.component';
import { CardPricingComponent } from './components/card/card-pricing/card-pricing.component';
import { MenuBarItemComponent } from './components/menu-bar/menu-bar-item/menu-bar-item.component';
import { MenuBarLogoComponent } from './components/menu-bar/menu-bar-logo/menu-bar-logo.component';
import { MenuBarSonyComponent } from './components/menu-bar/menu-bar-sony/menu-bar-sony.component';
import { MenuBarPrincipalComponent } from './components/menu-bar/menu-bar-principal/menu-bar-principal.component';
import { MenuBarPrincipalLeftComponent } from './components/menu-bar/menu-bar-principal/menu-bar-principal-left/menu-bar-principal-left.component';
import { MenuBarPrincipalLeftItemComponent } from './components/menu-bar/menu-bar-principal/menu-bar-principal-left/menu-bar-principal-left-item/menu-bar-principal-left-item.component';
import { MenuBarPrincipalCenterComponent } from './components/menu-bar/menu-bar-principal/menu-bar-principal-center/menu-bar-principal-center.component';
import { MenuBarPrincipalRightComponent } from './components/menu-bar/menu-bar-principal/menu-bar-principal-right/menu-bar-principal-right.component';
import { CardDestaquePrincComponent } from './components/card-destaque-princ/card-destaque-princ.component';
import { CardDestaquePrincPhotoComponent } from './components/card-destaque-princ/card-destaque-princ-photo/card-destaque-princ-photo.component';
import { CardDestaquePrincResumeComponent } from './components/card-destaque-princ/card-destaque-princ-resume/card-destaque-princ-resume.component';
import { CardDestaqueSecundariosComponent } from './components/card-destaque-secundarios/card-destaque-secundarios.component';
import { CardDestaqueSecundariosContentComponent } from './components/card-destaque-secundarios/card-destaque-secundarios-content/card-destaque-secundarios-content.component';
import { CardFooterComponent } from './components/card-footer/card-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    MenuBarComponent,
    CardLabelComponent,
    CardPricingComponent,
    MenuBarItemComponent,
    MenuBarLogoComponent,
    MenuBarSonyComponent,
    MenuBarPrincipalComponent,
    MenuBarPrincipalLeftComponent,
    MenuBarPrincipalLeftItemComponent,
    MenuBarPrincipalCenterComponent,
    MenuBarPrincipalRightComponent,
    CardDestaquePrincComponent,
    CardDestaquePrincPhotoComponent,
    CardDestaquePrincResumeComponent,
    CardDestaqueSecundariosComponent,
    CardDestaqueSecundariosContentComponent,
    CardFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
