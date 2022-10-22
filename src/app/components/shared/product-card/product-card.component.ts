import {Component, Input} from '@angular/core';
import {ProductItem} from '../../../models/ProductItem.interface';

@Component({
    selector: 'app-product-card',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
    @Input() public productItem!: ProductItem;
}
