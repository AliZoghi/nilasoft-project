import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-dynamic-button',
    templateUrl: './dynamic-button.component.html',
    styleUrls: ['./dynamic-button.component.scss'],
})
export class DynamicButtonComponent {
    @Input() public label!: string;
    @Input() public buttonColor!: string;
    @Input() public buttonBackgroundColor!: string;
    @Input() public buttonColorHover?: string;
    @Input() public buttonFullWidth?: boolean = false;
    @Input() public buttonBackgroundHoverColor?: string;
    @Input() public buttonBorderColor?: string = 'transparent';
    @Input() public buttonBorderHoverColor?: string;
    @Input() public buttonMultiple?: number = 1;
}
