import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { PageErrorComponent } from './page-error/page-error.component';
import { ProfileComponent } from './profile/profile.component';
import { UpperCasePipe } from './upper-case.pipe';
import { TextColorChangeDirective } from '../text-color-change.directive';
import { ProfileRequestComponent } from './profile-request/profile-request.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PageErrorComponent,
    ProfileComponent,
    UpperCasePipe,
    TextColorChangeDirective,
    ProfileRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
