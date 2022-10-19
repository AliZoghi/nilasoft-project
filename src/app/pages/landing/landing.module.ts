import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LandingComponent} from './landing.component';
import {HeroSectionComponent} from './components/hero-section/hero-section.component';
import {DynamicButtonComponent} from '../../components/shared/dynamic-button/dynamic-button.component';
import {SharedModule} from '../../components/shared/shared.module';

@NgModule({
    declarations: [LandingComponent, HeroSectionComponent],
    imports: [CommonModule, SharedModule],
})
export class LandingModule {}
