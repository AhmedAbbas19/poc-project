import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../common/shared.module';
import { GalleryComponent } from '../common/components/gallery/gallery.component';
import { NgxTranslateModule } from '../common/ngxTranslate.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [DashboardComponent, GalleryComponent],
  imports: [
  SharedModule,
    DashboardRoutingModule,
    NgxTranslateModule,
    HttpClientModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
    },
    isolate: true
  })
  ]
})
export class DashboardModule { }
