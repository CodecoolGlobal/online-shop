import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})

export class MainNavComponent {

  @Input() pageTitle: string;
  @Input() iconTitle: string;
  @Input() helpTitle: string;
  audio = new Audio();

  constructor() {}

  playAudio(): void {
    this.audio.src = '../../assets/mp3/pop.mp3';
    this.audio.play();
  }
}
