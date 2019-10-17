import { Component, OnInit, Input, HostListener } from '@angular/core';

/*
  This component creates a view for each individual user profile
*/
@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() user: any;
  picture: string;
  pictureSize: string;
  showMobileDetails = false;

  tabletMaxSize = 768;
  phoneMaxSize = 425;

  largePicSize = '128px';
  thumbnailPicSize = '48px';
  mediumPicSize = '72px';

  constructor() { }

  ngOnInit() {
    this.setPicture();
  }

  /*
    Sets the picture to use depending on the size of the window
  */
  setPicture() {
    if (window.innerWidth > this.tabletMaxSize) {
      this.pictureSize = this.largePicSize;
      this.picture = this.user.picture.large;
    } else if (window.innerWidth > this.phoneMaxSize) {
      this.pictureSize = this.mediumPicSize;
      this.picture = this.user.picture.medium;
    } else {
      this.pictureSize = this.thumbnailPicSize;
      this.picture = this.user.picture.thumbnail;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.setPicture();
  }

}
