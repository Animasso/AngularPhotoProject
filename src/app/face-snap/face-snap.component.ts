import { CommonModule } from '@angular/common';
import { FaceSnap } from './../models/face-snap';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss',
})
export class FaceSnapComponent {
  constructor(private router: Router) {}
  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.facesnap.id}`);
  }
  @Input() facesnap!: FaceSnap;
}
