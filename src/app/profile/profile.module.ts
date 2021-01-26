import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '../common/shared.module';
import { MaterialModule } from './../common/material.module';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    SharedModule,
    MaterialModule,
    ProfileRoutingModule
  ],
})
export class ProfileModule { }
