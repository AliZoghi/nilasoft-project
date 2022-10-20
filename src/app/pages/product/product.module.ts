import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductComponent} from './product.component';
import {ProductDescriptionComponent} from './components/product-description/product-description.component';
import {SharedModule} from '../../components/shared/shared.module';
import {ProductTableContentComponent} from './components/product-table-content/product-table-content.component';
import {RouterModule} from '@angular/router';
import { TableDescriptionComponent } from './components/product-table-content/components/table-description/table-description.component';
import { TableFaqComponent } from './components/product-table-content/components/table-faq/table-faq.component';

@NgModule({
    declarations: [ProductComponent, ProductDescriptionComponent, ProductTableContentComponent, TableDescriptionComponent, TableFaqComponent],
    imports: [CommonModule, SharedModule, RouterModule],
})
export class ProductModule {}
