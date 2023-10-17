import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieDBService {
  private apiKey = '9778527f1e83835b42c4effb5b481c52';
  private apiUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  getTrending() {
    const url = `${this.apiUrl}/trending/all/week?api_key=${this.apiKey}`;
    return this.http.get(url);
  }

  getMovies() {
    const url = `${this.apiUrl}/movie/popular?api_key=${this.apiKey}`;
    return this.http.get(url);
  }

  getSeries() {
    const url = `${this.apiUrl}/tv/popular?api_key=${this.apiKey}`;
    return this.http.get(url);
  }
}
