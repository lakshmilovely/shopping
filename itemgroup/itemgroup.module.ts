import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemgroupRoutingModule } from './itemgroup-routing.module';
import { ItemgroupComponent } from './itemgroup.component';
import { AddgroupComponent } from './addgroup/addgroup.component';
import { ViewgroupComponent } from './viewgroup/viewgroup.component';
import { EditgroupComponent } from './editgroup/editgroup.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { SortDirective } from './sort.directive';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    ItemgroupComponent,
    AddgroupComponent,
    ViewgroupComponent,
    EditgroupComponent,
    SortDirective,
    SearchPipe
  ],
  imports: [
    CommonModule,
    ItemgroupRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ItemgroupModule { }
