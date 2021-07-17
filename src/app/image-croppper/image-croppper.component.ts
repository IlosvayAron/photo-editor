import { Component, OnInit } from '@angular/core';
import { ImageService } from "../services/image.service";

@Component({
  selector: 'app-image-croppper',
  templateUrl: './image-croppper.component.html',
  styleUrls: ['./image-croppper.component.scss'],
  providers: [ImageService]
})
export class ImageCroppperComponent implements OnInit {

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
  }

  files: File[] = [];

  onSelect(event: {addedFiles: any;}){
    return this.imageService.onSelect(event);
  };

}
