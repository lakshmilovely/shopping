import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPriceDetailsComponent } from './add-price-details/add-price-details.component';
import { EditPriceDetailsComponent } from './edit-price-details/edit-price-details.component';
import { PriceDetailsComponent } from './price-details.component';
import { ViewPriceDetailsComponent } from './view-price-details/view-price-details.component';

const routes: Routes = [{ path: '', component: PriceDetailsComponent },
                        { path: 'add-price', component: AddPriceDetailsComponent },
                        { path: 'edit-price/:id', component: EditPriceDetailsComponent },
                        { path: 'view-price', component: ViewPriceDetailsComponent }




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PriceDetailsRoutingModule { }
