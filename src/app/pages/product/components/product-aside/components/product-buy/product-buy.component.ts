import {Component, Input} from '@angular/core';
import {ProductItem} from '../../../../../../models/product/Product.interface';

@Component({
    selector: 'app-product-buy',
    templateUrl: './product-buy.component.html',
    styleUrls: ['./product-buy.component.scss'],
})
export class ProductBuyComponent {
    @Input() public productPriceSection!: ProductItem;
}
