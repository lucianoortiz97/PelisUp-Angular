import { Component } from '@angular/core';



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
export class CardsComponent {

  arrayInfoCards: movies_series[] = [
    {
      name: 'Shang Chi',
      urlImg: '../../assets/image/cartelera/Shang-Chi.jpeg',
      point: 7.9,
      description: '',
      category: 'peliculas'
    },
    {
      name: 'Black Widow',
      urlImg: '../../assets/image/cartelera/Black_Widow.jpg',
      point: 6.8,
      description: '',
      category: 'peliculas'
    },
    {
      name: 'Loki',
      urlImg: '../../assets/image/cartelera/Loki.jpg',
      point: 8.4,
      description: '',
      category: 'peliculas'
    },
    {
      name: 'How I Met Your Mother',
      urlImg: '../../assets/image/cartelera/How_I_Met_Your_Mother.jpg',
      point: 8.3,
      description: '',
      category: 'series'
    },
    {
      name: 'Money Heist',
      urlImg: '../../assets/image/cartelera/money_heist.png',
      point: 8.3,
      description: '',
      category: 'series'
    },
    {
      name: 'Friends',
      urlImg: '../../assets/image/cartelera/friends.jpg',
      point: 8.8,
      description: '',
      category: 'series'
    },
    {
      name: 'The Big Bang Theory',
      urlImg: '../../assets/image/cartelera/BigBangTheory.jpg',
      point: 8.1,
      description: '',
      category: 'series'
    },
    {
      name: 'Two And a Half Men',
      urlImg: '../../assets/image/cartelera/TwoAndMen.jpg',
      point: 7,
      description: '',
      category: 'series'
    }
  ];

  selectedCategory: string = 'todos';

  item: any; 

  setSelectedCategory(category: string) {
    this.selectedCategory = category;
  }
}
