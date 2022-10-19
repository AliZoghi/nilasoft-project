import {Component, Input} from '@angular/core';
import {InformationCard} from '../../../../../../models/InformationCard.interface';

@Component({
    selector: 'app-information-card',
    templateUrl: './information-card.component.html',
    styleUrls: ['./information-card.component.scss'],
})
export class InformationCardComponent {
    @Input() public dataCard!: InformationCard;
}
