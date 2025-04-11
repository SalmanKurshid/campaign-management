import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { HeaderComponent } from './common/header/header.component';
import { IntroComponent } from './intro/intro.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './common/footer/footer.component';
import { CampaignManagerComponent } from './test/campaign-manager/campaign-manager.component';
import { CampaignSetupComponent } from './test/campaign-setup/campaign-setup.component';
import { CreativeSpecificationsComponent } from './test/creative-specifications/creative-specifications.component';
import { ContextualTriggersComponent } from './test/contextual-triggers/contextual-triggers.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MyProfileComponent,
    HeaderComponent,
    IntroComponent,
    FooterComponent,
    CampaignManagerComponent,
    CampaignSetupComponent,
    CreativeSpecificationsComponent,
    ContextualTriggersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
