import {Component, OnInit} from '@angular/core';
import {ProductRate} from '../../../../models/ProductItem.interface';

@Component({
    selector: 'app-product-description',
    templateUrl: './product-description.component.html',
    styleUrls: ['./product-description.component.scss'],
})
export class ProductDescriptionComponent {
    public rateObj: ProductRate = {averageRate: 3.2, count: 140};
}
