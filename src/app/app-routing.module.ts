import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingComponent} from './pages/landing/landing.component';
import {ProductComponent} from './pages/product/product.component';
import {TableDescriptionComponent} from './pages/product/components/product-table-content/components/table-description/table-description.component';
import {TableFaqComponent} from './pages/product/components/product-table-content/components/table-faq/table-faq.component';

const routes: Routes = [
    {path: '', pathMatch: 'full', component: LandingComponent},
    {
        path: 'product/:id',
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
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
