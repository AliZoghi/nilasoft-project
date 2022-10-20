import {Component, Input} from '@angular/core';
import {ProductLevelEnum} from '../../../models/ProductItem.interface';

@Component({
    selector: 'app-level-svg',
    templateUrl: './level-svg.component.html',
    styleUrls: ['./level-svg.component.scss'],
})
export class LevelSvgComponent {
    @Input() public level: ProductLevelEnum = ProductLevelEnum.advance;
    @Input() public size?: string = '1.6rem';
    @Input() public fillColor?: string = '#754FFE';
    @Input() public emptyColor?: string = '#DBD8E9';

    public setActiveStyleDependLevel(rectLevel: number): boolean {
        let levelToNumber!: number;
        switch (this.level) {
            case ProductLevelEnum.beginner:
                levelToNumber = 1;
                break;
            case ProductLevelEnum.intermediate:
                levelToNumber = 2;
                break;
            case ProductLevelEnum.advance:
                levelToNumber = 3;
                break;
            default:
                levelToNumber = 3;
        }

        return rectLevel <= levelToNumber;
    }
}
