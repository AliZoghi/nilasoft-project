import {Component, OnInit} from '@angular/core';
import {TableFQA} from '../../../../../../models/product/ProductTableData.interface';
import {ProductService} from '../../../../../../services/product.service';

@Component({
    selector: 'app-table-faq',
    templateUrl: './table-faq.component.html',
    styleUrls: ['./table-faq.component.scss'],
})
export class TableFaqComponent implements OnInit {
    public fqaObj!: TableFQA[];

    public constructor(private productService: ProductService) {}

    public ngOnInit(): void {
        const fqa = this.productService.currentProductPageSubject.value?.tableData.fqa;
        if (fqa) this.fqaObj = fqa;
    }
}
