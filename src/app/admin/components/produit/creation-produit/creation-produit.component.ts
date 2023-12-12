import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProduitService } from 'src/app/admin/services/produit.service';
import { Produit } from 'src/app/client/modele/produit';

@Component({
  selector: 'app-creation-produit',
  templateUrl: './creation-produit.component.html',
  styleUrls: ['./creation-produit.component.css']
})
export class CreationProduitComponent {

  produitData: Produit= new Produit();
  constructor(private produitService: ProduitService) { }

  ngOnInit()
  {
    

  }
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.produitData.image = e.target?.result;
      };
      reader.readAsDataURL(file);
      
    }
  }

  AddPro({value,valid} : NgForm)
  {

    this.produitData.categorie=value.categorie;
    this.produitData.nom=value.nom;
    this.produitData.prix=value.prix;
    this.produitData.qte=value.qte;
    this.produitData.matricule=value.mat;
    this.produitService.createproduit(this.produitData)
    .subscribe(
      response => {
        console.log('Produit ajoutée avec succès !');
        window.location.reload();

  
      },
      error => {
        console.error('Erreur lors de l\'ajout de produit :', error);
      }
      
    );
    
  

  }

}
