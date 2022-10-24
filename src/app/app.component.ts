import {Component, OnInit} from '@angular/core';
import {ProductService} from './services/product.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    public constructor(private productService: ProductService) {}
    public async ngOnInit(): Promise<void> {
        await Promise.all([
            this.productService.getAllProducts(),
            this.productService.getAllProductsItem(),
            this.productService.getAllTeachers(),
            this.productService.getAllTeachersMinimal(),
        ]);
    }
}
