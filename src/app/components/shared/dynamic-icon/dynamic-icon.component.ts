import {Component, Input} from '@angular/core';
import {DynamicIconOptions} from '../../../models/DynamicIconOptions.interface';

@Component({
    selector: 'app-dynamic-icon',
    templateUrl: './dynamic-icon.component.html',
    styleUrls: ['./dynamic-icon.component.scss'],
})
export class DynamicIconComponent {
    @Input() public iconColor!: string;
    @Input() public iconShape!: string;
    @Input() public iconBackgroundColor?: string = 'transparent';
    @Input() public iconSize?: string = '100%';
    @Input() public iconType?: string = 'regular';
    @Input() public iconHaveCircleBg?: boolean = false;
}
