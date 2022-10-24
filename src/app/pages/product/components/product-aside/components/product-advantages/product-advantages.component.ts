import {Component, Input} from '@angular/core';
import {ProductAdvantageItem} from '../../../../../../models/product/Product.interface';

@Component({
    selector: 'app-product-advantages',
    templateUrl: './product-advantages.component.html',
    styleUrls: ['./product-advantages.component.scss'],
})
export class ProductAdvantagesComponent {
    @Input() public advantagesList!: ProductAdvantageItem[];
}
