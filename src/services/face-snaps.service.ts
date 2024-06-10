import { Injectable } from '@angular/core';
import { FaceSnap } from '../app/models/face-snap';
import { SnapType } from '../app/models/snap-type.type';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapsService {
  private faceSnaps: FaceSnap[] = [
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
    ).withLocation('Dans les ténébres'),
    new FaceSnap(
      'ArchiThree',
      'Mon troisième meilleur ami depuis toujours !',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      50
    ),
  ];
  getFaceSnaps(): FaceSnap[] {
    return [...this.faceSnaps];
  }
  getFaceSnapById(faceSnapId: string): FaceSnap {
    const foundFaceSnap: FaceSnap | undefined = this.faceSnaps.find(
      (faceSnap) => faceSnap.id === faceSnapId
    );
    if (!foundFaceSnap) {
      throw new Error('Could not find');
    }
    return foundFaceSnap;
  }
  snapFaceById(faceSnapId: string, snapType: SnapType): void {
    const faceSnap: FaceSnap = this.getFaceSnapById(faceSnapId);
    faceSnap.snap(snapType);
  }
}
