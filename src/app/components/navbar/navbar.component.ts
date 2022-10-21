import {Component} from '@angular/core';
import {NavItem, NavItemFake} from '../../models/NavItem.interface';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
    public list: NavItem[] = NavItemFake;
}
