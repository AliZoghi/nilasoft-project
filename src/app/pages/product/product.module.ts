import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductComponent} from './product.component';
import {ProductDescriptionComponent} from './components/product-description/product-description.component';
import {SharedModule} from '../../components/shared/shared.module';

@NgModule({
    declarations: [ProductComponent, ProductDescriptionComponent],
    imports: [CommonModule, SharedModule],
})
export class ProductModule {}
