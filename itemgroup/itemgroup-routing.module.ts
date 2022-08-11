import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddgroupComponent } from './addgroup/addgroup.component';
import { EditgroupComponent } from './editgroup/editgroup.component';
import { ItemgroupComponent } from './itemgroup.component';
import { ViewgroupComponent } from './viewgroup/viewgroup.component';

const routes: Routes = [{ path: '', component: ItemgroupComponent },
                        { path:'addgroup',component:AddgroupComponent},
                        { path:'viewgroup',component:ViewgroupComponent},
                        { path:'editgroup/:id',component:EditgroupComponent}        ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemgroupRoutingModule { }
