import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rti';
  users = [];
  totalUsers = [];
  page = 1;

  constructor(private http: HttpService) {
    this.getData();
  }

  public getData () {
    this.http.getUsers(this.page).subscribe(
      users => {
        this.users = this.users.concat(users.results);
        this.totalUsers = this.totalUsers.concat(users.results);

        console.log(this.users);
      }
    )
  }

  public searchByName(value) {
    this.users = this.totalUsers.filter((user) => ((user.name.last + ' ' + user.name.first).search(value) != -1))
  }

  public loadMore() {
    this.page++;
    this.getData();
  }
}
