import { FaceSnapsService } from './../../services/face-snaps.service';
import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapComponent } from '../face-snap/face-snap.component';

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss',
  imports: [FaceSnapComponent],
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  //injection parameters for the service
  constructor(private faceSnapsService: FaceSnapsService) {}
  ngOnInit(): void {
    //to retrieve all the facesnaps
    this.faceSnaps = this.faceSnapsService.getFaceSnaps();
  }
}
