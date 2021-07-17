import { Injectable } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  files: File[] = [];
  imageChangedEvent: any = '';

  onSelect(event: { addedFiles: any; }){
    this.imageChangedEvent = event;
    //this.files.push(...event.addedFiles);
    // csak az imageChangedEvent-et kellene használni valahogy
    console.log(this.imageChangedEvent);
  }

  getImage(): File[]{
    return this.files;
  }

  constructor() { }

}
