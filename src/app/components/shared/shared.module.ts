import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DynamicButtonComponent} from './dynamic-button/dynamic-button.component';
import {DynamicIconComponent} from './dynamic-icon/dynamic-icon.component';
import {ProductCardComponent} from './product-card/product-card.component';
import {RatingComponent} from './rating/rating.component';
import {ConvertTimeModule} from '../../pipes/convert-time/convert-time.module';
import {LevelSvgComponent} from './level-svg/level-svg.component';
import {TooltipComponent} from './tooltip/tooltip.component';

@NgModule({
    declarations: [
        DynamicButtonComponent,
        DynamicIconComponent,
        ProductCardComponent,
        RatingComponent,
        LevelSvgComponent,
        TooltipComponent,
    ],
    imports: [CommonModule, ConvertTimeModule],
    exports: [
        DynamicButtonComponent,
        DynamicIconComponent,
        LevelSvgComponent,
        RatingComponent,
        ProductCardComponent,
        TooltipComponent,
        CommonModule,
        ConvertTimeModule,
    ],
})
export class SharedModule {}
