import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {GET_PRODUCTS, GET_PRODUCTS_CARD, GET_TEACHERS, GET_TEACHERS_MINIMAL} from '../utils/api.route.utils';
import {ProductComplete, ProductCard} from '../models/product/Product.interface';
import {BehaviorSubject} from 'rxjs';
import {
    ProductsCardResponse,
    ProductsResponse,
    TeachersMinimalResponse,
    TeachersResponse,
} from '../models/api/response.model';
import {ProductTeacher, ProductTeacherMinimal} from '../models/product/ProductTeacher.interface';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    public constructor(private apiService: ApiService) {}

    public productsSubject = new BehaviorSubject<ProductComplete[]>([]);
    public teachersSubject = new BehaviorSubject<ProductTeacher[]>([]);
    public teachersMinimalSubject = new BehaviorSubject<ProductTeacherMinimal[]>([]);
    public productsCardSubject = new BehaviorSubject<ProductCard[]>([]);

    public get allProducts(): ProductComplete[] {
        return this.productsSubject.value;
    }
    public get allProductsCard(): ProductCard[] {
        return this.productsCardSubject.value;
    }
    public get allTeachers(): ProductTeacher[] {
        return this.teachersSubject.value;
    }
    public get allTeachersMinimal(): ProductTeacherMinimal[] {
        return this.teachersMinimalSubject.value;
    }

    public async getAllProducts(): Promise<void> {
        const productsResponse = await this.apiService.getRequest<ProductsResponse>({url: GET_PRODUCTS});
        if (productsResponse?.status === 'success') this.productsSubject.next(productsResponse.data);
    }

    public async getAllTeachers(): Promise<void> {
        const teachersResponse = await this.apiService.getRequest<TeachersResponse>({url: GET_TEACHERS});
        if (teachersResponse?.status === 'success') this.teachersSubject.next(teachersResponse.data);
    }

    public async getAllProductsCard(): Promise<void> {
        const productsCardResponse = await this.apiService.getRequest<ProductsCardResponse>({url: GET_PRODUCTS_CARD});
        if (productsCardResponse?.status === 'success') this.productsCardSubject.next(productsCardResponse.data);
    }

    public async getAllTeachersMinimal(): Promise<void> {
        const teachersMinimalResponse = await this.apiService.getRequest<TeachersMinimalResponse>({
            url: GET_TEACHERS_MINIMAL,
        });
        if (teachersMinimalResponse?.status === 'success')
            this.teachersMinimalSubject.next(teachersMinimalResponse.data);
    }

    public async getProductById(id: number): Promise<void> {
        const product = this.allProducts.find((product: any) => product.info.id === id) as ProductComplete;
        console.log(product);

        // return product;
    }
}
