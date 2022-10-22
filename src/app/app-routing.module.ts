import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/landing'},
    {path: 'landing', loadChildren: (): any => import('./pages/landing/landing.module').then((m) => m.LandingModule)},
    {
        path: 'product',
        loadChildren: (): any => import('./pages/product/product.module').then((m) => m.ProductModule),
    },
    {path: '**', redirectTo: '/landing'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
