export class Commande 
{
    
  id!:string;
  idprod!:string;
  propretaire!:string;
  NumTel!:string;
  nompro!:string;
  Statut!:Boolean;
  Adresse!:string;
  qte!:number

  constructor() 
  {
    this.Statut=false;
  }
}
