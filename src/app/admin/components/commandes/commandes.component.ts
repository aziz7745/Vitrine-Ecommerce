import { Component } from '@angular/core';
import { Produit } from 'src/app/client/modele/produit';
import { ProduitService } from '../../services/produit.service';
import { Commande } from 'src/app/client/modele/commande';
import { CommandeService } from 'src/app/client/services/commande.service';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent 
{
  pro:Produit=new Produit();
  disable=false;

  commande: Commande[] = [];

  constructor(private serviceproduit:ProduitService,private servicecommande:CommandeService) { this.pro=new Produit()}

  ngOnInit(): void {
    this.getcommandeList();
  }


  Delete(com:Commande)
  {
    this.servicecommande.Delete(com).subscribe(
      response => {
        console.error("la suppression est bien effectueé");
        this.ngOnInit();
      },
      error => {
        console.error(error);
      }
    );
  }

  getcommandeList()
  {

    this.servicecommande.getCommandeList().subscribe(
      response=>{this.commande=response},
      error=>{console.log("ereur existe")}
      );
    
  }

  setChangeStatut(cmd:Commande)
  {
   
      this.disable=true;
      cmd.Statut=true;
      this.servicecommande.SetStatu(cmd).subscribe(
        response => {
          console.log('Statut modifier avec succès !', response);
        },
        error => {
          console.error('Erreur lors de la modification de statut :', error);
        }
      );

//get produit de la commande par id
this.serviceproduit.getbyid(cmd.idprod).subscribe(
  response => { 

   //diminuer la quantité de stock
   response.qte=response.qte-cmd.qte;
   this.serviceproduit.Updateproduit(response).subscribe(
     response => {
       console.log('Quantité Produit modifier avec succès !', response);
     },
     error => {
       console.error('Erreur lors de la modification de quantité :', error);
     }
   );
   
  },
  error => {
    console.log("ereur existe");
    
  }
);


  }
}
  
