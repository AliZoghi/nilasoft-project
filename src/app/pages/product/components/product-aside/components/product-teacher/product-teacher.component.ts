import {Component, Input} from '@angular/core';
import {ProductTeacher} from '../../../../../../models/product/ProductTeacher.interface';

@Component({
    selector: 'app-product-teacher',
    templateUrl: './product-teacher.component.html',
    styleUrls: ['./product-teacher.component.scss'],
})
export class ProductTeacherComponent {
    @Input() public teacherInfo!: ProductTeacher;
}
