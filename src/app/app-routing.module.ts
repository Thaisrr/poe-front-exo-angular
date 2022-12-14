import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {NotfoundComponent} from "./pages/notfound/notfound.component";
import {FormKebabComponent} from "./pages/form-kebab/form-kebab.component";
import {DashboardKebabComponent} from "./pages/dashboard-kebab/dashboard-kebab.component";
import {OrderComponent} from "./pages/order/order.component";
import {PanierComponent} from "./pages/panier/panier.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'create', component: FormKebabComponent},
  {path: 'dashboard', component: DashboardKebabComponent},
  {path: 'order/:id', component: OrderComponent},
  {path: 'panier', component: PanierComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
