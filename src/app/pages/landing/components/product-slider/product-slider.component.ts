import {AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild} from '@angular/core';
import {ProductItem, ProductItemFake} from '../../../../models/ProductItem.interface';

@Component({
    selector: 'app-product-slider',
    templateUrl: './product-slider.component.html',
    styleUrls: ['./product-slider.component.scss'],
})
export class ProductSliderComponent implements AfterViewInit, OnDestroy {
    @Input() public sliderTitle!: string;
    public productItems: ProductItem[] = ProductItemFake;
    private readonly INTERVAL_DELAY: number = 4_000;
    private interval!: number;
    @ViewChild('slider') public sliderContainer!: ElementRef;

    public ngAfterViewInit(): void {
        this.draggableSlider();
        this.resetSliderInterval();
    }

    public scrollFunction(goRight: 1 | -1): void {
        const slider = this.sliderContainer.nativeElement;
        const step = this.calculateSpaceOfBetweenCards() * goRight;
        let scrollValue = slider.scrollLeft + step;

        // Last card AND Click on right-button
        if (slider.scrollWidth - slider.clientWidth === slider.scrollLeft && goRight === 1) {
            scrollValue = 0;
        }
        // First card AND Click on left-button
        else if (slider.scrollLeft === 0 && goRight === -1) {
            scrollValue = slider.scrollWidth - slider.clientWidth;
        }

        slider.scrollTo({
            left: scrollValue,
            behavior: 'smooth',
        });

        this.resetSliderInterval();
    }

    private calculateSpaceOfBetweenCards(): number {
        const gapValue = parseInt(getComputedStyle(this.sliderContainer.nativeElement).getPropertyValue('gap'));
        const cardWidth = this.sliderContainer.nativeElement.querySelector('app-product-card').clientWidth;
        return cardWidth + gapValue;
    }

    private draggableSlider(): void {
        const slider = this.sliderContainer.nativeElement;
        let mouseIsDown = false;
        let startX: number;
        let scrollLeft: number;

        const dropSlider = (): void => {
            mouseIsDown = false;
            const cardWidth = this.calculateSpaceOfBetweenCards();
            const extraStep = slider.scrollLeft % cardWidth;
            let scrollValue = slider.scrollLeft - extraStep;
            if (extraStep > cardWidth / 2) {
                scrollValue += cardWidth;
            }

            slider.scrollTo({
                left: scrollValue,
                behavior: 'smooth',
            });

            this.resetSliderInterval();
        };

        const dragSlider = (e: any): void => {
            mouseIsDown = true;
            startX = e.pageX;
            scrollLeft = slider.scrollLeft;
        };

        const moveSlider = (e: any): void => {
            if (!mouseIsDown) return;

            e.preventDefault();
            const endX = e.pageX;
            const dist = endX - startX;
            slider.scrollLeft = scrollLeft - dist;
        };

        slider.addEventListener('mousedown', dragSlider);
        slider.addEventListener('mousemove', moveSlider);
        slider.addEventListener('mouseup', dropSlider);
    }

    private resetSliderInterval(): void {
        clearInterval(this.interval);

        this.interval = setInterval(() => {
            this.scrollFunction(1);
        }, this.INTERVAL_DELAY);
    }

    public ngOnDestroy(): void {
        clearInterval(this.interval);
    }
}
