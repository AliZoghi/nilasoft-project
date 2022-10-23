export interface ProductItem {
    image: string;
    title: string;
    time: number;
    level: ProductLevelEnum;
    rate: ProductRate;
    teacher: ProductTeacher;
}

export enum ProductLevelEnum {
    beginner = 'beginner',
    intermediate = 'intermediate',
    advance = 'advance',
}

export interface ProductTeacher {
    name: string;
    image: string;
}

export interface ProductRate {
    count: number;
    averageRate: number;
}

export const ProductItemFake: ProductItem[] = [
    {
        image: 'https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-python.jpg',
        title: 'The Python Course: build web application',
        time: 300,
        rate: {averageRate: 2.1, count: 1000},
        level: ProductLevelEnum.beginner,
        teacher: {
            name: 'Claire Robertson',
            image: 'https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-4.jpg',
        },
    },
    {
        image: 'https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-angular.jpg',
        title: 'The Python Course: build web application',
        time: 109,
        rate: {averageRate: 3.9, count: 13245},
        level: ProductLevelEnum.advance,
        teacher: {
            name: 'Claire Robertson',
            image: 'https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-4.jpg',
        },
    },
    {
        image: 'https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-graphql.jpg',
        title: 'The Python Course: build web application',
        time: 71,
        rate: {averageRate: 1.7, count: 1920},
        level: ProductLevelEnum.beginner,
        teacher: {
            name: 'Claire Robertson',
            image: 'https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-4.jpg',
        },
    },
    {
        image: 'https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-react.jpg',
        title: 'The Python Course: build web application',
        time: 269,
        rate: {averageRate: 3.6, count: 2310},
        level: ProductLevelEnum.intermediate,
        teacher: {
            name: 'Claire Robertson',
            image: 'https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-4.jpg',
        },
    },
    {
        image: 'https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-python.jpg',
        title: 'The Python Course: build web application',
        time: 175,
        rate: {averageRate: 4.8, count: 13245},
        level: ProductLevelEnum.advance,
        teacher: {
            name: 'Claire Robertson',
            image: 'https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-4.jpg',
        },
    },
    {
        image: 'https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-graphql.jpg',
        title: 'The Python Course: build web application',
        time: 210,
        rate: {averageRate: 5, count: 2310},
        level: ProductLevelEnum.advance,
        teacher: {
            name: 'Claire Robertson',
            image: 'https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-4.jpg',
        },
    },
];
