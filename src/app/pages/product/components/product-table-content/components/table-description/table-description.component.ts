import {Component} from '@angular/core';
import {TableDescription, tableDescriptionFake} from '../../../../../../models/TableContent.interface';

@Component({
    selector: 'app-table-description',
    templateUrl: './table-description.component.html',
    styleUrls: ['./table-description.component.scss'],
})
export class TableDescriptionComponent {
    public descriptionObj: TableDescription = tableDescriptionFake;
}
