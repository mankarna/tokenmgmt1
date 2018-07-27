import { Injectable } from '@angular/core';
import {Token} from './model/token';
import {Headers, Http} from '@angular/http';

@Injectable()
export class TokenService {


  private tokenUrl = 'token';  // URL to web API
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  // Get all customers
  getTokens(): Promise<Token[]> {
    return this.http.get(this.tokenUrl)
      .toPromise()
      .then(response => response.json() as Token[])
      .catch(this.handleError);
  }

 getBySrlnoStart(lastName: string): Promise<Token[]> {
    const url = `findbySrlnoStart/{srlnoStart}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Token)
      .catch(this.handleError);
  }

  create(token: Token): Promise<Token> {
    return this.http
      .post('posttoken', JSON.stringify(token), {headers : this.headers})
      .toPromise()
      .then(res => res.json() as Token)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.tokenUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
