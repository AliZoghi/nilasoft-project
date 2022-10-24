import {Component, Input, OnInit} from '@angular/core';

import {Router} from '@angular/router';
import {ProductCard, ProductItem} from '../../../models/product/Product.interface';
interface MouseEventInterface {
    x: number;
    y: number;
}
@Component({
    selector: 'app-product-card',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
    @Input() public productCard!: ProductCard;
    private mousedownLocation!: MouseEventInterface;

    public constructor(private router: Router) {}

    public storeMousedownLocation(e: MouseEvent): void {
        const {clientX: x, clientY: y} = e;
        this.mousedownLocation = {x, y};
    }

    public checkValidRouteAndNavigate(e: MouseEvent, id: number): void {
        const {clientX: x, clientY: y} = e;
        const {x: downX, y: downY} = this.mousedownLocation;
        if (x === downX && y === downY) this.navigateProduct(id);
    }

    private async navigateProduct(id: number): Promise<void> {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
        await this.router.navigate(['/product', id]);
    }
}
