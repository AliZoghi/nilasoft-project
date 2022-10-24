import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {GET_PRODUCTS, GET_PRODUCTS_ITEM, GET_TEACHERS, GET_TEACHERS_MINIMAL} from '../utils/api.route.utils';
import {ProductComplete, ProductCard, ProductItem, ProductPage} from '../models/product/Product.interface';
import {BehaviorSubject} from 'rxjs';
import {
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

    private productsSubject = new BehaviorSubject<ProductComplete[]>([]);
    private productsItemSubject = new BehaviorSubject<ProductItem[]>([]);
    private teachersSubject = new BehaviorSubject<ProductTeacher[]>([]);
    private teachersMinimalSubject = new BehaviorSubject<ProductTeacherMinimal[]>([]);

    public currentProductPageSubject = new BehaviorSubject<ProductComplete | null>(null);
    public productsRecommended: ProductItem[] = [];
    public productsPopular: ProductItem[] = [];

    private get allProducts(): ProductComplete[] {
        return this.productsSubject.value;
    }
    private get allProductsItem(): ProductItem[] {
        return this.productsItemSubject.value;
    }
    private get allTeachers(): ProductTeacher[] {
        return this.teachersSubject.value;
    }
    private get allTeachersMinimal(): ProductTeacherMinimal[] {
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

    public async getProductById(id: number): Promise<ProductComplete | -1> {
        const product = this.allProducts.find((product: any) => product.id === id) as ProductComplete;
        return product || -1;
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

    public async getProductPageDataById(id: number): Promise<ProductPage | -1> {
        const product = await this.getProductById(id);
        if (product === -1) return -1;

        this.currentProductPageSubject.next(product);
        const productInfo = await this.getProductItemById(id);
        const relatedCourses: ProductCard[] = await this.getProductsCardByIds(product.relatedCoursesId);

        const teacher = await this.getTeacherById(product.teacherId);
        const productPageData: ProductPage = {
            id: product.id,
            tableData: product.tableData,
            advantages: product.advantages,
            information: productInfo,
            relatedCourses,
            teacher,
        };

        return productPageData;
    }

    public async getRecommendedProduct(): Promise<ProductCard[]> {
        const recommendedIdsCourse = [1, 1, 1, 1, 1, 1, 1, 1];
        const recommendedCourses = await this.getProductsCardByIds(recommendedIdsCourse);
        return recommendedCourses;
    }

    public async getPopularProduct(): Promise<ProductCard[]> {
        const popularIdsCourse = this.allProductsItem
            .sort((a, b) => b.rate.averageRate - a.rate.averageRate)
            .map((product) => product.id)
            .slice(0, 10);

        const popularProducts = await this.getProductsCardByIds(popularIdsCourse);
        return popularProducts;
    }

    // UTILITY
    private async getProductsCardByIds(ids: number[]): Promise<ProductCard[]> {
        const productsItem = await Promise.all(ids.map(async (id) => await this.getProductItemById(id)));
        const productsCard = productsItem.map(async (product): Promise<ProductCard> => {
            const teacherInformation = await this.getTeacherMinimalById(product.teacherId);
            return {
                information: product,
                teacherInformation,
            };
        });

        const teacherFake = await this.getTeacherById(1);
        const harchi = productsItem.map((product): ProductCard => {
            return {
                teacherInformation: teacherFake,
                information: product,
            };
        });
        return harchi;
    }
}
