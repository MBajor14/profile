import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { ProfileListComponent } from './components/profile-list/profile-list.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AttributeFieldComponent } from './components/attribute-field/attribute-field.component';
// import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProfileComponent,
    ProfileCardComponent,
    ProfileListComponent,
    HomeComponent,
    AttributeFieldComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { 
        path: '', 
        component: HomeComponent 
      },
      { 
        path: 'profiles/:id',
        component: ProfileComponent
      },
      { 
        path: 'profiles',
        component: ProfileListComponent
      },
      // { 
      //   path: '**', 
      //   component: NotFoundComponent 
      // }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
