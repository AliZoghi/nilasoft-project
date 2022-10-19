import {Component} from '@angular/core';
import {DynamicButtonOptions} from '../../../../models/DynamicButtonOptions.interface';

@Component({
    selector: 'app-hero-section',
    templateUrl: './hero-section.component.html',
    styleUrls: ['./hero-section.component.scss'],
})
export class HeroSectionComponent {
    public buttonOptions: DynamicButtonOptions[] = [
        {
            color: 'var(--gray-color-lightest)',
            backgroundColor: 'var(--tertiary-color-normal)',
            backgroundHoverColor: 'var(--tertiary-color-dark)',
            label: 'Browse Courses?',
        },
        {
            color: 'var(--gray-color-darkest)',
            backgroundColor: 'var(--gray-color-lightest)',
            label: 'Are You Instructor?',
        },
    ];
}
