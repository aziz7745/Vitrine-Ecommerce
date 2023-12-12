import { Component } from '@angular/core';
import { ProduitService } from 'src/app/admin/services/produit.service';
import { Produit } from 'src/app/client/modele/produit';

@Component({
  selector: 'app-listproduit',
  templateUrl: './listproduit.component.html',
  styleUrls: ['./listproduit.component.css']
})
export class ListproduitComponent 
{

  listproduit:Produit[]=[];

  constructor(public ServiceProduit:ProduitService)
  {}


  ngOnInit() 
  {
    this.ServiceProduit.getProduits().subscribe(
      (data) => {
        // Handle the data here
        this.listproduit= data;
        
      },
      (error) => {
        console.error(error);
      }
    );
  }

  delete(prod:Produit)
  {
    this.ServiceProduit.Delete(prod).subscribe(
      (Response)=>{
        this.ngOnInit();
      },
      (error)=>{console.error(error);
      }
      );

    
  }

}
