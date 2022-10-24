import {Component, OnInit} from '@angular/core';
import {TableDescription} from '../../../../../../models/product/ProductTableData.interface';
import {ProductService} from '../../../../../../services/product.service';

@Component({
    selector: 'app-table-description',
    templateUrl: './table-description.component.html',
    styleUrls: ['./table-description.component.scss'],
})
export class TableDescriptionComponent implements OnInit {
    public descriptionObj!: TableDescription;
    public constructor(private productService: ProductService) {}

    public ngOnInit(): void {
        const description = this.productService.currentProductPageSubject.value?.tableData.descriptions;
        if (description) this.descriptionObj = description;
    }
}
