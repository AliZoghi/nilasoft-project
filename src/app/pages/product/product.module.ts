import {NgModule} from '@angular/core';
import {ProductComponent} from './product.component';
import {ProductDescriptionComponent} from './components/product-description/product-description.component';
import {SharedModule} from '../../components/shared/shared.module';
import {ProductTableContentComponent} from './components/product-table-content/product-table-content.component';
import {RouterModule} from '@angular/router';
import {TableDescriptionComponent} from './components/product-table-content/components/table-description/table-description.component';
import {TableFaqComponent} from './components/product-table-content/components/table-faq/table-faq.component';
import {ProductAsideComponent} from './components/product-aside/product-aside.component';
import {ProductBuyComponent} from './components/product-aside/components/product-buy/product-buy.component';
import {ProductAdvantagesComponent} from './components/product-aside/components/product-advantages/product-advantages.component';
import {ProductTeacherComponent} from './components/product-aside/components/product-teacher/product-teacher.component';
import {ProductRelatedComponent} from './components/product-related/product-related.component';
import {DiscountCalculatorModule} from '../../pipes/discount-calculator/discount-calculator.module';

@NgModule({
    declarations: [
        ProductComponent,
        ProductDescriptionComponent,
        ProductTableContentComponent,
        TableDescriptionComponent,
        TableFaqComponent,
        ProductAsideComponent,
        ProductBuyComponent,
        ProductAdvantagesComponent,
        ProductTeacherComponent,
        ProductRelatedComponent,
    ],
    imports: [
        SharedModule,
        RouterModule.forChild([
            {path: '', pathMatch: 'full', redirectTo: '/landing'},
            {
                path: ':id',
                component: ProductComponent,
                children: [
                    {
                        path: '',
                        pathMatch: 'full',
                        redirectTo: 'description',
                    },
                    {
                        path: 'description',
                        component: TableDescriptionComponent,
                    },
                    {
                        path: 'faq',
                        component: TableFaqComponent,
                    },
                ],
            },
        ]),
        DiscountCalculatorModule,
    ],
})
export class ProductModule {}
