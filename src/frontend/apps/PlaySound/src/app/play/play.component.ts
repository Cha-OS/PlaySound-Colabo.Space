import { MatDialog, MatDialogRef } from '@angular/material';
import {Dialog1Btn, Dialog2Btn, DialogData} from '../util/dialog';

import { Component, OnInit } from '@angular/core';

import {RimaAAAService} from '@colabo-rima/rima_aaa/rima-aaa.service';
import {KNode} from '@colabo-knalledge/knalledge_core/code/knalledge/kNode';
import {KEdge} from '@colabo-knalledge/knalledge_core/code/knalledge/kEdge';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  dialogRef: any; //TODO: type: MatDialogRef;

  constructor(
    private rimaAAAService: RimaAAAService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  get isLoggedIn():Boolean{
    return this.rimaAAAService.getUser() !== null;
  }

  get loggedUser(): KNode {
    return this.rimaAAAService.getUser();
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
