import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleRoutingModule } from './role-routing.module';
import { RoleComponent } from './role.component';
import { AddroleComponent } from './addrole/addrole.component';

import { ViewroleComponent } from './viewrole/viewrole.component';
import { EditroleComponent } from './editrole/editrole.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { SortDirective } from './sort.directive'
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [
    RoleComponent,
    AddroleComponent,

    ViewroleComponent,
    EditroleComponent,
    SearchPipe,
    SortDirective
  ],
  imports: [
    CommonModule,
    RoleRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule

  
  ]
})
export class RoleModule { }
