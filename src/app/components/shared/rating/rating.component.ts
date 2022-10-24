import {Component, Input} from '@angular/core';
import {ProductRate} from '../../../models/product/Product.interface';

@Component({
    selector: 'app-rating',
    templateUrl: './rating.component.html',
    styleUrls: ['./rating.component.scss'],
})
export class RatingComponent {
    @Input() public rateObj!: ProductRate;
    @Input() public rateShown: boolean = true;
    @Input() public starShown: boolean = true;
    @Input() public countShown: boolean = true;
    @Input() public countSize?: string = 'var(--font-size-detail)';

    public createStars(count: number, ratePoint: number): number[] {
        return new Array(count).fill(0).map((n, index) => {
            if (ratePoint >= index + 1) return 1;
            return 0;
        });
    }
}
