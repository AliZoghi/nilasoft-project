import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FooterComponent} from './components/footer/footer.component';
import {LandingModule} from './pages/landing/landing.module';

import {ProductModule} from './pages/product/product.module';
import {SharedModule} from './components/shared/shared.module';

import {NavbarModule} from './components/navbar/navbar.module';

@NgModule({
    declarations: [AppComponent, FooterComponent],
    imports: [BrowserModule, AppRoutingModule, SharedModule, NavbarModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
