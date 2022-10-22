import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar.component';
import {NavbarListComponent} from './components/navbar-list/navbar-list.component';
import {NavbarSearchComponent} from './components/navbar-search/navbar-search.component';
import {NavbarToggleListComponent} from './components/navbar-toggle-list/navbar-toggle-list.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    declarations: [NavbarComponent, NavbarListComponent, NavbarSearchComponent, NavbarToggleListComponent],
    imports: [CommonModule, RouterModule, SharedModule],
    exports: [NavbarComponent],
})
export class NavbarModule {}
