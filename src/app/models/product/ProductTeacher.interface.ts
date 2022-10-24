export interface ProductTeacher {
    id: number;
    image: string;
    name: string;
    summary: string;
    fields: string[];
    rating: number;
    statistics: {studentNumber: number; coursesNumber: number; reviewsNumber: number};
}

export interface ProductTeacherMinimal {
    id: number;
    image: string;
    name: string;
}
