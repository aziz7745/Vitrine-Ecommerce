import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AdminModule } from './admin/admin.module';
import { ClientModule } from './client/client.module';
import { UsersService } from './services/users.service';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) }
];

@NgModule({
 
  declarations: [
    AppComponent,UserComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes),
    HttpClientModule,FormsModule,ClientModule,AdminModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
