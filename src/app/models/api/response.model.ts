import {ProductCard, ProductComplete} from '../product/Product.interface';
import {ProductTeacher, ProductTeacherMinimal} from '../product/ProductTeacher.interface';

export interface ResultRequest {
    status: string;
    data: any;
}

export interface ProductsResponse extends ResultRequest {
    data: ProductComplete[];
}

export interface ProductsCardResponse extends ResultRequest {
    data: ProductCard[];
}

export interface TeachersResponse extends ResultRequest {
    data: ProductTeacher[];
}

export interface TeachersMinimalResponse extends ResultRequest {
    data: ProductTeacherMinimal[];
}
