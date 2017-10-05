import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { RouterModule, Routes } from '@angular/router'

// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PanelComponent } from './panel/panel.component';
import { EditPostsComponent } from './edit-posts/edit-posts.component';
import { NewPostComponent } from './new-post/new-post.component';
import { SettingsComponent } from './settings/settings.component';
import { SendToComponent } from './send-to/send-to.component';
import { RouterScreenComponent } from './router-screen/router-screen.component';
import { SwitchableComponent } from './switchable/switchable.component';
import { NewClientComponent } from './new-client/new-client.component';

export const firebaseConfig = {
  apiKey: "AIzaSyALt8qY3-yr5h_aeJuTvXKF2QqYds4fFe0",
  authDomain: "coacherapp-3011d.firebaseapp.com",
  databaseURL: "https://coacherapp-3011d.firebaseio.com",
  projectId: "coacherapp-3011d",
  storageBucket: "coacherapp-3011d.appspot.com",
  messagingSenderId: "859263399158"
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    PanelComponent,
    EditPostsComponent,
    NewPostComponent,
    SettingsComponent,
    SendToComponent,
    RouterScreenComponent,
    SwitchableComponent,
    NewClientComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot([
        {
          path: 'login',
          component: LoginComponent
        },
        {
          path: 'dashboard',
          component: DashboardComponent,
          children: [
            {
               path: 'edit',
               component: RouterScreenComponent
            },
            {
               path: 'create',
               component: RouterScreenComponent
            },
            {
               path: 'settings',
               component: SettingsComponent
            },
            {
               path: 'edit/client',
               component: EditPostsComponent
            },
            {
               path: 'edit/post',
               component: EditPostsComponent
            },
            {
               path: 'create/client',
               component: NewClientComponent
            },
            {
               path: 'create/post',
               component: NewPostComponent
            },
            {
               path: '**',
               redirectTo: 'edit',
            }
          ]
        },
        {
          path: '',
          redirectTo: 'login',
          pathMatch: 'prefix'
        },
        {
          path: '**',
          redirectTo: 'login'
        }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

