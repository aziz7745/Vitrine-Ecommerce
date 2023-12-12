export class Produit 
{
  
        matricule?: string;
        id?: string;
        nom: string;
        categorie:string;
        prix: number;
        image: any;
        statut: string;
        qte!:number;
      
        constructor(){
          this.nom ='';
          this.categorie ='';
          this.prix = 0;
          this.qte=0;
          this.statut = "false";
        }
}
