import { Component, OnInit, HostListener } from '@angular/core';
import { UserService } from '../user.service';

/*
  Creates a view for the user directory, containing the user cards for each profile
*/
@Component({
  selector: 'app-user-directory',
  templateUrl: './user-directory-app.component.html',
  styleUrls: ['./user-directory-app.component.css']
})
export class UserDirectoryAppComponent implements OnInit {

  users: Array<any>;
  page: number;
  showDownloadButton: boolean;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.page = 1;
    this.updateUserList();
    this.setShowDownload();
  }

  /*
    updates the list of users to show
  */
  updateUserList() {
    this.userService.getPaginatedUsers(this.page).subscribe(users => this.users = users);
  }

  incrementUserPage() {
    this.page += 1;
    this.updateUserList();
  }

  decrementUserPage() {
    this.page -= 1;
    this.updateUserList();
  }

  downloadUsersOnPage() {
    this.userService.downloadUsers(this.users);
  }

  /*
    Shows the download button only on screens larger than a tablet
  */
  setShowDownload() {
    this.showDownloadButton = window.innerWidth > 768;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.setShowDownload();
  }

}
