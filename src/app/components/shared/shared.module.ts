import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DynamicButtonComponent} from './dynamic-button/dynamic-button.component';
import {DynamicIconComponent} from './dynamic-icon/dynamic-icon.component';

@NgModule({
    declarations: [DynamicButtonComponent, DynamicIconComponent],
    imports: [CommonModule],
    exports: [DynamicButtonComponent, DynamicIconComponent],
})
export class SharedModule {}
