import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { ProductPage } from "../../models/product/Product.interface";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
    public productPageInfo!:ProductPage

    public constructor(private productService: ProductService,  private route: ActivatedRoute,private router: Router) {}

    public async ngOnInit(): Promise<void> {
        this.route.params.subscribe(async (params: Params) => {
            const id = +params['id'];
            const productPageInfo = await this.productService.getProductPageDataById(id);
            if (productPageInfo === -1) {
                await this.router.navigate(['/landing']);
                return
            }
            this.productPageInfo = productPageInfo;
        }
    }
}
