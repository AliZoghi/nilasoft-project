import {Component, OnInit} from '@angular/core';
import {InformationCard} from '../../../../models/InformationCard.interface';

@Component({
    selector: 'app-information',
    templateUrl: './information.component.html',
    styleUrls: ['./information.component.scss'],
})
export class InformationComponent {
    public dataCards: InformationCard[] = [
        {iconType: 'video', title: '30,000 online courses', description: 'Enjoy a variety of fresh topics'},
        {iconType: 'users', title: 'Expert instruction', description: 'Find the right instructor for you'},
        {iconType: 'clock', title: 'Lifetime access', description: 'Learn on your schedule'},
    ];
}
