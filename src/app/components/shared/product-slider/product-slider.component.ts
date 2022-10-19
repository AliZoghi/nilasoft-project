import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {ProductItem, ProductItemFake} from '../../../models/ProductItem.interface';

@Component({
    selector: 'app-product-slider',
    templateUrl: './product-slider.component.html',
    styleUrls: ['./product-slider.component.scss'],
})
export class ProductSliderComponent implements AfterViewInit {
    public productItems: ProductItem[] = ProductItemFake;
    @ViewChild('slider') public sliderContainer!: ElementRef;

    public ngAfterViewInit(): void {
        let isDown = false;
        let startX: number;
        let scrollLeft: number;
        let gutter: number;
        const slider = this.sliderContainer.nativeElement;
        console.log(slider);
        const end = (): void => {
            isDown = false;
            const extraStep = slider.scrollLeft % gutter;
            if (extraStep > gutter / 2) {
                slider.scrollLeft = slider.scrollLeft - extraStep + gutter;
            } else {
                console.log('salam2');
                slider.scrollLeft = slider.scrollLeft - extraStep;
            }
        };

        const start = (e: any): void => {
            gutter = this.calculateSpaceOfBetweenCards();
            isDown = true;
            console.log(isDown);
            startX = e.pageX;
            console.log(startX);
            scrollLeft = slider.scrollLeft;
            console.log(scrollLeft);
            console.log('------');
        };

        const move = (e: any): void => {
            if (!isDown) return;

            e.preventDefault();
            const x = e.pageX;
            const dist = x - startX;
            slider.scrollLeft = scrollLeft - dist;
        };

        slider.addEventListener('mousedown', start);
        slider.addEventListener('mousemove', move);
        slider.addEventListener('mouseup', end);
    }

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
