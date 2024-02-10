// utilisateurs.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateursComponent implements OnInit {
  utilisateurs: any[] = []; // Initialisez utilisateurs comme un tableau vide

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('http://127.0.0.1:8000/utilisateurs').subscribe(
      (data) => {
        this.utilisateurs = data;
      },
      (error) => {
        console.error('Une erreur est survenue:', error);
      }
    );
  }
}
