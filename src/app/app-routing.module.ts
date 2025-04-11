import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { CampaignManagerComponent } from './test/campaign-manager/campaign-manager.component';

const routes: Routes = [
  {path:'', component: MyProfileComponent},
  {path:'go-live', component: CampaignManagerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
