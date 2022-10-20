import {Component} from '@angular/core';
import {ProductAdvantageItem, productAdvantageList} from '../../../../../../models/ProductPage.interface';

@Component({
    selector: 'app-product-advantages',
    templateUrl: './product-advantages.component.html',
    styleUrls: ['./product-advantages.component.scss'],
})
export class ProductAdvantagesComponent {
    public advantagesList: ProductAdvantageItem[] = productAdvantageList;
}
