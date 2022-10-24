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
        this.recommendedProducts = await this.productService.getRecommendedProduct();
        this.popularProducts = await this.productService.getPopularProduct();
    }
}
