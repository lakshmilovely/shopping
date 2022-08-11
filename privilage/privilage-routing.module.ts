import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddprvgComponent } from './addprvg/addprvg.component';
import { EditprvgComponent } from './editprvg/editprvg.component';
import { PrivilageComponent } from './privilage.component';
import { ViewprvgComponent } from './viewprvg/viewprvg.component';

const routes: Routes = [{ path: '', component: PrivilageComponent },
                        { path:'add',component:AddprvgComponent},
                        { path:'view',component:ViewprvgComponent},
                        { path:'edit/:id',component:EditprvgComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class PrivilageRoutingModule { }
