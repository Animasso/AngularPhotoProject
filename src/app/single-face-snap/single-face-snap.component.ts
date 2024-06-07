import { CommonModule } from '@angular/common';
import { FaceSnap } from '../models/face-snap';
import { Component, Input, OnInit } from '@angular/core';
import { FaceSnapsService } from '../../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss',
})
export class SingleFaceSnapComponent implements OnInit {
  @Input() facesnap!: FaceSnap;

  snapClicked!: boolean;
  snapTitle!: string;
  constructor(private faceSnapsService: FaceSnapsService) {}
  ngOnInit(): void {
    this.snapClicked = false;
    this.snapTitle = 'Oh Snap!';
  }
  onSnap() {
    if (this.snapClicked) {
      this.unSnap();
    } else {
      this.snap();
    }
  }
  unSnap() {
    this.faceSnapsService.snapFaceById(this.facesnap.id, 'unsnap');
    this.snapTitle = 'Oh Snap!';
    this.snapClicked = false;
  }
  snap() {
    this.faceSnapsService.snapFaceById(this.facesnap.id, 'snap');
    this.snapTitle = 'Oops unSnap!';
    this.snapClicked = true;
  }
}
