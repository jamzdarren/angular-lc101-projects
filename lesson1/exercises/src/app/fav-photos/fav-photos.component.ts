import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Random Images';
  image1 = 'https://images.freeimages.com/images/small-previews/6df/water-drop-on-leaf-1639205.jpg';
  image2 = 'https://images.freeimages.com/images/small-previews/924/toe-socks-1258857.jpg';
  image3 = 'https://images.freeimages.com/images/small-previews/db4/disturbing-water-1180557.jpg';

  constructor() { }

  ngOnInit() {
  }

}