import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlayComponent } from './play/play.component';

// Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import {MaterialModule} from './materialModule';
// import { OrderModule } from 'ngx-order-pipe'; //TODO
//import {MatInputModule, MatFormFieldControl} from '@angular/material';

// import {KnalledgeEdgeService} from '@colabo-knalledge/knalledge_store_core/knalledge-edge.service';
// import {KnalledgeNodeService} from '@colabo-knalledge/knalledge_store_core/knalledge-node.service';
// import {KnalledgeMapService} from '@colabo-knalledge/knalledge_store_core/knalledge-map.service';

// Puzzle modules
// import { RimaAaaModule } from '@colabo-rima/rima_aaa';
// import { TopiChatTalkModule } from '@colabo-topiChat/talk';

// import {IndexComponent} from './index/index.component';

// import {Dialog1Btn, Dialog2Btn} from './util/dialog';


import { AppRoutingModule } from './app-routing.module';

var moduleDeclarations = [
  AppComponent,
  PlayComponent
  // Dialog2Btn,
  // Dialog1Btn,
  // IndexComponent,

];

var moduleImports = [
  BrowserModule
  //,FormsModule,
  // ,ReactiveFormsModule

  // Material
  , BrowserAnimationsModule
  , MaterialModule
  // , FlexLayoutModule
  , AppRoutingModule
  // , OrderModule
  // ,
  // MatInputModule,
  // MatFormFieldControl
  // rima

  // Puzzle modules
  // , RimaAaaModule
];
// moduleImports.push(MainModule);

moduleImports.push(AppRoutingModule);

// import {GlobalEmittersArrayService} from '@colabo-puzzles/puzzles_core/code/puzzles/globalEmitterServicesArray';

declare var window:any;

// old external way of declaring puzzles' config
// export var Plugins:any = window.Config.Plugins;

@NgModule({
  declarations: moduleDeclarations,
  imports: moduleImports,
  entryComponents: [
    // You must include your dialog class in the list of entryComponents in your module definition so that the AOT compiler knows to create the ComponentFactory for it.
    // @see: https://material.angular.io/components/dialog/overview#aot-compilation
    // AdvancedDialog,
    // NotificationComponent
    // Dialog2Btn, Dialog1Btn, //needed otherwise "Runtime Error: No component factory found for Dialog"
  ],
  providers: [
    // KnalledgeEdgeService, KnalledgeNodeService, KnalledgeMapService,

    // old external way of injecting puzzles' config
    // through Plugins service
    // {provide: "Plugins", useValue: Plugins},

    // provide ng build error: "Can't resolve all parameters for GlobalEmitterService"
    // {provide: GlobalEmitterService, useClass: GlobalEmitterService},
    // {provide: GlobalEmittersArrayService, useClass: GlobalEmittersArrayService},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
