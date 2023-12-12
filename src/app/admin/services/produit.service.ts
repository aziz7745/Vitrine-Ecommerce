import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from 'src/app/client/modele/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

   // declaration de la route de connexion
   private apiUrl = 'http://localhost:3000';
   // construteur
   constructor(private http: HttpClient) { }
 
 
    // Créer une nouvelle voiture
 createproduit(produitData: Produit): Observable<any> 
 { 
     const createUrl = this.apiUrl + '/prod'; 
     return this.http.post(createUrl, produitData);
 }
 
 Delete(prod: Produit ): Observable<Produit> 
 {
   const deleteUrl = `${this.apiUrl}/prod/${prod.id}`; 
   return this.http.delete<Produit>(deleteUrl);
 
 }
 
   // Récupérer la liste des produits
   getProduits(): Observable<Produit[]>
   {
    return this.http.get<Produit[]>(this.apiUrl+'/prod');
   }
 
 SetStatu(prod:Produit): Observable<any> 
 {
   
   const updateUrl = `${this.apiUrl}/prod/${prod.id}`; 
     return this.http.put(updateUrl, prod);
 }
 
 Updateproduit(prod:Produit): Observable<any> 
 {
   
   const updateUrl = `${this.apiUrl}/prod/${prod.id}`; 
     return this.http.put(updateUrl, prod);
 }
 
 
 getbyid(id:any):Observable<Produit>
 {
   const updateUrl = `${this.apiUrl}/prod/${id}`; 
   return this.http.get<Produit>(updateUrl);
 }
 
}
