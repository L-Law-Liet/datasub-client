import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private CURRENCIES_API = environment.api + '/currencies'

  constructor(private http: HttpClient) { }

  getCurrencies(): Observable<any> {
    return this.http.get(this.CURRENCIES_API)
  }
}
