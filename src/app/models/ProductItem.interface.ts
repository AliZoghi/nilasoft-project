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
        time: 150,
        rate: {averageRate: 4.5, count: 13245},
        level: ProductLevelEnum.intermediate,
        teacher: {
            name: 'Claire Robertson',
            image: 'https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-4.jpg',
        },
    },
    {
        image: 'https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-angular.jpg',
        title: 'The Python Course: build web application',
        time: 150,
        rate: {averageRate: 4.5, count: 13245},
        level: ProductLevelEnum.intermediate,
        teacher: {
            name: 'Claire Robertson',
            image: 'https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-4.jpg',
        },
    },
    {
        image: 'https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-graphql.jpg',
        title: 'The Python Course: build web application',
        time: 150,
        rate: {averageRate: 4.5, count: 13245},
        level: ProductLevelEnum.intermediate,
        teacher: {
            name: 'Claire Robertson',
            image: 'https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-4.jpg',
        },
    },
    {
        image: 'https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-react.jpg',
        title: 'The Python Course: build web application',
        time: 150,
        rate: {averageRate: 4.5, count: 13245},
        level: ProductLevelEnum.intermediate,
        teacher: {
            name: 'Claire Robertson',
            image: 'https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-4.jpg',
        },
    },
    {
        image: 'https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-python.jpg',
        title: 'The Python Course: build web application',
        time: 150,
        rate: {averageRate: 4.5, count: 13245},
        level: ProductLevelEnum.intermediate,
        teacher: {
            name: 'Claire Robertson',
            image: 'https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-4.jpg',
        },
    },
    {
        image: 'https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-graphql.jpg',
        title: 'The Python Course: build web application',
        time: 150,
        rate: {averageRate: 4.5, count: 13245},
        level: ProductLevelEnum.intermediate,
        teacher: {
            name: 'Claire Robertson',
            image: 'https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-4.jpg',
        },
    },
];
