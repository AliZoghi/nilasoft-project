import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'discountCalculator',
})
export class DiscountCalculatorPipe implements PipeTransform {
    public transform(price: number, discount: number): number {
        return Math.round(price - (price * discount) / 100);
    }
}
