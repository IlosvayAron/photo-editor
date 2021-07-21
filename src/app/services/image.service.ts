import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  files: File[] = [];
  imageChangedEvent: any = '';

  onSelect(event: { addedFiles: any; }){
    this.imageChangedEvent = event;
    //this.files.push(...event.addedFiles);
    console.log(this.files);
    console.log(this.imageChangedEvent);
  }

  pushData(data: any){
    this.files.push(data);
    console.log(this.files);
  }

  getImage(): any[]{
    return this.files;
  }

  constructor() { }

}
