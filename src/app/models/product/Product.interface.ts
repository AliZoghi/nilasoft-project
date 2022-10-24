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

// export const productAdvantageList: ProductAdvantageItem[] = [
//     {color: 'var(--primary-color-normal)', icon: 'circle-play', label: '12 hours video'},
//     {color: 'var(--tertiary-color-normal)', icon: 'file-certificate', label: 'Certificate'},
//     {color: 'var(--quaternary-color-normal)', icon: 'calendar', label: '12 Article'},
//     {color: 'var(--gray-color-dark)', icon: 'video', label: 'Watch Offline'},
//     {color: 'var(--secondary-color-normal)', icon: 'clock', label: 'Lifetime access'},
// ];

// export const productTeacherInfo: ProductTeacher = {
//     id: 2,
//     image: 'https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-1.jpg',
//     name: 'jenny wilson',
//     summary:
//         'I am an Innovation designer focussing on UX/UI based in Berlin. As a creative resident at Figma explored the city of the future and how new technologies.',
//     fields: ['Front-end Developer', 'Designer'],
//     rating: 4.5,
//     studentNumber: 11604,
//     coursesNumber: 32,
//     reviewsNumber: 12230,
// };

//    "result": "success",
//    "data": [
//        {
//            "id": 7,
//            "summary": "test",
//            "enrolled": 1200,
//            "image": "https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-python.jpg",
//            "title": "The Python Course: build web application",
//            "time": 150,
//            "rate": {"averageRate": 4.5, "count": 13245},
//            "level": "intermediate",
//            "teacher": {
//                "name": "Claire Robertson",
//                "image": "https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-4.jpg"
//            }
//        },
//        {
//            "id": 2,
//            "summary": "test",
//            "enrolled": 1200,
//            "image": "https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-angular.jpg",
//            "title": "The Python Course: build web application",
//            "time": 150,
//            "rate": {"averageRate": 4.5, "count": 13245},
//            "level": "intermediate",
//            "teacher": {
//                "name": "Claire Robertson",
//                "image": "https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-4.jpg"
//            }
//        },
//        {
//            "id": 3,
//            "summary": "test",
//            "enrolled": 1200,
//            "image": "https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-graphql.jpg",
//            "title": "The Python Course: build web application",
//            "time": 150,
//            "rate": {"averageRate": 4.5, "count": 13245},
//            "level": "intermediate",
//            "teacher": {
//                "name": "Claire Robertson",
//                "image": "https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-4.jpg"
//            }
//        },
//        {
//            "id": 4,
//            "summary": "test",
//            "enrolled": 1200,
//            "image": "https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-react.jpg",
//            "title": "The Python Course: build web application",
//            "time": 150,
//            "rate": {"averageRate": 4.5, "count": 13245},
//            "level": "intermediate",
//            "teacher": {
//                "name": "Claire Robertson",
//                "image": "https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-4.jpg"
//            }
//        },
//        {
//            "id": 5,
//            "summary": "test",
//            "enrolled": 1200,
//            "image": "https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-python.jpg",
//            "title": "The Python Course: build web application",
//            "time": 150,
//            "rate": {"averageRate": 4.5, "count": 13245},
//            "level": "intermediate",
//            "teacher": {
//                "name": "Claire Robertson",
//                "image": "https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-4.jpg"
//            }
//        },
//        {
//            "id": 6,
//            "summary": "test",
//            "enrolled": 1200,
//            "image": "https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-graphql.jpg",
//            "title": "The Python Course: build web application",
//            "time": 150,
//            "rate": {"averageRate": 4.5, "count": 13245},
//            "level": "intermediate",
//            "teacher": {
//                "name": "Claire Robertson",
//                "image": "https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-4.jpg"
//            }
//        }
//    ]
//}
