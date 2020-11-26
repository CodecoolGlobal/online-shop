import {Component, Input, OnInit} from '@angular/core';
import {BackendService} from '../../services/backend.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})

export class MainNavComponent implements OnInit {

  @Input() pageTitle: string;
  @Input() iconTitle: string;
  @Input() helpTitle: string;
  audio = new Audio();
  configData;
  counter;
  userStatusColor;

  constructor(private backendService: BackendService) {
  }

  ngOnInit(): void {
    this.configData = this.backendService.getConfig();
    this.counter = this.backendService.getCartTotal();
    this.backendService.getCartTotal().subscribe((res) => {
      this.counter = res;
    });
    this.backendService.getUserStatus().subscribe((res) => { this.userStatusColor = res ? 'warn' : 'primary';
    });
  }

  playAudio(): void {
    this.audio.src = '../../assets/mp3/pop.mp3';
    this.audio.play();
  }
}
