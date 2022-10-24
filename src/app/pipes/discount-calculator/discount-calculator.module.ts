import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DiscountCalculatorPipe} from './discount-calculator.pipe';

@NgModule({
    declarations: [DiscountCalculatorPipe],
    imports: [CommonModule],
    exports: [DiscountCalculatorPipe],
})
export class DiscountCalculatorModule {}
