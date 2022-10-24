import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {
    GET_PRODUCTS,
    GET_PRODUCTS_CARD,
    GET_PRODUCTS_ITEM,
    GET_TEACHERS,
    GET_TEACHERS_MINIMAL,
} from '../utils/api.route.utils';
import {ProductComplete, ProductCard, ProductItem} from '../models/product/Product.interface';
import {BehaviorSubject} from 'rxjs';
import {
    ProductsCardResponse,
    ProductsItemResponse,
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
    public productsItemSubject = new BehaviorSubject<ProductItem[]>([]);
    public teachersSubject = new BehaviorSubject<ProductTeacher[]>([]);
    public teachersMinimalSubject = new BehaviorSubject<ProductTeacherMinimal[]>([]);

    public get allProducts(): ProductComplete[] {
        return this.productsSubject.value;
    }
    public get allProductsItem(): ProductItem[] {
        return this.productsItemSubject.value;
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
    public async getAllProductsItem(): Promise<void> {
        const productsItemResponse = await this.apiService.getRequest<ProductsItemResponse>({url: GET_PRODUCTS_ITEM});
        if (productsItemResponse?.status === 'success') this.productsItemSubject.next(productsItemResponse.data);
    }

    public async getAllTeachers(): Promise<void> {
        const teachersResponse = await this.apiService.getRequest<TeachersResponse>({url: GET_TEACHERS});
        if (teachersResponse?.status === 'success') this.teachersSubject.next(teachersResponse.data);
    }

    public async getAllTeachersMinimal(): Promise<void> {
        const teachersMinimalResponse = await this.apiService.getRequest<TeachersMinimalResponse>({
            url: GET_TEACHERS_MINIMAL,
        });
        if (teachersMinimalResponse?.status === 'success')
            this.teachersMinimalSubject.next(teachersMinimalResponse.data);
    }

    public async getProductById(id: number): Promise<ProductComplete> {
        const product = this.allProducts.find((product: any) => product.id === id) as ProductComplete;

        return product;
    }

    public async getProductItemById(id: number): Promise<ProductItem> {
        const productItem = this.allProductsItem.find((product: any) => product.id === id) as ProductItem;

        return productItem;
    }

    public async getTeacherById(id: number): Promise<ProductTeacher> {
        const teacher = this.allTeachers.find((teacher: any) => teacher.id === id) as ProductTeacher;

        return teacher;
    }

    public async getTeacherMinimalById(id: number): Promise<ProductTeacherMinimal> {
        const teacherMinimal = this.allTeachersMinimal.find(
            (teacher: any) => teacher.id === id
        ) as ProductTeacherMinimal;

        return teacherMinimal;
    }
}
