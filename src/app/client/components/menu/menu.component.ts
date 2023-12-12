import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../../services/commande.service';
import { Commande } from '../../modele/commande';
import { NgForm } from '@angular/forms';
import { ProduitService } from 'src/app/admin/services/produit.service';
import { Produit } from '../../modele/produit';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit 
{


  constructor (private commandeservice: CommandeService,private serviceproduit:ProduitService) { }
  ngOnInit()
   {
    this.listproduit=[];
    this.getallproduit();

  }
  listproduit:Produit[]=[];
  Commander(event:Commande)
  {
    //cree une reservation
    this.commandeservice.createcommande(event)
    .subscribe(
      response => {
        console.log('commande ajoutée avec succès !', response);
      },
      error => {
        console.error('Erreur lors de l\'ajout de la commande :', error);
      }
    );
  }


  getproduit({value,valid} : NgForm)
  {
    if(value.cat=="")
    {
      this.getallproduit();
    }
    else{
this.listproduit=[]
    this.serviceproduit.getProduits().subscribe(
      (data) => {
        for (const pro of data) 
        {
          
              if(pro.categorie==value.cat)
              {
                this.listproduit.push(pro)
              }

        }
      },
      (error) => {
        console.error(error);
      }
    );
  }
}

  getallproduit()
  {

    this.serviceproduit.getProduits().subscribe(
      (data) => {
        
        this.listproduit= data;
      },
      (error) => {
        console.error(error);
      }
    );
  }


}
