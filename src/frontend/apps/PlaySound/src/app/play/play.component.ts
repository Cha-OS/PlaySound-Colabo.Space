import { MatDialog, MatDialogRef } from '@angular/material';
import {Dialog1Btn, Dialog2Btn, DialogData} from '../util/dialog';

import { Component, OnInit } from '@angular/core';

import {RimaAAAService} from '@colabo-rima/f-aaa/rima-aaa.service';
import {KNode} from '@colabo-knalledge/f-core/code/knalledge/kNode';
import {KEdge} from '@colabo-knalledge/f-core/code/knalledge/kEdge';
import {SearchSoundsService} from '../sound-result/searchSounds.service';
import {SoundResultVO} from '../sound-result/soundResultVO';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  dialogRef: any; //TODO: type: MatDialogRef;
  public sounds:SoundResultVO[] = [];

  constructor(
    private rimaAAAService: RimaAAAService,
    public dialog: MatDialog,
    private searchSoundsService: SearchSoundsService
  ) { }

  ngOnInit() {
    this.searchSoundsService.getSounds("fish").subscribe(this.soundsReceived.bind(this));
  }

  get isLoggedIn():Boolean{
    // TODO: Eliminate after RIMA AAA is fully implemented
    // Provide also possibility to avoid need for loging in
    return true;
    // return this.rimaAAAService.getUser() !== null;
  }

  get loggedUser(): KNode {
    return this.rimaAAAService.getUser();
  }
  
  searchSounds(search:string){
    this.searchSoundsService.getSounds(search).subscribe(this.soundsReceived.bind(this));
  }

  soundsReceived(sounds:SoundResultVO[]):void{
    this.sounds = sounds;
    console.log('sounds:',this.sounds);
  }

  openDialog(buttons:number, data:DialogData, options:any = null, afterClosed:Function = null): void {
    if(options === null){
      options = {};
    }
    options['width'] = '95%'
    options['data'] = data;
    console.log('openDialog',options);
    this.dialogRef = this.dialog.open((buttons == 1 ? Dialog1Btn : Dialog2Btn), options);
    if(afterClosed){this.dialogRef.afterClosed().subscribe(afterClosed);}
  }
}
