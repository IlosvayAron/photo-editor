import { Component, OnInit } from '@angular/core';
import { Dimensions, ImageCroppedEvent, ImageTransform } from 'ngx-image-cropper';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-second-picture',
  templateUrl: './second-picture.component.html',
  styleUrls: ['./second-picture.component.scss']
})
export class SecondPictureComponent implements OnInit {
  f_max = 255;
  f_min = -255;
  f_step = 1;
  f_value = 0;

  s_max = 255;
  s_min = -255;
  s_step = 1;
  s_value = -255;

  th_max = 255;
  th_min = -255;
  th_step = 1;
  th_value = 255;

  f_plus(){
    if(this.f_value != 255){
      this.f_value++;
    }
  }

  f_minus(){
    if(this.f_value != -255){
      this.f_value--;
    }
  }

  s_plus(){
    if(this.s_value != 255){
      this.s_value++;
    }
  }

  s_minus(){
    if(this.s_value != -255){
      this.s_value--;
    }
  }

  th_plus(){
    if(this.th_value != 255){
      this.th_value++;
    }
  }

  th_minus(){
    if(this.th_value != -255){
      this.th_value--;
    }
  }

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
  }

  files: File[] = [];

  imageChangedEvent: any = '';
  croppedImage: any = '';
  canvasRotation = 0;
  rotation = 0;
  showCropper = false;
  transform: ImageTransform = {};

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent) {
      this.croppedImage = event.base64;
      this.imageService.pushData(this.croppedImage);
  }

  imageLoaded() {
    this.showCropper = true;
    console.log('Image loaded');
  }

  cropperReady(sourceImageDimensions: Dimensions) {
      console.log('Cropper ready', sourceImageDimensions);
  }

  loadImageFailed() {
      console.log('Load failed');
  }

  rotateLeft() {
      this.canvasRotation--;
      this.flipAfterRotate();
  }

  rotateRight() {
      this.canvasRotation++;
      this.flipAfterRotate();
  }

  private flipAfterRotate() {
      const flippedH = this.transform.flipH;
      const flippedV = this.transform.flipV;
      this.transform = {
          ...this.transform,
          flipH: flippedV,
          flipV: flippedH
      };
  }


  flipHorizontal() {
      this.transform = {
          ...this.transform,
          flipH: !this.transform.flipH
      };
  }

  flipVertical() {
      this.transform = {
          ...this.transform,
          flipV: !this.transform.flipV
      };
  }


  updateRotation() {
      this.transform = {
          ...this.transform,
          rotate: this.rotation
      };
  }
}
