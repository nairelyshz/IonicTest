import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getCharacteres(){
    try{
      return this.http.get(environment.apiService + "character");
    } catch(error){
      console.log("Error! " + error);
    }
  }

  getEpisodes(){
    try {
      return this.http.get(environment.apiService + "episode");
    } catch(error) {
      console.log("Error! " + error);
    }
  }
}
