import {Component} from '@angular/core';
import {productTeacherInfo, ProductTeacherInfo} from '../../../../../../models/product/Product.interface';

@Component({
    selector: 'app-product-teacher',
    templateUrl: './product-teacher.component.html',
    styleUrls: ['./product-teacher.component.scss'],
})
export class ProductTeacherComponent {
    public teacherInfo: ProductTeacherInfo = productTeacherInfo;
}
