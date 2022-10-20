export interface ProductAdvantageItem {
    icon: string;
    label: string;
    color: string;
}

export interface ProductTeacherInfo {
    image: string;
    name: string;
    summary: string;
    field: string[];
    rating: number;
    studentNumber: number;
    coursesNumber: number;
    reviewsNumber: number;
}

export const productAdvantageList: ProductAdvantageItem[] = [
    {color: 'var(--primary-color-normal)', icon: 'circle-play', label: '12 hours video'},
    {color: 'var(--tertiary-color-normal)', icon: 'file-certificate', label: 'Certificate'},
    {color: 'var(--quaternary-color-normal)', icon: 'calendar', label: '12 Article'},
    {color: 'var(--gray-color-dark)', icon: 'video', label: 'Watch Offline'},
    {color: 'var(--secondary-color-normal)', icon: 'clock', label: 'Lifetime access'},
];

export const productTeacherInfo: ProductTeacherInfo = {
    image: 'https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-1.jpg',
    name: 'jenny wilson',
    summary:
        'I am an Innovation designer focussing on UX/UI based in Berlin. As a creative resident at Figma explored the city of the future and how new technologies.',
    field: ['Front-end Developer', 'Designer'],
    rating: 4.5,
    studentNumber: 11604,
    coursesNumber: 32,
    reviewsNumber: 12230,
};
