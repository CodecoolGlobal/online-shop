import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../router.animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  // animations: [moveIn(), fallIn()],
  // host: {'[@moveIn': ''}
})
export class AboutComponent implements OnInit {
  state = '';

  constructor() { }

  ngOnInit(): void {
  }

}
