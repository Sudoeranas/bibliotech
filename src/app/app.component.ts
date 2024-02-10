import { Component, OnInit } from '@angular/core';
import { LivreService } from './livre.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  livres: any[] = [];

  constructor(private livreService: LivreService) {}

  ngOnInit() {
    this.getLivres();
  }

  getLivres() {
    this.livreService.getLivres().subscribe(
      (data: any[]) => {
        this.livres = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
