import { CommonModule, NgStyle } from '@angular/common';
import { FaceSnap } from './../models/face-snap';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss',
})
export class FaceSnapComponent implements OnInit {
  @Input() facesnap!: FaceSnap;

  title!: string;
  description!: string;
  createdAt!: Date;
  snaps!: number;
  imageUrl!: string;
  snapClicked!: boolean;
  snapTitle!: string;

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
    this.facesnap.removeSnap();
    this.snapTitle = 'Oh Snap!';
    this.snapClicked = false;
  }
  snap() {
    this.facesnap.addSnap();
    this.snapTitle = 'Oops unSnap!';
    this.snapClicked = true;
  }
}
