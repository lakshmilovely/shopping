import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPriceDetailsComponent } from '../price-details/add-price-details/add-price-details.component';
import { AdddetailComponent } from './adddetail/adddetail.component';
import { EditdetailsComponent } from './editdetails/editdetails.component';
import { ItemdetailsComponent } from './itemdetails.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';

const routes: Routes = [{ path: '', component: ItemdetailsComponent },
                       { path:'additem',component: AdddetailComponent },
                       { path:'viewitem',component: ViewdetailsComponent },
                       { path:'edit/:id',component:EditdetailsComponent},
                       { path:'add-price/:id/:desc',component:AddPriceDetailsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemdetailsRoutingModule { }
