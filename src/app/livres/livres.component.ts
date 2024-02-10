// livres.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html',
  styleUrls: ['./livres.component.css']
})
export class LivresComponent implements OnInit {
  livres: any[] = []; // Initialisez livres comme un tableau vide

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('http://127.0.0.1:8000/livres').subscribe(
      (data) => {
        this.livres = data;
      },
      (error) => {
        console.error('Une erreur est survenue:', error);
      }
    );
  }
}
