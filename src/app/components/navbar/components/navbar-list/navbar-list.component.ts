import {Component} from '@angular/core';
import {NavItem, NavItemFake} from '../../../../models/NavItem.interface';

@Component({
    selector: 'app-navbar-list',
    templateUrl: './navbar-list.component.html',
    styleUrls: ['./navbar-list.component.scss'],
})
export class NavbarListComponent {
    public navItemList: NavItem[] = NavItemFake;
}
