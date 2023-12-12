import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CommandesComponent } from './components/commandes/commandes.component';
import { ProduitComponent } from './components/produit/produit.component';
import { CreationProduitComponent } from './components/produit/creation-produit/creation-produit.component';
import { ListproduitComponent } from './components/produit/listproduit/listproduit.component';
import { ModifierProduitComponent } from './components/produit/modifier-produit/modifier-produit.component';
import { CommandeService } from '../client/services/commande.service';
import { ProduitService } from './services/produit.service';


const routes: Routes = [
  { path: 'produit', component: ProduitComponent,
  children :[
    { path: '', component: ListproduitComponent},
    { path: 'ajouter-produit', component:  CreationProduitComponent },
    { path: 'modifier-produit/:id', component: ModifierProduitComponent },
  
    { path: 'commandes', component: CommandesComponent }
    
    
  ]}
 
  
];



@NgModule({
  declarations: [
   

    CommandesComponent,
    ProduitComponent,
    CreationProduitComponent,
    ListproduitComponent,
    ModifierProduitComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,FormsModule,RouterModule.forChild(routes)
  ],
  providers: [ProduitService,CommandeService]
})
export class AdminModule { }
