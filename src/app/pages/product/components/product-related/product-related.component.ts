import {Component, OnInit} from '@angular/core';
import {ProductItem, ProductItemFake} from '../../../../models/ProductItem.interface';

@Component({
    selector: 'app-product-related',
    templateUrl: './product-related.component.html',
    styleUrls: ['./product-related.component.scss'],
})
export class ProductRelatedComponent {
    public productRelated: ProductItem[] = ProductItemFake;
}
