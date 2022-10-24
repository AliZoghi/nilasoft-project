import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {ProductCard} from '../../models/product/Product.interface';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
    public recommendedProducts!: ProductCard[];
    public popularProducts!: ProductCard[];
    public constructor(private productService: ProductService) {}
    public async ngOnInit(): Promise<void> {
        this.recommendedProducts =
            this.productService.productsRecommended.length === 0
                ? await this.productService.getRecommendedProduct()
                : this.productService.productsRecommended;
        this.popularProducts =
            this.productService.productsPopular.length === 0
                ? await this.productService.getPopularProduct()
                : this.productService.productsPopular;
    }
}
