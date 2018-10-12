import { Injectable } from '@angular/core';
import {SoundResultVO} from './soundResultVO';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

// In  Angular 6 / Rxjs 6 the import is like below
// import { Observable, of } from 'rxjs';

// but in Angular 5.2.x and Rxjs 5x is:
import { Observable } from 'rxjs';
import { of } from 'rxjs';

// interface IConstructor<T> {
//   new(...args: any[]): T;
//   factory(obj: any): T;
// }

// import {GlobalEmittersArrayService} from '@colabo-puzzles/puzzles_core/code/puzzles/globalEmitterServicesArray';
// import { RimaAAAService } from '@colabo-rima/f-aaa/rima-aaa.service';

// import { environment } from '../../environments/environment';

//this consts are defined by INSTALL.MD data:
// const MAP_ID = "5b8a5260f8b8e40f3f250f9d"; //TEF
//const MAP_ID = "5b49e7f736390f03580ac9a7"; //Forum Vlasina

@Injectable()
export class SearchSoundsService {

  apiUrl:string;
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
    private http: HttpClient
    // private colabowareRFIDService: ColabowareRFIDService,
    // private rimaAAAService: RimaAAAService
  ) {
    //getting data for the user:
    //this.globalEmitterServicesArray.get(this.colabowareIDProvided).subscribe('UsersProfilingComponent.user', this.coLaboWareProvidedData.bind(this));
    this.init();
  }

  init():void{
    console.log('SearchSoundsService.init');
    this.apiUrl = "http://127.0.0.1:8005";
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  protected handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      window.alert('error: ' + error);

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getSounds(searchQuery: string, callback: Function= null): Observable<any[]>{
    return this.loadSounds(searchQuery, callback);
  }

  loadSounds(searchQuery:string, callback:Function=null):Observable<any[]>{
    let result:Observable<any[]> 
    = this.http.get<any>(this.apiUrl+'/search-sounds/'+searchQuery+'.json')
      .pipe(
        map(soundsFromServer => this.processVOs(soundsFromServer)),
        // map(soundsFromServer => CFService.processVOs(nodesFromServer, KNode)),
        catchError(this.handleError('SearchSoundsService::loadSounds', null))
      );

    result.subscribe(sounds => {
      console.log("[SearchSoundsService::loadSounds] sounds: ", sounds);
    })

    if(callback){result.subscribe(sounds => callback(sounds));}
    return result;
    // return of(this.soundsMockup);
       //.subscribe(nodes => this.sdgsReceived(nodes)); //as KNode}
  }

  processVOs(result: any): SoundResultVO[]{
    let sounds:SoundResultVO[] = [  ];
    let soundsResultProviders = result.data.contents;
    for (let providerName in soundsResultProviders){
      let providerSounds = soundsResultProviders[providerName].results;
      for (let soundId: number = 0; soundId < providerSounds.length; soundId++){
        let sound = providerSounds[soundId];
        // "ac:preview_url": "https://freesound.org/data/previews/131/131392_2337290-hq.ogg"
        // -> https://freesound.org/data/displays/131/131392_2337290_wave_L.png

        // https://freesound.org/data/previews/131/131395_2337290-hq.ogg
        // -> https://freesound.org/data/displays/131/131395_2337290_wave_L.png
        let previewParts = /^(.*)previews([\/\d\_]+)/.exec(sound['ac:preview_url']);
        let spectrogram: string = null;
        if (previewParts && previewParts.length >= 3){
          spectrogram = previewParts[1] + 'displays' + previewParts[2] + '_wave_L.png';
        }


        let soundVo: SoundResultVO = new SoundResultVO(
          sound['ac:id'],
          sound['ac:url'],
          providerName,
          sound['ac:name'],
          sound['ac:author'],
          sound['ac:license'],
          sound['ac:preview_url'],
          spectrogram
        );
        sounds.push(soundVo);
      }
    }
    return sounds;
  }
  // processVOs<T>(voS:any, typeT:IConstructor<T>):Array<T>{
  //   //console.log("processVOs");
  //   let vos:Array<T> = voS.data as Array<T>;
  //   for(let id=0; id<vos.length; id++){
  //     //TODO: will not be needed when/if we get rid of ServerData wrapping needed now, because the response from server will be typed to VO unlike in previous versions
  //     let vo:T = typeT.factory(vos[id]);
  //     vo.state = VO.STATE_SYNCED;
  //     //console.log(vo);
  //     vos[id] = vo;
  //   }
  //   return vos;
  // }
}

