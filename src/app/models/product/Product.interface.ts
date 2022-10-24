import {TableDescription, TableFQA} from './ProductTableData.interface';
import {ProductTeacher, ProductTeacherMinimal} from './ProductTeacher.interface';

export interface ProductItem {
    id: number;
    title: string;
    summary: string;
    image: string;
    enrolledNumber: number;
    time: number;
    level: string;
    rate: ProductRate;
    price: ProductPrice;
    teacherId: number;
}

export interface ProductAdvantageItem {
    icon: string;
    label: string;
    color: string;
}

export interface ProductCard {
    information: ProductItem;
    teacherInformation: ProductTeacherMinimal;
}

export interface ProductComplete {
    id: number;
    tableData: {fqa: TableFQA[]; descriptions: TableDescription};
    advantages: ProductAdvantageItem[];
    teacherId: number;
    relatedCoursesId: number[];
}

export interface ProductPage {
    id: number;
    information: ProductItem;
    tableData: {fqa: TableFQA[]; descriptions: TableDescription};
    advantages: ProductAdvantageItem[];
    teacher: ProductTeacher;
    relatedCourses: ProductCard[];
}

export interface ProductPrice {
    onSale: number;
    discount: number;
}
export enum ProductLevelEnum {
    beginner = 'beginner',
    intermediate = 'intermediate',
    advance = 'advance',
}

export interface ProductRate {
    count: number;
    averageRate: number;
}
