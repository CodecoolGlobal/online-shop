import {Component, OnInit, ViewChild} from '@angular/core';
import { moveIn, fallIn } from '../router.animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  // animations: [moveIn(), fallIn()],
  // host: {'[@moveIn': ''}
})
export class AboutComponent implements OnInit {
  @ViewChild('matCard')
  state = '';

  constructor() { }

  ngOnInit(): void {
  }

}
