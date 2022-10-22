import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {FooterComponent} from './components/footer/footer.component';
import {LandingModule} from './pages/landing/landing.module';
import {ConvertTimeModule} from './pipes/convert-time/convert-time.module';
import {ProductModule} from './pages/product/product.module';
import {SharedModule} from './components/shared/shared.module';
import { NavbarListComponent } from './components/navbar/components/navbar-list/navbar-list.component';
import { NavbarSearchComponent } from './components/navbar/components/navbar-search/navbar-search.component';

@NgModule({
    declarations: [AppComponent, NavbarComponent, FooterComponent, NavbarListComponent, NavbarSearchComponent],
    imports: [BrowserModule, AppRoutingModule, LandingModule, ConvertTimeModule, ProductModule, SharedModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
