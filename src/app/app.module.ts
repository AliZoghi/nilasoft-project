import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {FooterComponent} from './components/footer/footer.component';
import {LandingModule} from './pages/landing/landing.module';
import {SharedModule} from './components/shared/shared.module';

@NgModule({
    declarations: [AppComponent, NavbarComponent, FooterComponent],
    imports: [BrowserModule, AppRoutingModule, LandingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
