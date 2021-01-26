import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../common/shared.module';
import { GalleryComponent } from '../common/components/gallery/gallery.component';


@NgModule({
  declarations: [DashboardComponent, GalleryComponent],
  imports: [
    SharedModule,
    DashboardRoutingModule,
  ]
})
export class DashboardModule { }
