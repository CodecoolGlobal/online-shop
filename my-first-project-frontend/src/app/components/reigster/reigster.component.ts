import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {RegisterService} from '../../services/register.service';

@Component({
  selector: 'app-reigster',
  templateUrl: './reigster.component.html',
  styleUrls: ['./reigster.component.css']
})
export class RegisterComponent implements OnInit {

  newUser: User = new User();
  registered = false;

  constructor(private registerService: RegisterService) {}

  onSubmit(): void {
    console.log('submit test');
    this.registerService.sendUser(this.newUser)
      .subscribe(
        data => {
          this.registered = true;
          this.newUser = new User();
        },
        error => console.log(error)
      );
  }

  ngOnInit(): void {
  }

}
