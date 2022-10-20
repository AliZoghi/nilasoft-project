import {Component} from '@angular/core';
import {TableFQA, tableFQAFake} from '../../../../../../models/TableContent.interface';

@Component({
    selector: 'app-table-faq',
    templateUrl: './table-faq.component.html',
    styleUrls: ['./table-faq.component.scss'],
})
export class TableFaqComponent {
    public fqaObj: TableFQA[] = tableFQAFake;
}
