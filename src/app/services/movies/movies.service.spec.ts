import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseData } from './movies.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private baseUrl: string = 'https://api.themoviedb.org/3';

  private apiKey: string =
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Nzc4NTI3ZjFlODM4MzViNDJjNGVmZmI1YjQ4MWM1MiIsInN1YiI6IjY1MmQ1OThmMzlhMWE2MDEwMDI5OWZjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dbYia4gDtP2c7xD4REO_NB7Cp0zaWi2uDpxCRfoQm1c'
  constructor(private _http: HttpClient) {}

  getAll(): Observable<ResponseData> {
    return this._http.get<ResponseData>(`${this.baseUrl}/trending/all/week`, {
      headers: { Authorization: this.apiKey },
      params: { language: 'es-ES' },
    });
  }

  getMovies(): Observable<ResponseData> {
    return this._http.get<ResponseData>(`${this.baseUrl}/trending/movie/week`, {
      headers: { Authorization: this.apiKey },
      params: { language: 'es-ES' },
    });
  }

  getSeries(): Observable<ResponseData> {
    return this._http.get<ResponseData>(`${this.baseUrl}/trending/tv/week`, {
      headers: { Authorization: this.apiKey },
      params: { language: 'es-ES' },
    });
  }
}