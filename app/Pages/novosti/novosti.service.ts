import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CardModel } from '../../Interfaces/card-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NovostiService {

  api = `${environment.apiUrl}News`;

  constructor(private http : HttpClient) { }

  getAllNews(pageIndex: number, size: number) : Observable<CardModel[]>{
    return this.http.get<CardModel[]>(`${this.api}/GetAll?pageIndex=${pageIndex}&size=${size}`);
  }
}
