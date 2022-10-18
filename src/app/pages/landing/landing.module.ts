import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LandingComponent} from './landing.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';

@NgModule({
    declarations: [LandingComponent, HeroSectionComponent],
    imports: [CommonModule],
})
export class LandingModule {}
