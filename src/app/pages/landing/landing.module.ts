import {NgModule} from '@angular/core';

import {LandingComponent} from './landing.component';
import {HeroSectionComponent} from './components/hero-section/hero-section.component';
import {SharedModule} from '../../components/shared/shared.module';
import {InformationComponent} from './components/information/information.component';
import {InformationCardComponent} from './components/information/components/information-card/information-card.component';
import {ProductSliderComponent} from './components/product-slider/product-slider.component';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [
        LandingComponent,
        HeroSectionComponent,
        InformationComponent,
        InformationCardComponent,
        ProductSliderComponent,
    ],
    imports: [SharedModule, RouterModule.forChild([{path: '', pathMatch: 'full', component: LandingComponent}])],
})
export class LandingModule {}
