import {Component, Input} from '@angular/core';
import {ProductItem} from '../../../../models/product/Product.interface';

@Component({
    selector: 'app-product-related',
    templateUrl: './product-related.component.html',
    styleUrls: ['./product-related.component.scss'],
})
export class ProductRelatedComponent {
    @Input() public productRelated!: ProductItem[];
}
