import {Component, ElementRef, ViewChild} from '@angular/core';
import {ProductItem, ProductItemFake} from '../../../models/ProductItem.interface';

@Component({
    selector: 'app-product-slider',
    templateUrl: './product-slider.component.html',
    styleUrls: ['./product-slider.component.scss'],
})
export class ProductSliderComponent {
    public productItems: ProductItem[] = ProductItemFake;

    @ViewChild('slider') public sliderContainer!: ElementRef;

    public scrollFunction(goRight: -1 | 1): void {
        const space = this.calculateSpaceOfBetweenCards() * goRight;

        this.sliderContainer.nativeElement.scrollTo({
            left: this.sliderContainer.nativeElement.scrollLeft + space,
            behavior: 'smooth',
        });
    }

    private calculateSpaceOfBetweenCards(): number {
        const gapValue = parseInt(getComputedStyle(this.sliderContainer.nativeElement).getPropertyValue('gap'));
        const cardWidth = this.sliderContainer.nativeElement.querySelector('app-product-card').clientWidth;

        return cardWidth + gapValue;
    }
}
