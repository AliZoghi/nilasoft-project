import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-navbar-search',
    templateUrl: './navbar-search.component.html',
    styleUrls: ['./navbar-search.component.scss'],
})
export class NavbarSearchComponent {
    public searchPhrase: string = '';
    public constructor(private router: Router) {}
    public async searchByPhrase(phrase: string): Promise<void> {
        await this.router.navigate(['/search'], {queryParams: {searchPhrase: phrase}});
    }
}
