// livre.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivreService {
  constructor(private http: HttpClient) {}

  // Implémentez les méthodes pour récupérer les livres depuis votre API backend
  getLivres(): Observable<any[]> {
    return this.http.get<any[]>('http://127.0.0.1:8000/livres'); // Remplacez URL_DE_VOTRE_API par l'URL réelle de votre API pour récupérer les livres
  }
}
