import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Produit } from '../../modele/produit';
import { Commande } from '../../modele/commande';
import { ProduitService } from 'src/app/admin/services/produit.service';


@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent 
{

  
  reserveOn = true;
   @Output() commonder = new EventEmitter<Commande>();
   @Input() listproduit:Produit[]=[]
  commandeData: Commande = new Commande();

 
  idprod!:string;
  nompro!:string;

  constructor (private serviceproduit:ProduitService) { }

  ngOnInit(): void 
  {
    
   
    
  }





  Commander({value,valid} : NgForm)
  {
    this.commandeData.idprod=this.idprod;

    this.commandeData.propretaire=value.nompre;
    this.commandeData.NumTel=value.numtel;
    this.commandeData.Adresse=value.adresse;
    this.commandeData.qte=value.qte;
    this.commandeData.nompro=this.nompro;
    


    //cree une reservation
   this.sendCommandeToParent();
  }


  public sendCommandeToParent() {
    this.commonder.emit(this.commandeData);
}

setIdProduit(id:any,nompro:string)
  {
    
    this.idprod=id;
    this.nompro=nompro;
  }


}
