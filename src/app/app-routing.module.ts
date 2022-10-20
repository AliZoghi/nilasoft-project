import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingComponent} from './pages/landing/landing.component';
import {ProductComponent} from './pages/product/product.component';

const routes: Routes = [
    {path: '', pathMatch: 'full', component: LandingComponent},
    {path: 'product/:id', component: ProductComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
