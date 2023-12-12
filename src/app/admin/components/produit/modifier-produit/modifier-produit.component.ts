import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from 'src/app/admin/services/produit.service';

@Component({
  selector: 'app-modifier-produit',
  templateUrl: './modifier-produit.component.html',
  styleUrls: ['./modifier-produit.component.css']
})
export class ModifierProduitComponent 
{
  produitId: any;
  produitData: any;
  constructor(private route:ActivatedRoute,private serviceproduit:ProduitService) 
  { 
     
   
  }
  ngOnInit() 
  {
    const id = this.route.snapshot.paramMap.get('id');
    this.produitId=id;
    this.serviceproduit.getbyid(this.produitId).subscribe(
      data=>{this.produitData=data;},
      error=>{console.log("produit not found")}
      );
  }

  Updateprod({value,valid} : NgForm)
  {

    this.produitData.categorie=value.categorie;
    this.produitData.nom=value.nom;
    this.produitData.prix=value.prix;
    this.produitData.qte=value.qte;
    this.produitData.matricule=value.mat;
    this.serviceproduit.Updateproduit(this.produitData).subscribe(
      data=>{console.log("modification est bien effectuéé");
    this.ngOnInit()},
      error=>{console.log("probléme lors de  modification")}
    )
      
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

}
