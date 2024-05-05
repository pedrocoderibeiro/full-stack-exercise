import { Injectable } from '@angular/core';
import { environment } from '../../../enviroments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GridResponse } from '../../models/grid.model';

@Injectable({
  providedIn: 'root',
})
export class GridService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getGrid(letter?: string): Observable<GridResponse> {
    const url = letter
      ? `${this.apiUrl}/grid?letter=${letter.toLocaleLowerCase()}`
      : `${this.apiUrl}/grid`;
    return this.http.get<GridResponse>(url);
  }
}
