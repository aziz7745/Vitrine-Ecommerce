import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Commande } from '../modele/commande';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  
  // construteur
  constructor(private http: HttpClient) { }
  // declaration de la route de connexion
  private apiUrl = 'http://localhost:3000';

  // Récupérer la liste des commandes
  getCommandeList(): Observable<Commande[]> {
    return this.http.get<Commande[]>(this.apiUrl + '/commandes');
  }

  // Créer une nouvelle commandes
  createcommande(commandeData: any): Observable<any> 
  {
    const createUrl = this.apiUrl + '/commandes'; 
    return this.http.post(createUrl, commandeData);
  }

  Delete(com: Commande ): Observable<Commande> 
  {
    const deleteUrl = `${this.apiUrl}/commandes/${com.id}`; 
    return this.http.delete<Commande>(deleteUrl);

}

SetStatu(com:Commande): Observable<any> 
{
  
  const updateUrl = `${this.apiUrl}/commandes/${com.id}`; 
    return this.http.put(updateUrl, com);
}
}
