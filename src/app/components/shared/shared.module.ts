import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DynamicButtonComponent} from './dynamic-button/dynamic-button.component';
import {DynamicIconComponent} from './dynamic-icon/dynamic-icon.component';
import {ProductSliderComponent} from './product-slider/product-slider.component';
import {ProductCardComponent} from './product-slider/components/product-card/product-card.component';

@NgModule({
    declarations: [DynamicButtonComponent, DynamicIconComponent, ProductSliderComponent, ProductCardComponent],
    imports: [CommonModule],
    exports: [DynamicButtonComponent, DynamicIconComponent, ProductSliderComponent],
})
export class SharedModule {}
