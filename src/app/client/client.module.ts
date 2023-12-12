import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { CommandeComponent } from './components/commande/commande.component';
import { CommandeService } from './services/commande.service';


const routes: Routes = [
  { path: 'creation-commande', component: MenuComponent }
];


@NgModule({
  declarations: [
   
      MenuComponent,
      CommandeComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,FormsModule,RouterModule.forChild(routes)
  ],
  providers: [CommandeService]
})
export class ClientModule { }
