import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-croppper',
  templateUrl: './image-croppper.component.html',
  styleUrls: ['./image-croppper.component.scss']
})
export class ImageCroppperComponent implements OnInit {

  constructor() {
    
   }

  ngOnInit(): void {
  }

  files: File[] = [];

  onSelect(event: { addedFiles: any; }){
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event: File) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }


}
