import {Component} from '@angular/core';

const FAKE_VIDEOS = {
  videos: [
    {
      name: "cat video"
    }
  ]
};

@Component({
  selector: 'my-app',
  templateUrl: 'video.html'
})
export class AppComponent {
  videos = FAKE_VIDEOS;
  title = 'CatTube';
}
