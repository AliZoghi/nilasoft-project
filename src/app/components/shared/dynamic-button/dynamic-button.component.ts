import {Component, Input} from '@angular/core';
import {DynamicButtonOptions} from '../../../models/DynamicButtonOptions.interface';

@Component({
    selector: 'app-dynamic-button',
    templateUrl: './dynamic-button.component.html',
    styleUrls: ['./dynamic-button.component.scss'],
})
export class DynamicButtonComponent {
    @Input() public options!: DynamicButtonOptions;
}
