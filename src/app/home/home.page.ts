import { Component } from '@angular/core';
import { ApiService } from '../services/api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  characteres: any =[];
  episodes: any =[];
  slideOpts = {
    slidesPerView: 2,
    initialSlide: 1,
    speed: 100,
    autoplay: true,
    spaceBetween:5,
    loop: true,
  };
  constructor(private apiService: ApiService) {
    this.getAllCharateres();
    this.getAllEpisodes();
  }

  getAllCharateres(){
    this.apiService.getCharacteres().subscribe((response:any) => {
      this.characteres = response.results;
    });
  }

  getAllEpisodes(){
    this.apiService.getEpisodes().subscribe((response: any) => {
      this.episodes = response.results;

    });
  }

}
