import { Injectable } from '@angular/core';
import {SoundResultVO} from './soundResultVO';

// In  Angular 6 / Rxjs 6 the import is like below
// import { Observable, of } from 'rxjs';

// but in Angular 5.2.x and Rxjs 5x is:
import { Observable } from 'rxjs';
import { of } from 'rxjs';

// import {GlobalEmittersArrayService} from '@colabo-puzzles/puzzles_core/code/puzzles/globalEmitterServicesArray';
// import { RimaAAAService } from '@colabo-rima/rima_aaa/rima-aaa.service';

// import { environment } from '../../environments/environment';

//this consts are defined by INSTALL.MD data:
// const MAP_ID = "5b8a5260f8b8e40f3f250f9d"; //TEF
//const MAP_ID = "5b49e7f736390f03580ac9a7"; //Forum Vlasina

@Injectable()
export class SearchSoundsService {

  sounds:any = {};//Observer

  soundsMockup:SoundResultVO[] =
  [
    new SoundResultVO("Freesound:131392", "https://freesound.org/people/ecfike/sounds/131392/", "I Love Calculus.wav",
    "ecfike", "CC0", "https://freesound.org/data/previews/131/131392_2337290-hq.ogg", 'https://freesound.org/data/displays/131/131392_2337290_wave_L.png'),
    new SoundResultVO("Freesound:131392", "https://freesound.org/people/ecfike/sounds/131392/", "I Love Calculus.wav",
    "ecfike", "CC0", "https://freesound.org/data/previews/131/131392_2337290-hq.ogg", 'https://freesound.org/data/displays/131/131392_2337290_wave_L.png'),
    new SoundResultVO("Freesound:131392", "https://freesound.org/people/ecfike/sounds/131392/", "I Love Calculus.wav",
    "ecfike", "CC0", "https://freesound.org/data/previews/131/131392_2337290-hq.ogg"),
    new SoundResultVO("Freesound:131392", "https://freesound.org/people/ecfike/sounds/131392/", "I Love Calculus.wav",
    "ecfike", "CC0", "https://freesound.org/data/previews/131/131392_2337290-hq.ogg"),
    new SoundResultVO("Freesound:131392", "https://freesound.org/people/ecfike/sounds/131392/", "I Love Calculus.wav",
    "ecfike", "CC0", "https://freesound.org/data/previews/131/131392_2337290-hq.ogg"),
    new SoundResultVO("Freesound:131392", "https://freesound.org/people/ecfike/sounds/131392/", "I Love Calculus.wav",
    "ecfike", "CC0", "https://freesound.org/data/previews/131/131392_2337290-hq.ogg"),
    new SoundResultVO("Freesound:131392", "https://freesound.org/people/ecfike/sounds/131392/", "I Love Calculus.wav",
    "ecfike", "CC0", "https://freesound.org/data/previews/131/131392_2337290-hq.ogg"),
    new SoundResultVO("Freesound:131392", "https://freesound.org/people/ecfike/sounds/131392/", "I Love Calculus.wav",
    "ecfike", "CC0", "https://freesound.org/data/previews/131/131392_2337290-hq.ogg")
  ];

  constructor(
    // private colabowareRFIDService: ColabowareRFIDService,
    // private rimaAAAService: RimaAAAService
  ) {
    //getting data for the user:
    //this.globalEmitterServicesArray.get(this.colabowareIDProvided).subscribe('UsersProfilingComponent.user', this.coLaboWareProvidedData.bind(this));
    this.init();
  }

  init():void{
    console.log('SearchSoundsService.init');
  }

  //loadSDGs():void{
  getSounds():Observable<any[]>{
    //return of(this.SDGsMockup);
    return of(this.soundsMockup);
       //.subscribe(nodes => this.sdgsReceived(nodes)); //as KNode}
  }
}
