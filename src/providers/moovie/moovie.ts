import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoovieProvider {
private baseApiPatch = "https://api.themoviedb.org/3";
private apiKey = "?api_key=f059c6b79171129b2edf08de718f2a60";
  constructor(public http: Http) {
    console.log('Hello MoovieProvider Provider');
  }

  getLastasMovies(){
   return this.http.get(this.baseApiPatch+"/movie/popular"+this.apiKey);
  }
}
