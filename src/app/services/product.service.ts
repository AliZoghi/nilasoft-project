import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {GET_PRODUCT} from '../utils/api.route.utils';
import {ProductCompleteInfo} from '../models/ProductPage.interface';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    public constructor(private apiService: ApiService) {}

    public async getProductById(id: number): Promise<ProductCompleteInfo> {
        const products = (await this.apiService.getRequest({url: GET_PRODUCT})) as any;
        const product = products.data.find((product: any) => product.info.id === id) as ProductCompleteInfo;
        console.log(product);
        return product;
    }
}
