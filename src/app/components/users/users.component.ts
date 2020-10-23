import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  user
  constructor(
    private _ac: ActivatedRoute
  ) {
    this.user = this._ac.snapshot.data.user
   }

}
