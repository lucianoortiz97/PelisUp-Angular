import { Component, OnInit } from '@angular/core';
import { MovieDBService } from '../../movide-db.service'; 

interface movies_series {
  name: string;
  urlImg: string;
  point: number;
  description: string;
  category: string;
}

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  trendingData: any;
  selectedCategory: string = 'Todos'; 

  constructor(private movieDBService: MovieDBService) {}

  ngOnInit() {
    this.loadData();
  }

  setSelectedCategory(category: string) {
    this.selectedCategory = category;
    this.loadData(); /*/ Actualiza los datos cuando cambia la categoría /*/
  }

  loadData() {
    if (this.selectedCategory === 'Todos') {
      this.movieDBService.getTrending().subscribe((data: any) => {
        this.trendingData = data.results;
      });
    } else if (this.selectedCategory === 'peliculas') {
      this.movieDBService.getMovies().subscribe((data: any) => {
        this.trendingData = data.results;
      });
    } else if (this.selectedCategory === 'series') {
      this.movieDBService.getSeries().subscribe((data: any) => {
        this.trendingData = data.results;
      });
    }
  }
}
