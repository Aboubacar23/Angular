import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personne } from '../interface/personne';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class PersonneService {


  //creer une variable url

 url = "http://localhost:5000/personnes";

 currentPersonne : Personne = {
   nom:"",
   prenom:"",
   age:null,
   poids: null,
   taille: null,
   profil: ""
 }
  constructor(private http: HttpClient) { }

  // la méthode ajouter une personne du service
  addPersonnes(personne: Personne): Observable<Personne>{
    return this.http.post<Personne>(this.url, personne);
  }

  // la méthode get une personne du service
  getAll(){
    return this.http.get(this.url);
  }

  // la méthode supprimer une personne du service
  delete(id): Observable<Personne>{
    return this.http.delete<Personne>("http://localhost:5000/personnes/"+id);
  }

  // la méthode update une personne du service
  
   Updated(id,personne):Observable<Personne> {
    return this.http.put<Personne>("http://localhost:5000/personnes/"+id, personne, headerOption)
 }
   

   getCurrentDate(id) :Observable<Personne>{
    return this.http.get<Personne>("http://localhost:5000/personnes/"+id);
   }
}
