import {Component, Input} from '@angular/core';
import {ProductPage} from '../../../../models/product/Product.interface';

@Component({
    selector: 'app-product-aside',
    templateUrl: './product-aside.component.html',
    styleUrls: ['./product-aside.component.scss'],
})
export class ProductAsideComponent {
    @Input() public productAside!: ProductPage;
}
