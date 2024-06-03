import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FaceSnapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  faceSnaps!: FaceSnap[];
  mySnap!: FaceSnap;
  mySecondSnap!: FaceSnap;
  myThridSnap!: FaceSnap;
  ngOnInit(): void {
    this.faceSnaps = [
      new FaceSnap(
        'Archibold',
        'Mon meilleur ami depuis toujours !',
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        new Date(),
        100
      ),
      new FaceSnap(
        'ArchiTwo',
        'Mon second meilleur ami depuis toujours !',
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        new Date(),
        72
      ),
      new FaceSnap(
        'ArchiThree',
        'Mon troisième meilleur ami depuis toujours !',
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        new Date(),
        50
      ),
    ];

    this.faceSnaps[1].setlocation('Dans les ténébres');
  }
}
