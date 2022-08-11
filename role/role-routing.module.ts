import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddroleComponent } from './addrole/addrole.component';
import { EditroleComponent } from './editrole/editrole.component';

import { RoleComponent } from './role.component';
import { ViewroleComponent } from './viewrole/viewrole.component';

const routes: Routes = [{ path: '', component: RoleComponent },
                        { path: 'addrole', component: AddroleComponent },
                        { path: 'editrole/:id', component: EditroleComponent },
                        { path: 'viewrole', component: ViewroleComponent },
                        ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleRoutingModule { }
