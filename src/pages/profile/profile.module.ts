import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ProfilesPage } from './profile';

@NgModule({
  declarations: [
    ProfilesPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfilesPage),
    TranslateModule.forChild()
  ],
  exports: [
    ProfilesPage
  ]
})
export class ProfilesPageModule { }
