import { Component, OnInit, Input } from '@angular/core';
import {SoundResultVO} from './soundResultVO';

@Component({
  selector: 'app-sound-result',
  templateUrl: './sound-result.component.html',
  styleUrls: ['./sound-result.component.css']
})
export class SoundResultComponent implements OnInit {

  @Input() sound: SoundResultVO;
  constructor() { }

  ngOnInit() {
    console.log('sound:',this.sound);
  }

}
