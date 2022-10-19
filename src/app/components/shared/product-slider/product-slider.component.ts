import {Component} from '@angular/core';
import {ProductItem, ProductItemFake} from '../../../models/ProductItem.interface';

@Component({
    selector: 'app-product-slider',
    templateUrl: './product-slider.component.html',
    styleUrls: ['./product-slider.component.scss'],
})
export class ProductSliderComponent {
    public productItems: ProductItem[] = ProductItemFake;
}
