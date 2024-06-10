import { CommonModule } from '@angular/common';
import { FaceSnap } from '../models/face-snap';
import { Component, Input, OnInit } from '@angular/core';
import { FaceSnapsService } from '../../services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss',
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;
  snapClicked!: boolean;
  snapTitle!: string;
  constructor(
    private faceSnapsService: FaceSnapsService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.prepareInterfaces();
    this.getFaceSnaps();
  }

  onSnap() {
    if (this.snapClicked) {
      this.unSnap();
    } else {
      this.snap();
    }
  }
  unSnap() {
    this.faceSnapsService.snapFaceById(this.faceSnap.id, 'unsnap');
    this.snapTitle = 'Oh Snap!';
    this.snapClicked = false;
  }
  snap() {
    this.faceSnapsService.snapFaceById(this.faceSnap.id, 'snap');
    this.snapTitle = 'Oops unSnap!';
    this.snapClicked = true;
  }
  private prepareInterfaces() {
    this.snapClicked = false;
    this.snapTitle = 'Oh Snap!';
  }
  private getFaceSnaps() {
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }
}
