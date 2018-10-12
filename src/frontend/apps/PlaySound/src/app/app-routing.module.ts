import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import {PlayComponent} from './play/play.component';

import {RimaRegisterComponent} from '@colabo-rima/f-aaa/rima-register/rima-register.component';
import { RimaLoginComponent } from '@colabo-rima/f-aaa/rima-login/rima-login.component';

// import {TopiChatTalkForm} from '@colabo-topiChat/talk';

const routes: Routes = [
  {//default route
    path: '',
    redirectTo: '/play',
    pathMatch: 'full'
  },
  {
    path: 'play',
    component: PlayComponent
  },
  // same route but with the roomId provided
  {
    path: 'play/room/:roomId',
    component: PlayComponent
  },
  // same route but with the soundId provided
  {
    path: 'play/sound/:soundId',
    component: PlayComponent
  },
  // same route but with the roomId and soundId provided
  {
    path: 'play/room/:roomId/sound/:soundId',
    component: PlayComponent
  },
  {
    path: 'rima-register',
    component: RimaRegisterComponent
  },
  {
    path: 'rima-login',
    component: RimaLoginComponent
  }

/*
  - routes
    -    .when('/chat/:rooms/', {

    -     .when('/chat/:rooms/:sounds', {

    -     .when('/chat/:sounds', {

    -  .when('/chat', {

*/

];

@NgModule({
  exports: [
    // makes router directives available for use in
    // other components that will need them
    RouterModule
  ],
  imports: [
    // initialize RouterModule with routes
    RouterModule.forRoot(routes)
  ]
})

export class AppRoutingModule { }
