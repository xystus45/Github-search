import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routing/routing.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from './profile-request/profile.service.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { PageErrorComponent } from './page-error/page-error.component';
import { UpperCasePipe } from './upper-case.pipe';
import { TextColorChangeDirective } from './text-color-change.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    AboutComponent,
    PageErrorComponent,
    UpperCasePipe,
    TextColorChangeDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RoutingModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }