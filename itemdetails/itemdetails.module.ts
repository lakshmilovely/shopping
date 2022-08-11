import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemdetailsRoutingModule } from './itemdetails-routing.module';
import { ItemdetailsComponent } from './itemdetails.component';
import { AdddetailComponent } from './adddetail/adddetail.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import { EditdetailsComponent } from './editdetails/editdetails.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { SortDirective } from './sort.directive';

@NgModule({
  declarations: [
    ItemdetailsComponent,
    AdddetailComponent,
    ViewdetailsComponent,
    EditdetailsComponent,
    SearchPipe,
    SortDirective
  ],
  imports: [
    CommonModule,
    ItemdetailsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ItemdetailsModule { }
