import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivilageRoutingModule } from './privilage-routing.module';
import { PrivilageComponent } from './privilage.component';
import { AddprvgComponent } from './addprvg/addprvg.component';
import { ViewprvgComponent } from './viewprvg/viewprvg.component';
import { EditprvgComponent } from './editprvg/editprvg.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { SortDirective } from './sort.directive';



@NgModule({
  declarations: [
    PrivilageComponent,
    AddprvgComponent,
    ViewprvgComponent,
    EditprvgComponent,
    SearchPipe,
    SortDirective,


  ],
  imports: [
    CommonModule,
    PrivilageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
   

  ]
})
export class PrivilageModule { }
