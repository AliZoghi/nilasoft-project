import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-navbar-toggle-list',
    templateUrl: './navbar-toggle-list.component.html',
    styleUrls: ['./navbar-toggle-list.component.scss'],
})
export class NavbarToggleListComponent {
    @Input() public isOpen!: boolean;
}
